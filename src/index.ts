import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com','token.yishangcloud.cn','open.feishu.cn','pay.xunkecloud.cn']);

fieldDecoratorKit.setDecorator({
  name: 'AI 视频(Sora2)',
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
        'videoMethod': '模型选择',
        'videoPrompt': '视频提示词',
        'refImage': '参考图片',
        'size': '视频尺寸',
        'promptRema': '视频提示词',
      },
      'en-US': {
        'videoMethod': 'Model selection',
        'videoPrompt': 'Video prompt',
        'refImage': 'Reference image',
        'size': 'Video size',   
        'promptRema': 'Video prompt reminder',
      },
      'ja-JP': {
        'videoMethod': 'モデル選択',
        'videoPrompt': 'ビデオ提示词',
        'refImage': '参考画像',
        'size': 'ビデオサイズ',   
        'promptRema': 'ビデオ提示词の注意点',
      },
  },
  authorizations: 
    {
      id: 'auth_id',// 授权的id，用于context.fetch第三个参数指定使用
      platform: 'xunkecloud',// 授权平台，目前可以填写当前平台名称
      type: AuthorizationType.HeaderBearerToken, // 授权类型
      required: true,// 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
      instructionsUrl: "http://api.xunkecloud.cn/login",// 帮助链接，告诉使用者如何填写这个apikey
      label: '关联账号', // 授权平台，告知用户填写哪个平台的信息
      tooltips: '请配置授权', // 提示，引导用户添加授权
      icon: { // 当前平台的图标
        light: '', 
        dark: ''
      }
    },
  // 定义捷径的入参
  formItems: [
    {
      key: 'videoMethod',
      label: t('videoMethod'),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: 'sora-2',
        placeholder: '请选择模型',
        options: [
          {
            key: 'sora-2',
            title: 'sora-2',
          },
          {
            key: 'sora-2-hd',
            title: 'sora-2-hd',
          },
        ]
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'videoPrompt',
      label: t('videoPrompt'),
      component: FormItemComponent.FieldSelect,
      tooltips: {
        title:  t('promptRema')
      },
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
    {
      key: 'size',
      label: t('size'),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: '720x1280',
        placeholder: '请选择模型',
        options: [
          {
            key: '720x1280',
            title: '720x1280',
          },
          {
            key: '1280x720',
            title: '1280x720',
          },
        ]
      },
      validator: {
        required: true,
      }
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Attachment,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formItemParams: any) => {
    const { videoMethod, videoPrompt, refImage, size } = formItemParams;
    
   

    

     /** 为方便查看日志，使用此方法替代console.log */
    function debugLog(arg: any) {
      // @ts-ignore
      console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        ...arg
      }))
    }
    try {
     const createVideoUrl = `http://token.yishangcloud.cn/v1/images/generations`;
            // 打印API调用参数信息
            // 生成随机值并保存到变量中，供后面使用
            const responseFormatValue = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
            
            // 构建请求参数，动态添加quality参数
            const requestBody: any = {
                model: videoMethod,
                "prompt": videoPrompt,
                // style: seconds.value,
                size: size,
                "response_format": responseFormatValue
            };
            
            // 如果refImage存在且有第一个元素的tmp_url，则添加quality参数
            if (refImage && refImage.length > 0 && refImage[0] && refImage[0].tmp_url) {
                requestBody.quality = refImage[0].tmp_url;
            }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            };

            console.log(requestOptions);
            
            
            const taskResp = await context.fetch(createVideoUrl, requestOptions, 'auth_id');

    
           
      debugLog(
        {'=1 视频创建接口结果':taskResp}
      )

      // 检查API响应状态
      if (!taskResp.ok) {
        const errorData = await taskResp.json();
        const errorText = JSON.stringify(errorData);
        
        // 如果是超时错误（状态码408或其他超时相关错误），继续执行后面的内容
        if (taskResp.status === 408 || errorText.includes('timeout') || errorText.includes('Timeout')) {
          console.log('检测到超时错误，继续执行后续逻辑...');
          // 继续执行后面的代码，不返回错误
        } else {
            throw new Error(errorData.error.message);
        }
        
      }

       debugLog(
        {'=2 任务ID':responseFormatValue}
      )
      
      // 添加类型定义
      interface TaskResponse {
        task_id?: string;
        taskId?: string;
      }
      
      interface VideoResult {
        video_url?: string;
      }
      
    

      // 将refImage转换为字符串
      const refImageString = refImage && refImage.length > 0 ? refImage.map(item => item.tmp_url).join(',') : '';
      const apiUrl = 'https://open.feishu.cn/anycross/trigger/callback/NmZlMjIxNzEzY2VmODk2NjAxMTJjMzVhZjBlODJlMzkw';

      
      // 调用前等待60秒
      console.log('首次调用前等待60秒...');
      await new Promise(resolve => setTimeout(resolve, 60000));
      
      const maxTotalWaitTime = 900000; // 最多等待900秒（15分钟）
      const retryDelay = 45000; // 每次重试等待45秒
      let totalWaitTime = 60000; // 已经等待了60秒
      
      let checkUrl = async (attempt: number = 1): Promise<string> => {
        console.log(`第${attempt}次查询任务状态...`);

          // 构建请求参数，动态添加quality参数
                const requestBody: any = {
                  id: responseFormatValue,
                  auth_id: 'auth_id',
                  prompt: videoPrompt,
                  image: refImageString,
                  videoMethod: videoMethod.value
                };
            
            
            const taskRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            };

            const response = await context.fetch(apiUrl, taskRequestOptions, 'auth_id');
        
       
        debugLog({'=2 视频结果查询结果': response});
        const result = await response.json() as VideoResult;
        
        // 正确检查video_url是否存在且不为空
        if (result.video_url && result.video_url !== "null" && result.video_url !== "") {
          console.log('视频生成完成，URL:', result.video_url);
          return result.video_url;
        } else {
          // 检查是否超过最大等待时间
          if (totalWaitTime >= maxTotalWaitTime) {
            console.log(`已等待${totalWaitTime/1000}秒，超过最大等待时间${maxTotalWaitTime/1000}秒，停止查询`);
            throw new Error('视频生成超时');
          }
          
          console.log(`视频尚未生成，${retryDelay/1000}秒后重试... (已等待: ${totalWaitTime/1000}秒)`);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          totalWaitTime += retryDelay;
          return checkUrl(attempt + 1);
        }
      };
      
      const videoUrl = await checkUrl();
        return {
          code: FieldExecuteCode.Success, // 0 表示请求成功
          // data 类型需与下方 resultType 定义一致
          data: [{
            fileName: videoPrompt + '.mp4',
            type: 'video',
            url: videoUrl
          }]
        };

     
   
    } catch (e) {
      console.log('====error', String(e));
       if (String(e).includes('无可用渠道')) {
        
        return {
          code: FieldExecuteCode.Success, // 0 表示请求成功
          // data 类型需与下方 resultType 定义一致
          data:[{
              fileName: "捷径异常.mp4",
              type: 'video',
              url: "https://pay.xunkecloud.cn/image/unusual.mp4"
            }] 
        };
      }

      // 检查错误消息中是否包含余额耗尽的信息
      if (String(e).includes('令牌额度已用尽')) {
        console.log(123+"=========");
        
        return {
          code: FieldExecuteCode.Success, // 0 表示请求成功
          // data 类型需与下方 resultType 定义一致
            data:[{
              fileName: "余额耗尽.mp4",
              type: 'video',
              url: "https://pay.xunkecloud.cn/image/Insufficient.mp4"
            }] 
        };
      }
       if (String(e).includes('无效的令牌')) {
        console.log(456+"=========");
        
        return {
        code: FieldExecuteCode.Success, // 0 表示请求成功
        data: [
          {
            fileName: "无效的令牌.mp4",
            type: 'video',
            url: "https://pay.xunkecloud.cn/image/tokenError.mp4"
          }
        ],
        }
      }
      return {
          code: FieldExecuteCode.Success, // 0 表示请求成功
          // data 类型需与下方 resultType 定义一致
          data:[{
              fileName: "捷径异常.mp4",
              type: 'video',
              url: "https://pay.xunkecloud.cn/image/unusual.mp4"
            }] 
        };
    }
  },
});
export default fieldDecoratorKit;
