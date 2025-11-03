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
  name: 'AI 视频(Sora2)',
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'videoMethod': '模型选择',
      'videoPrompt': '视频提示词',
      'refImage': '参考图片',
      'size': '视频尺寸',
      'promptRema': '视频提示词'
    },
    'en-US': {
      'videoMethod': 'Model selection',
      'videoPrompt': 'Video prompt',
      'refImage': 'Reference image',
      'size': 'Video size',
      'promptRema': 'Video prompt reminder'
    },
    'ja-JP': {
      'videoMethod': 'モデル選択',
      'videoPrompt': 'ビデオ提示词',
      'refImage': '参考画像',
      'size': 'ビデオサイズ',
      'promptRema': 'ビデオ提示词の注意点'
    }
  },
  authorizations: {
    id: 'auth_id',
    // 授权的id，用于context.fetch第三个参数指定使用
    platform: 'xunkecloud',
    // 授权平台，目前可以填写当前平台名称
    type: _dingtalkDocsCoolApp.AuthorizationType.HeaderBearerToken,
    // 授权类型
    required: true,
    // 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "http://api.xunkecloud.cn/login",
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
  // 定义捷径的入参
  formItems: [{
    key: 'videoMethod',
    label: t('videoMethod'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: 'sora-2',
      placeholder: '请选择模型',
      options: [{
        key: 'sora-2',
        title: 'sora-2'
      }, {
        key: 'sora-2-hd',
        title: 'sora-2-hd'
      }]
    },
    validator: {
      required: true
    }
  }, {
    key: 'videoPrompt',
    label: t('videoPrompt'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    tooltips: {
      title: t('promptRema')
    },
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
  }, {
    key: 'size',
    label: t('size'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: '720x1280',
      placeholder: '请选择模型',
      options: [{
        key: '720x1280',
        title: '720x1280'
      }, {
        key: '1280x720',
        title: '1280x720'
      }]
    },
    validator: {
      required: true
    }
  }],
  // 定义捷径的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Attachment
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(context, formItemParams) {
      var videoMethod, videoPrompt, refImage, size, debugLog, createVideoUrl, responseFormatValue, requestBody, requestOptions, taskResp, errorData, errorText, refImageString, apiUrl, maxTotalWaitTime, retryDelay, totalWaitTime, _checkUrl, videoUrl, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            debugLog = function _debugLog(arg) {
              // @ts-ignore
              console.log(JSON.stringify(_objectSpread({
                timestamp: new Date().toISOString()
              }, arg)));
            };
            videoMethod = formItemParams.videoMethod, videoPrompt = formItemParams.videoPrompt, refImage = formItemParams.refImage, size = formItemParams.size;
            /** 为方便查看日志，使用此方法替代console.log */
            _context2.p = 1;
            createVideoUrl = "http://token.yishangcloud.cn/v1/images/generations"; // 打印API调用参数信息
            // 生成随机值并保存到变量中，供后面使用
            responseFormatValue = "".concat(Date.now(), "_").concat(Math.random().toString(36).substring(2, 8)); // 构建请求参数，动态添加quality参数
            requestBody = {
              model: videoMethod,
              "prompt": videoPrompt,
              // style: seconds.value,
              size: size,
              "response_format": responseFormatValue
            }; // 如果refImage存在且有第一个元素的tmp_url，则添加quality参数
            if (refImage && refImage.length > 0 && refImage[0] && refImage[0].tmp_url) {
              requestBody.quality = refImage[0].tmp_url;
            }
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestBody)
            };
            console.log(requestOptions);
            _context2.n = 2;
            return context.fetch(createVideoUrl, requestOptions, 'auth_id');
          case 2:
            taskResp = _context2.v;
            debugLog({
              '=1 视频创建接口结果': taskResp
            });

            // 检查API响应状态
            if (taskResp.ok) {
              _context2.n = 5;
              break;
            }
            _context2.n = 3;
            return taskResp.json();
          case 3:
            errorData = _context2.v;
            errorText = JSON.stringify(errorData); // 如果是超时错误（状态码408或其他超时相关错误），继续执行后面的内容
            if (!(taskResp.status === 408 || errorText.includes('timeout') || errorText.includes('Timeout'))) {
              _context2.n = 4;
              break;
            }
            console.log('检测到超时错误，继续执行后续逻辑...');
            // 继续执行后面的代码，不返回错误
            _context2.n = 5;
            break;
          case 4:
            throw new Error(errorData.error.message);
          case 5:
            debugLog({
              '=2 任务ID': responseFormatValue
            });

            // 添加类型定义
            // 将refImage转换为字符串
            refImageString = refImage && refImage.length > 0 ? refImage.map(function (item) {
              return item.tmp_url;
            }).join(',') : '';
            apiUrl = 'https://open.feishu.cn/anycross/trigger/callback/NmZlMjIxNzEzY2VmODk2NjAxMTJjMzVhZjBlODJlMzkw'; // 调用前等待60秒
            console.log('首次调用前等待60秒...');
            _context2.n = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 60000);
            });
          case 6:
            maxTotalWaitTime = 900000; // 最多等待900秒（15分钟）
            retryDelay = 45000; // 每次重试等待45秒
            totalWaitTime = 60000; // 已经等待了60秒
            _checkUrl = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                var attempt,
                  requestBody,
                  taskRequestOptions,
                  response,
                  result,
                  _args = arguments;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      attempt = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
                      console.log("\u7B2C".concat(attempt, "\u6B21\u67E5\u8BE2\u4EFB\u52A1\u72B6\u6001..."));

                      // 构建请求参数，动态添加quality参数
                      requestBody = {
                        id: responseFormatValue,
                        auth_id: 'auth_id',
                        prompt: videoPrompt,
                        image: refImageString,
                        videoMethod: videoMethod.value
                      };
                      taskRequestOptions = {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                      };
                      _context.n = 1;
                      return context.fetch(apiUrl, taskRequestOptions, 'auth_id');
                    case 1:
                      response = _context.v;
                      debugLog({
                        '=2 视频结果查询结果': response
                      });
                      _context.n = 2;
                      return response.json();
                    case 2:
                      result = _context.v;
                      if (!(result.video_url && result.video_url !== "null" && result.video_url !== "")) {
                        _context.n = 3;
                        break;
                      }
                      console.log('视频生成完成，URL:', result.video_url);
                      return _context.a(2, result.video_url);
                    case 3:
                      if (!(totalWaitTime >= maxTotalWaitTime)) {
                        _context.n = 4;
                        break;
                      }
                      console.log("\u5DF2\u7B49\u5F85".concat(totalWaitTime / 1000, "\u79D2\uFF0C\u8D85\u8FC7\u6700\u5927\u7B49\u5F85\u65F6\u95F4").concat(maxTotalWaitTime / 1000, "\u79D2\uFF0C\u505C\u6B62\u67E5\u8BE2"));
                      throw new Error('视频生成超时');
                    case 4:
                      console.log("\u89C6\u9891\u5C1A\u672A\u751F\u6210\uFF0C".concat(retryDelay / 1000, "\u79D2\u540E\u91CD\u8BD5... (\u5DF2\u7B49\u5F85: ").concat(totalWaitTime / 1000, "\u79D2)"));
                      _context.n = 5;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, retryDelay);
                      });
                    case 5:
                      totalWaitTime += retryDelay;
                      return _context.a(2, _checkUrl(attempt + 1));
                    case 6:
                      return _context.a(2);
                  }
                }, _callee);
              }));
              return function checkUrl() {
                return _ref.apply(this, arguments);
              };
            }();
            _context2.n = 7;
            return _checkUrl();
          case 7:
            videoUrl = _context2.v;
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              // data 类型需与下方 resultType 定义一致
              data: [{
                fileName: videoPrompt + '.mp4',
                type: 'video',
                url: videoUrl
              }]
            });
          case 8:
            _context2.p = 8;
            _t = _context2.v;
            console.log('====error', String(_t));
            if (!String(_t).includes('无可用渠道')) {
              _context2.n = 9;
              break;
            }
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              // data 类型需与下方 resultType 定义一致
              data: [{
                fileName: "捷径异常.mp4",
                type: 'video',
                url: "https://pay.xunkecloud.cn/image/unusual.mp4"
              }]
            });
          case 9:
            if (!String(_t).includes('令牌额度已用尽')) {
              _context2.n = 10;
              break;
            }
            console.log(123 + "=========");
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              // data 类型需与下方 resultType 定义一致
              data: [{
                fileName: "余额耗尽.mp4",
                type: 'video',
                url: "https://pay.xunkecloud.cn/image/Insufficient.mp4"
              }]
            });
          case 10:
            if (!String(_t).includes('无效的令牌')) {
              _context2.n = 11;
              break;
            }
            console.log(456 + "=========");
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              data: [{
                fileName: "无效的令牌.mp4",
                type: 'video',
                url: "https://pay.xunkecloud.cn/image/tokenError.mp4"
              }]
            });
          case 11:
            return _context2.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              // 0 表示请求成功
              // data 类型需与下方 resultType 定义一致
              data: [{
                fileName: "捷径异常.mp4",
                type: 'video',
                url: "https://pay.xunkecloud.cn/image/unusual.mp4"
              }]
            });
        }
      }, _callee2, null, [[1, 8]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;