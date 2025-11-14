import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
import * as https from 'https';
import FormData from 'form-data';
import { log } from 'console';

const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com','token.yishangcloud.cn','open.feishu.cn','pay.xunkecloud.cn']);

fieldDecoratorKit.setDecorator({
  name: 'AI 图片编辑(Nano)',
  // 定义AI 字段的i18n语言资源
  i18nMap: {
    'zh-CN': {
        'imageMethod': '模型选择',
        'imagePrompt': '提示词',
        'refImage': '参考图片',
        'errorTips1': 'AI 字段异常，维护中可联系开发者咨询', 
      },
      'en-US': {
        'imageMethod': 'Model selection',
        'imagePrompt': 'Image editing prompt',
        'refImage': 'Reference image',
        'errorTips1': 'Model selection is required',
      },
      'ja-JP': {
        'imageMethod': 'モデル選択',
        'imagePrompt': '画像編集提示詞',
        'refImage': '参考画像',
        'errorTips1': 'モデル選択は必須です',

      },
  },
    errorMessages: {
    // 定义错误信息集合
    'error1': t('errorTips1'),
  },
  authorizations: 
    {
      id: 'auth_id',// 授权的id，用于context.fetch第三个参数指定使用
      platform: 'yishangcloud',// 授权平台，目前可以填写当前平台名称
      type: AuthorizationType.HeaderBearerToken, // 授权类型
      required: true,// 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
      instructionsUrl: "https://token.yishangcloud.cn/",// 帮助链接，告诉使用者如何填写这个apikey
      label: '关联账号', // 授权平台，告知用户填写哪个平台的信息
      tooltips: '请配置授权', // 提示，引导用户添加授权
      icon: { // 当前平台的图标
        light: '', 
        dark: ''
      }
    },
  // 定义AI 字段的入参
  formItems: [
    {
      key: 'imageMethod',
      label: t('imageMethod'),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: 'nano-banana',
        placeholder: '请选择模型',
        options: [
          {
            key: 'nano-banana',
            title: 'nano-banana',
          }
        ]
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'imagePrompt',
      label: t('imagePrompt'),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: 'single',
        supportTypes: [FieldType.Text, FieldType.Number,FieldType.SingleSelect,FieldType.MultiSelect],
      },
      validator: {
        required: true,
      }
    },
   {
      key: 'refImage',
      label: t('refImage'),
      component: FormItemComponent.FieldSelect,
      tooltips: {
        title:  '请上传参考图片文件'
      },
      props: {
        mode: 'single',
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      }
    },
  ],
  // 定义AI 字段的返回结果类型
  resultType: {
    type: FieldType.Attachment,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context: any, formItemParams: any) => {
    const { imageMethod, imagePrompt, refImage } = formItemParams;
        
     /** 为方便查看日志，使用此方法替代console.log */
    function debugLog(arg: any) {
      // @ts-ignore
      console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        ...arg
      }))
    }
    
    try {

      const createImageUrl = `http://token.yishangcloud.cn/v1/images/generations` 
      
      


      // 提取图片链接函数
      function extractImageUrls(imageData: any): string[] {
        if (!imageData || !Array.isArray(imageData)) {
          return [];
        }
        
        const urls: string[] = [];
        
        imageData.forEach((item: any) => {
          if (item.tmp_url) {
            // 清理URL中的反引号和空格
            const cleanUrl = item.tmp_url.replace(/[`\s]/g, '');
            urls.push(cleanUrl);
          }
        });
        
        return urls;
      }

      // 远程图片转Buffer工具函数
    

      let taskResp;
      
    
        const jsonRequestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            model: imageMethod,
            "prompt": imagePrompt,
            "image": extractImageUrls(refImage),
            "response_format":"url"
          })
        };
        

        
      
        
        taskResp = await context.fetch(createImageUrl, jsonRequestOptions, 'auth_id');
      

      if (!taskResp) {
        throw new Error('请求未能成功发送');
      }

      debugLog({'=1 图片创建接口结果': taskResp});
      
      if (!taskResp.ok) {
        const errorData = await taskResp.json().catch(() => ({}));
        console.error('API请求失败:', taskResp.status, errorData);
        
        // 检查HTTP错误响应中的无效令牌错误
        if (errorData.error && errorData.error.message ) {
          throw new Error(errorData.error.message);
        }
        
        throw new Error(`API请求失败: ${taskResp.status} ${taskResp.statusText}`);
      }
      
      const initialResult = await taskResp.json();
      
      if (!initialResult || !initialResult.data || !Array.isArray(initialResult.data) || initialResult.data.length === 0) {
        throw new Error('API响应数据格式不正确或为空');
      }
      
      let imageUrl = initialResult.data[0].url;
      console.log('imageUrl:', imageUrl);
      
      if (!imageUrl) {
        throw new Error('未获取到图片URL');
      }
      
     

      return {
          code: FieldExecuteCode.Success, // 0 表示请求成功
          // data 类型需与下方 resultType 定义一致
          data: [{
            fileName: imagePrompt +'.png',
            type: 'image',
            url: imageUrl
          }]
        };

      
    } catch (e) {
      console.log('====error', String(e));
      
       if (String(e).includes('无可用渠道')) { 
        return {
          code: FieldExecuteCode.Error, 
          errorMessage: 'error1',
        };
      }

      // 检查错误消息中是否包含余额耗尽的信息
      if (String(e).includes('令牌额度已用尽')||String(e).includes('quota')) {
        
        return {
          code: FieldExecuteCode.QuotaExhausted, 
        };
      }
       if (String(e).includes('无效的令牌')) {
        
        return {
          code: FieldExecuteCode.ConfigError, 
        };
      }
       return {
          code: FieldExecuteCode.Error, 
          errorMessage: 'error1',
        };
    }
  }
});
export default fieldDecoratorKit;
