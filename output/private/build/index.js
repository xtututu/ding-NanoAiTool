"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;

// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'token.yishangcloud.cn', 'open.feishu.cn', 'pay.xunkecloud.cn']);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: 'AI 图片编辑(Nano)',
  // 定义AI 字段的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'imageMethod': '模型选择',
      'imagePrompt': '提示词',
      'refImage': '参考图片',
      'errorTips1': 'AI 字段异常，维护中可联系开发者咨询'
    },
    'en-US': {
      'imageMethod': 'Model selection',
      'imagePrompt': 'Image editing prompt',
      'refImage': 'Reference image',
      'errorTips1': 'Model selection is required'
    },
    'ja-JP': {
      'imageMethod': 'モデル選択',
      'imagePrompt': '画像編集提示詞',
      'refImage': '参考画像',
      'errorTips1': 'モデル選択は必須です'
    }
  },
  errorMessages: {
    // 定义错误信息集合
    'error1': t('errorTips1')
  },
  authorizations: {
    id: 'auth_id',
    // 授权的id，用于context.fetch第三个参数指定使用
    platform: 'yishangcloud',
    // 授权平台，目前可以填写当前平台名称
    type: _dingtalkDocsCoolApp.AuthorizationType.HeaderBearerToken,
    // 授权类型
    required: true,
    // 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "https://token.yishangcloud.cn/",
    // 帮助链接，告诉使用者如何填写这个apikey
    label: '关联账号',
    // 授权平台，告知用户填写哪个平台的信息
    tooltips: '请配置授权',
    // 提示，引导用户添加授权
    icon: {
      // 当前平台的图标
      light: '',
      dark: ''
    }
  },
  // 定义AI 字段的入参
  formItems: [{
    key: 'imageMethod',
    label: t('imageMethod'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: 'nano-banana',
      placeholder: '请选择模型',
      options: [{
        key: 'nano-banana',
        title: 'nano-banana'
      }]
    },
    validator: {
      required: true
    }
  }, {
    key: 'imagePrompt',
    label: t('imagePrompt'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      mode: 'single',
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Text, _dingtalkDocsCoolApp.FieldType.Number, _dingtalkDocsCoolApp.FieldType.SingleSelect, _dingtalkDocsCoolApp.FieldType.MultiSelect]
    },
    validator: {
      required: true
    }
  }, {
    key: 'refImage',
    label: t('refImage'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    tooltips: {
      title: '请上传参考图片文件'
    },
    props: {
      mode: 'single',
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Attachment]
    },
    validator: {
      required: false
    }
  }],
  // 定义AI 字段的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Attachment
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, formItemParams) {
      var imageMethod, imagePrompt, refImage, debugLog, extractImageUrls, createImageUrl, taskResp, jsonRequestOptions, errorData, initialResult, imageUrl, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            debugLog = function _debugLog(arg) {
              // @ts-ignore
              console.log(JSON.stringify(_objectSpread({
                timestamp: new Date().toISOString()
              }, arg)));
            };
            imageMethod = formItemParams.imageMethod, imagePrompt = formItemParams.imagePrompt, refImage = formItemParams.refImage;
            /** 为方便查看日志，使用此方法替代console.log */
            _context.p = 1;
            // 提取图片链接函数
            extractImageUrls = function extractImageUrls(imageData) {
              if (!imageData || !Array.isArray(imageData)) {
                return [];
              }
              var urls = [];
              imageData.forEach(function (item) {
                if (item.tmp_url) {
                  // 清理URL中的反引号和空格
                  var cleanUrl = item.tmp_url.replace(/[`\s]/g, '');
                  urls.push(cleanUrl);
                }
              });
              return urls;
            }; // 远程图片转Buffer工具函数
            createImageUrl = "http://token.yishangcloud.cn/v1/images/generations";
            jsonRequestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                model: imageMethod,
                "prompt": imagePrompt,
                "image": extractImageUrls(refImage),
                "response_format": "url"
              })
            };
            _context.n = 2;
            return context.fetch(createImageUrl, jsonRequestOptions, 'auth_id');
          case 2:
            taskResp = _context.v;
            if (taskResp) {
              _context.n = 3;
              break;
            }
            throw new Error('请求未能成功发送');
          case 3:
            debugLog({
              '=1 图片创建接口结果': taskResp
            });
            if (taskResp.ok) {
              _context.n = 6;
              break;
            }
            _context.n = 4;
            return taskResp.json()["catch"](function () {
              return {};
            });
          case 4:
            errorData = _context.v;
            console.error('API请求失败:', taskResp.status, errorData);

            // 检查HTTP错误响应中的无效令牌错误
            if (!(errorData.error && errorData.error.message)) {
              _context.n = 5;
              break;
            }
            throw new Error(errorData.error.message);
          case 5:
            throw new Error("API\u8BF7\u6C42\u5931\u8D25: ".concat(taskResp.status, " ").concat(taskResp.statusText));
          case 6:
            _context.n = 7;
            return taskResp.json();
          case 7:
            initialResult = _context.v;
            if (!(!initialResult || !initialResult.data || !Array.isArray(initialResult.data) || initialResult.data.length === 0)) {
              _context.n = 8;
              break;
            }
            throw new Error('API响应数据格式不正确或为空');
          case 8:
            imageUrl = initialResult.data[0].url;
            console.log('imageUrl:', imageUrl);
            if (imageUrl) {
              _context.n = 9;
              break;
            }
            throw new Error('未获取到图片URL');
          case 9:
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              // data 类型需与下方 resultType 定义一致
              data: [{
                fileName: imagePrompt + '.png',
                type: 'image',
                url: imageUrl
              }]
            });
          case 10:
            _context.p = 10;
            _t = _context.v;
            console.log('====error', String(_t));
            if (!String(_t).includes('无可用渠道')) {
              _context.n = 11;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              errorMessage: 'error1'
            });
          case 11:
            if (!(String(_t).includes('令牌额度已用尽') || String(_t).includes('quota'))) {
              _context.n = 12;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.QuotaExhausted
            });
          case 12:
            if (!String(_t).includes('无效的令牌')) {
              _context.n = 13;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.ConfigError
            });
          case 13:
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              errorMessage: 'error1'
            });
        }
      }, _callee, null, [[1, 10]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;