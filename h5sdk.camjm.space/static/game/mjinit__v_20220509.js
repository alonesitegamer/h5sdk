var sdkUrl = "";

var isLoadRemoteJsonComplete_dw = false;   //是否加载完成json配置文件
var isMatchingGame_dw = false;             //dw是否存在匹配的游戏，以json文件中的gameid和url中的g参数值匹配
var isInitComplete_dw = false;             //dw是否初始化完成
var configData_dw = new Object();
var configData_dw_g = new Object();
var isLoadRemoteJsonComplete_fbq = false;
var isMatchingGame_fbq = false;             //dw是否存在匹配的游戏，以json文件中的gameid和url中的g参数值匹配
var isInitComplete_fbq = false; 
var configData_fbq = new Object();
var configData_fbq_g = new Object();

var isAutoLogin = true;  //是否自动登录，用于注册失败后，是否自动登录到注册账号

var regErrTipList = {
  en : "Registration has exceeded the limit. Please log in with your account and password, or come back to register 24 hours later",
  zh : "注册次数已超过限制，请使用账号密码登录或24小时内后重新注册"
}

// let script_gejs1 = $('<script src="https://h5sdk.camjm.space/static/game/platformJS/DATAWIN.js"></script>')
// $('body').append(script_gejs1);

fetch('https://h5sdk.camjm.space/static/game/config/fbqSDK_config.json')
  .then(response => {
    if (response.ok) {
      return response.json(); // 将响应体转换为JSON
    }
    throw new Error('Network response was not ok.');
  })
  .then(jsonData => {
    isLoadRemoteJsonComplete_fbq = true;
    configData_fbq = jsonData;
    for(let i = 0; i < configData_fbq.fbqSDK_config.length;i++){
      if(getParam('g') == configData_fbq.fbqSDK_config[i].GameID){
        configData_fbq_g = configData_fbq.fbqSDK_config[i];
        isMatchingGame_fbq = true;
        break;
      }
    }
    let initParams = {
       pixel_id : configData_fbq_g.PixelID
    }
    if(getParam('g') == configData_fbq_g.GameID){
      fb_sdk.fbqInit(initParams)
    }
    //console.log(jsonData); // 处理JSON数据
    //console.log("configData_ge:  ",configData_ge); // 处理JSON数据
  })
  .catch(error => {
    console.log("Error loading remote json file: "+error, 2000)
    //Toast("Error loading remote json file: "+error, 2000)
    //console.error('There has been a problem with your fetch operation:', error); // 处理错误
  });

fetch('https://h5sdk.camjm.space/static/game/config/dataWinSDK_config.json')
  .then(response => {
    if (response.ok) {
      return response.json(); // 将响应体转换为JSON
    }
    throw new Error('Network response was not ok.');
  })
  .then(jsonData => {
    isLoadRemoteJsonComplete_dw = true;
    configData_dw = jsonData;
    for(let i = 0; i < configData_dw.dataWinSDK_config.length;i++){
      if(getParam('g') == configData_dw.dataWinSDK_config[i].GameID){
        configData_dw_g = configData_dw.dataWinSDK_config[i];
        isMatchingGame_dw = true;
        break;
      }
    }
    let initParams = {
       appkey : configData_dw_g.AppKey,
       app_id : configData_dw_g.AppID,
       ver_id : configData_dw_g.VerID,
       config : {
         logEnabled : false
       }
    }
    if(getParam('g') == configData_dw_g.GameID){
      dataWin_sdk.init(initParams)
    }
    //console.log(jsonData); // 处理JSON数据
    //console.log("configData_ge:  ",configData_ge); // 处理JSON数据
  })
  .catch(error => {
    console.log("Error loading remote json file: "+error, 2000)
    //Toast("Error loading remote json file: "+error, 2000)
    //console.error('There has been a problem with your fetch operation:', error); // 处理错误
  });

function parseParams(data) {
  try {
    var tempArr = [];
    for (var i in data) {
      var key = encodeURIComponent(i);
      var value = encodeURIComponent(data[i]);
      tempArr.push(key + "=" + value);
    }
    var urlParamsStr = tempArr.join("&");
    return urlParamsStr;
  } catch (err) {
    return "";
  }
}

function myConfirm(msg, yes = this.paymentLang.confirm, no = this.paymentLang.close, showCancel = true, yesHandler, refuseHandler, title = '提示') {
  let _html = $(
      `
      <div class='my-confirm-div'>
        <div class='my-confirm-board'>
          <div class='my-confirm-title'>${title}</div>
          <div class='my-confirm-content'>${msg}</div>
          <div class='my-confirm-btn-group'>
            <div class='my-confirm-btn my-confirm-yes'>${yes}</div>
            ${showCancel ? `<div class="my-confirm-btn my-confirm-no">${no}</div>` : ''}
          </div> 
        </div>
      </div>
    `
  );
  $(_html).find('.my-confirm-yes').bind('click', yesHandler);
  $(_html).find('.my-confirm-btn').bind('click', function () {
    $('.my-confirm-div').remove()
  });
  $(_html).find('.my-confirm-no').bind('mousedown', refuseHandler);
  $("body").append(_html);
}

function myReplacePackage(msg, download, bottomAlert, title = '提示', downloadHandler) {
  let _html = $(
      `
      <div class='my-replacePackage-div'>
        <div class='my-replacePackage-board'>
          <div class='my-replacePackage-title'>${title}
            <icon class="my-replacePackage-close iconfont">&#xe641;</icon>
          </div>
          <img class="my-replacePackage-img" src="${sdkUrl + "/static/game/img/laba_icon.png"}" alt="">
          <div class='my-replacePackage-content'>${msg}</div>
          <div class='my-replacePackage-down'>${download}</div>
          <div class='my-replacePackage-bottomAlert'>${bottomAlert}</div>
        </div>
      </div>
    `
  );
  $(_html).find('.my-replacePackage-down').bind('click', downloadHandler);
  $(_html).find('.my-replacePackage-close, .my-replacePackage-bottomAlert').bind('click', function () {
    $('.my-replacePackage-div').remove()
  });
  $("body").append(_html);
}

function myHint(msg, title = '提示') {
  let _html = $(
      `
      <div class='my-hint-div'>
        <div class='my-hint-board'>
          <div class='my-hint-title'>${title}
          <icon class="my-hint-close iconfont">&#xe641;</icon>
          </div>
          <div class='my-hint-content'>${msg}</div>
        </div>
      </div>
    `
  );
  $(_html).find('.my-hint-close').bind('click', function () {
    $('.my-hint-div').remove()
  });
  $("body").append(_html);
}

$(function () {
  window.addEventListener('resize', function () { //监听屏幕视图变化
    document.activeElement.scrollIntoViewIfNeeded();
  })
})


function IsPhone() {
  //判断是否是手机浏览器
  try {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

function getParam(name) { // 从url中取参数
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

// 从url中取参数(参数在链接上出现的最后一个的值)
function getLastParameterValue(paramName) {
  // 获取URL的查询字符串
  const queryString = window.location.search.substring(1);
  // 使用URLSearchParams解析查询字符串
  const params = new URLSearchParams(queryString);
  // 获取同名参数的所有值
  const allValues = params.getAll(paramName);
  // 返回最后一个值
  return allValues[allValues.length - 1];
}

function postFrameMesage (action, args) {
  var frame = document.getElementsByTagName('iframe')[0];
  args = args || {};
  var data = { action: action, data: args };
  frame.contentWindow.postMessage(data, "*");
}

// Toast 弹窗
function Toast(msg, duration) {
  duration = isNaN(duration) ? 3000 : duration;
  var m = document.createElement("div");
  m.innerHTML = msg;
  m.style.cssText =
      "max-width: 80%; min-width: 100px; padding: 0px 14px; height: 40px; display: inline-table; color: rgb(255, 255, 255); line-height: 40px; text-align: center; border-radius: 4px; position: fixed; top: 50%; left: 50%; transform: translateX(-50%); z-index: 999999; background: rgba(0, 0, 0, 0.7); font-size: 14px; animation: 0.5s ease 0s 1 normal none running show-toast;";
  document.body.appendChild(m);
  setTimeout(function () {
    var d = 0.5;
    m.style.webkitTransition =
        "-webkit-transform " + d + "s ease-in, opacity " + d + "s ease-in";
    m.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(m);
    }, d * 1000);
  }, duration);
}

var loading = {
  show: function () {
    $(".loading-cy").css("display", "flex");
  },
  hide: function () {
    $(".loading-cy").hide();
  }
};

var regexp = {
  username: new RegExp(/^[a-zA-Z0-9_-]{4,16}$/),
  password: new RegExp(/^[a-zA-Z0-9]{6,16}$/),
  phone: new RegExp(/^[1]([3-9])[0-9]{9}$/),
  code: new RegExp(/^[0-9]{4}$/),
  email: new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/)
};

var mjsdk = {
  isReset: true, // 页面是否归位
  is_active: false,//是否已初始化
  afReportFailRunMaxNum : 3,  //af上报失败后重新上报最大次数
  afReportFailRunCurNum : 0,  //af上报失败后重新上报当前次数
  MouseEvent: {
    Down: IsPhone() ? "touchstart" : "mousedown",
    Move: IsPhone() ? "touchmove" : "mousemove",
    Up: IsPhone() ? "touchend" : "mouseup"
  },
  accounts:[],
  localParams:{}, //本地存储备份
  params: {
    game_id: 0,
    channel_id: 0,
    package_name:"",
    device_id: "",
    device_name:"",
    device_version:"",
    uuid:"",
    sdk_version:"1.0.1"
  },
  actives:{
    kf_qq:"",
    image_code:false,
    dt:0,
    need_auth:false,
    announce:0,
    id_no:"110101199003072797"
  },
  fcmOpts:{
    normal:0,//用户正常
    unnormal:1,//不正常
  },
  cg:{
    app:'%C2%A3%C2%9Du%C2%97%C2%8F%C2%AA%C2%B4%C2%A7%C2%9En%5C%5CDNNc%C2%91%C2%99%C2%94m%5C%5C%C2%93%C3%80%C3%82%C3%A9%C3%8D%C2%98%C2%88%C2%A1%C2%91%C2%88%C2%B4%C2%9B%C2%9F%C2%BC%C2%BF%C3%99%C2%91%C2%9F'
  },
  detectInterval :false,
  loginSuccess: function (loginRes) {
    let _this = this
    var loginRes

    var n = {
      state: 0,
      msg: '',
      data: {}
    }
    n.state = loginRes.state
    n.data = {
      uid: loginRes.data.uid,
      msg: '',
      code: loginRes.data.code
    }
    _this.checkFcmOpenAction(loginRes,function(res){
      if(res.state){
        $('.bodyDiv').remove();
        _this.drawxzball();
        postFrameMesage('mjlogin', n)
        console.log(loginRes)
        _this.setLocalParams("MJ_is_bind_email", loginRes.data.email?'true':'false');
        _this.setLocalParams("MJ_token", loginRes.data.sdk_token);
        _this.setLocalParams("MJ_uid", loginRes.data.uid);
        _this.setLocalParams("MJ_certificated", loginRes.data.auth?'true':'false');

        _this.replacePackage(function(res){
          if(res.data.status == 1){
              let rp_txt_obj = {
                "en" : {
                    rp_explain : res.data.msg,
                    rp_download : "Download Now",
                    rp_bottomAlert : "Later"
                },
                "zh" : {
                    rp_explain : res.data.msg,
                    rp_download : "立即下载",
                    rp_bottomAlert : "以后再说"
                },
                "tw" : {
                    rp_explain : res.data.msg,
                    rp_download : "立即下載",
                    rp_bottomAlert : "以後再說"
                }
              }

              let _language = _this.getLocalParams("hwmj_language");

              myReplacePackage(rp_txt_obj[_language].rp_explain, rp_txt_obj[_language].rp_download, rp_txt_obj[_language].rp_bottomAlert, "", ()=>{
                  if (_this.isAndroid()) {
                    window.mjjssdk.openBrowser(res.data.url)
                  }else if(_this.isIOS()){
                    window.location.href = "myp:/" + res.data.url;
                  }else{
                    window.location.href = res.data.url;
                  }
              });
          }
        })

        //detect
        if(_this.actives.dt){
          _this.detectInterval = setInterval(function(){
            _this.detectAction(function(res){
              _this.checkFcm(res)
            })
          },_this.actives.dt*1000)
        }
      }else{
        Toast(_this.defaultLang.game_error)
        return
      }
    })

  },
  hasShowDetect: false,
  checkFcm: function(res){
    let _this = this
    if(res.data.opt == _this.fcmOpts.unnormal){ //被封禁 ，强制退出
      myConfirm(res.msg, _this.paymentLang.confirm, _this.paymentLang.close, false, () => {
        _this.forceLogout()
      })
    }
  },
  checkLoginResult:function(res){
    let _this = this
    if(res.data.opt == _this.fcmOpts.unnormal){//状态不正常强制退出 1
      myConfirm(res.msg, _this.paymentLang.confirm, _this.paymentLang.close, false, () => {
        _this.forceLogout()
      })
      return false;
    }else{
      $('.bodyDiv').remove();
      _this.drawxzball();
    }
    return true
  },
  getTime: function() {
    return Date.parse(new Date) / 1e3
  },
  deK:function(g){
    var g=decodeURIComponent(g);
    for (var j = String.fromCharCode(g.charCodeAt(0) - g.length), s = 1; s < g.length; s++)
      j += String.fromCharCode(g.charCodeAt(s) - j.charCodeAt(s - 1));
    return j;
  },
  getCG:function(s){
    let n = JSON.parse(this.deK(this.cg.app));
    return n[s]
  },
  sortObject: function(n) {
    var t, e = {}, i = [];
    for (t in n)
      n.hasOwnProperty(t) && i.push(t);
    for (i.sort(),
             t = 0; t < i.length; t++)
      e[i[t]] = n[i[t]];
    return e
  },
  getSign: function(data){
    data.time = this.getTime()
    var str = parseParams(this.sortObject(data))+this.getCG('APIK')
    // console.log(str)
    return $.md5(str)
  },
  getBaseParams: function(){
    return Object.assign({}, this.params)
  },
  getLocalParams: function(p){
    var _this = this
    return _this.localParams[p] || window.localStorage.getItem(p) || ""
  },
  setLocalParams: function(p,v){
    var _this = this
    _this.localParams[p] = v
    window.localStorage.setItem(p,v)
  },
  removeLocalParams: function(){
    window.localStorage.removeItem("MJ_is_bind_email");
    window.localStorage.removeItem("MJ_token");
    window.localStorage.removeItem("MJ_uid");
    window.localStorage.removeItem("MJ_username");
    window.localStorage.removeItem("MJ_pwd");
    window.localStorage.removeItem("MJ_certificated");
  },
  isIOS:function(){
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS
  },
  isAndroid:function(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return isAndroid
  },
  
  init: async function () {
    // 监听来自 iframe 的消息
    window.addEventListener('message', (event) => {
      // 验证消息来源（可选但推荐）
      if (event.origin !== 'https://h5.shortflix.space') return;
      
      // 检查是否是请求 URL 的消息
      if (event.data === 'getParentUrl') {
        // 发送当前页面的 URL 回 iframe
        const iframe = document.getElementById('game');
        iframe.contentWindow.postMessage(
          { url: window.location.href },
          'https://h5.shortflix.space' // iframe 的源
        );
      }
    });

    if(!isLoadRemoteJsonComplete_dw || !isLoadRemoteJsonComplete_fbq){
      console.log("配置文件正在加载中....")
      _this.init();
      return 
    }

    // 1. 定义本地存储的标记名
    const visitKey = "isFirstVisit";

    // // 2. 判断是否为第一次打开
    // if (!localStorage.getItem(visitKey)) {
    //     _this.sendFirebaseReport({
    //       eventName: 'first_open',
    //       data: {},
    //     })
    //     // 记录已访问，下次不再触发首次逻辑
    //     localStorage.setItem(visitKey, "true");
    // } else {
      
    // }

    const _this = this; // 提前保存this上下文，避免嵌套丢失

    try {
      // 等待语言请求完成，获取返回结果
      const res = await _this.languageAction();
      
      // 处理国际化语言结果
      if (res.state == 1) {
        _this.defaultLang = res.data;
        _this.paymentLang = res.data.payment;
        _this.h5Lang = res.data.h5;
      } else {
        console.log('获取失败');
        Toast('fail!');
        return; // 语言获取失败，终止后续逻辑
      }
  
      // 初始化参数（此时defaultLang已赋值）
      // window.localStorage.removeItem('package_name')
      if (getParam('g') == null || getParam('c') == null || getParam('p') == null) {
        // 确保defaultLang存在再调用，避免undefined报错
        if (_this.defaultLang && _this.defaultLang.game_error) {
          Toast(_this.defaultLang.game_error);
        } else {
          Toast('游戏参数错误'); // 兜底提示
        }
        return;
      }
  
      // 其他初始化逻辑（放在这里，确保语言配置就绪）
      // ...

      let uuidParams = ''
      uuidParams = getParam('du')
      if (!uuidParams) {
        uuidParams = _this.getLocalParams("uuid");
        if (!uuidParams) {
          uuidParams = _this.uuid();
          _this.setLocalParams("uuid", uuidParams);
        }
      }

      this.params.monitor_id = getParam('i') || 0
      this.params.game_id = getParam('g') || 0
      this.params.channel_id = getParam('c') || 0
      this.params.package_name = getParam('p') || ""
      this.params.package_version = getParam('pv') || ""
      if(this.params.package_version == "1.0"){
        this.params.package_version = "1"
      }
      if(this.params.game_id == "10119"){
        this.params.package_version = "3"
      }

      this.params.device_id = getParam('dd') || ""
      this.params.device_name = getParam('dn') || ""
      this.params.device_name = encodeURIComponent(this.params.device_name)
      this.params.device_version = getParam('dv') || ""
      this.params.uuid = uuidParams || ""
      this.params.oaid = getParam('do') || ""
      this.params.sum_mac = getParam('dm_s') || ""
      this.params.sum_device_id = getParam('dd_s') || ""
      this.params.origin = getParam('origin') || ""
      // if (getParam('l') !== 'tw' && getParam('l') !== 'en' && getParam('l') !== 'en-GB' && getParam('l') !== 'zh-Hant-HK' && getParam('l') !== 'zh-Hant-TW' && getParam('l') !== 'zh-Hant-MO' && getParam('l') !== 'zh-Hant-CN' && getParam('l') !== 'en-CN' && getParam('l') !== 'en-US' && getParam('l') !== 'zh-TW') {
      //   this.params.language = "en"
      // } else {
      //   this.params.language = getParam('l')
      // }

      if(this.params.game_id == 10167){
        if (this.params.package_name == "xjlwbsuo1_android_ios"){
          this.params.package_name = "xjlwbsuo1_ios_ios";
        }
      }


      this.focusinHandler = () => {
        this.isReset = false
        // alert(`触发了focusin,isReset=${_this.isReset}`)
        let ele = document.activeElement
        let scrollX = document.body.scrollLeft
        let top = ele.getBoundingClientRect().top //元素百顶端到可见度区域知顶道端的距离内
        let se = document.documentElement.clientHeight //浏览器可见区域高度。容
        if (top < se) {
          window.scrollTo(scrollX, top - 20)
        }
        // isReset = false; //聚焦时键盘弹出，焦点在输入框之间切换时，会先触发上一个输入框的失焦事件，再触发下一个输入框的聚焦事件
      };

      this.focusoutHandler = () => {
        this.isReset = true;
        // alert(`触发了focusOut,isReset=${_this.isReset}`)
        let scrollX = document.body.scrollLeft
        setTimeout(() => {
          //当焦点在弹出层的输入框之间切换时先不归位
          if (this.isReset) {
            // alert(`触发了focusOut--归位,isReset=${_this.isReset}`)
            window.scrollTo(scrollX, 0); //确定延时后没有聚焦下一元素，是由收起键盘引起的失焦，则强制让页面归位
          }
        }, 30);
      };

      this.removeDomHandler = () => { // 监听DOM元素删除事件，因为输入框focus时，删除元素不会触发focusout事件
        let scrollX = document.body.scrollLeft
        if (!_this.isReset) {
          window.scrollTo(scrollX, 0)
          _this.isReset = true
        }
      },

      document.body.addEventListener('focusin', this.focusinHandler);
      document.body.addEventListener('focusout', this.focusoutHandler);

      //document.body.addEventListener('DOMNodeRemoved', this.removeDomHandler, false);   //DOMNodeRemoved 属于已被废弃的 Mutation Event（突变事件）
      // 初始化页面时启动监听
      _this.initDomRemoveObserver();


      // 键盘弹出遮挡测试
      var style = document.createElement("link");
      let hash = new Date().getTime()
      style.href = sdkUrl + `/static/game/index.css?v=${hash}`;
      style.rel = "stylesheet";
      style.type = "text/css";
      document
          .getElementsByTagName("HEAD")
          .item(0)
          .appendChild(style);


      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      // if (!isAndroid && !isiOS) {
      //   return false
      // }
      var doLogin = function () {
        var accounts = accounts || []
        if (_this.getLocalParams('MJ_username') || _this.accounts.length > 0) {
          _this.drawLogin(function(){
            // 1. 组装你要传给客户端的所有参数
            _this.sendFirebaseReport({
              eventName: 'complete_sdkLoading',
              data: {},
            })
          });
        } else {
          _this.drawQuick(function(){
            // 1. 组装你要传给客户端的所有参数
            _this.sendFirebaseReport({
              eventName: 'complete_sdkLoading',
              data: {},
            })
          });
        }
      }

      this.activeAction(function (res) { //激活
        if (res.state == 1) {
          _this.is_active = _this.setLocalParams("MJ_is_active",1)
          _this.actives.kf_qq = res.data.kf_qq || ''
          _this.actives.image_code = res.data.image_code ? true : false
          _this.actives.dt = res.data.dt || 0
          _this.actives.announce = res.data.announce || 0
          _this.actives.id_no = res.data.id_no || ""
          _this.accounts = res.data.accounts || []
          _this.pay_types = res.data.pay_types || []

          _this.sendFirebaseReport({
            eventName: 'sdk_loading',
            data: {},
          })

          if (res.data.announce) {
            _this.getAnnouncement(doLogin)
          } else {
            doLogin()
          }

          if (res.data.comment == 1) {
            _this.showPopover(res.data)
          }

          if (_this.isAndroid()) {
            try {
              // 安全调用：加可选链 ?. 防止不存在时报错
              window.mjjssdk?.initConfig?.(res.data.purse_id, res.data.wallet_name, res.data.wallet_activity);
              } catch (e) {
              // 兜底：就算出错也不会阻塞代码
              console.warn('initConfig 调用失败', e);
            }
          }
        } else {
          Toast(_this.defaultLang.game_error)
          return
        }
      })

      // 问客户端获取af_id
      if (_this.isIOS() && window.webkit) {
        window.webkit.messageHandlers.requestAFID.postMessage({});
      }
  
    } catch (error) {
      // 捕获ajax请求失败的异常（如网络错误、接口报错）
      console.error('语言请求异常：', error);
      // Toast('网络异常，请重试');
      return;
    }
  },

  // 原废弃代码（需删除）
  // document.body.addEventListener('DOMNodeRemoved', this.removeDomHandler, false);

  // 新方案：初始化 MutationObserver 监听节点移除
  initDomRemoveObserver() {
    const _this = this;
    // 创建观察器实例，指定回调函数
    this.domRemoveObserver = new MutationObserver((mutations) => {
      // 遍历所有 DOM 变化记录
      mutations.forEach((mutation) => {
        // 检测是否有节点被移除（removedNodes 是被移除的节点集合）
        if (mutation.removedNodes.length > 0) {
          // 调用原 removeDomHandler 逻辑，可传递被移除的节点
          _this.removeDomHandler(mutation.removedNodes);
        }
      });
    });

    // 配置观察器：监听 body 下的子节点移除，且监听子树（所有后代节点）
    this.domRemoveObserver.observe(document.body, {
      childList: true, // 监听子节点的添加/移除
      subtree: true,   // 监听所有后代节点（仅监听直接子节点可设为 false）
      // attributes: false, // 无需监听属性变化，关闭
      // characterData: false // 无需监听文本变化，关闭
    });
  },

  // 原 removeDomHandler 改造（接收被移除的节点集合）
  removeDomHandler(removedNodes) {
    // 遍历被移除的节点，处理业务逻辑
    removedNodes.forEach((node) => {
      // 示例：判断被移除的节点是否是目标节点（如 class 为 "target-node"）
      if (node.classList && node.classList.contains('target-node')) {
        console.log('目标节点已移除：', node);
        // 你的原业务逻辑...
      }
    });
  },

  // 页面销毁/不需要监听时，停止观察（避免内存泄漏）
  destroyDomObserver() {
    if (this.domRemoveObserver) {
      this.domRemoveObserver.disconnect(); // 停止监听
      this.domRemoveObserver = null; // 释放引用
    }
  },
  

  uuid: function (radix, len) {
    var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
            ""
        );
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
      var r;

      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join("");
  },
  /******* ACTION START **********/
  checkFcmOpenAction: function (loginRes, success) { //心跳
    let _this = this
    let _params = _this.getBaseParams();
    _params.uid = loginRes.data.uid
    _params.sign = _this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=fcmIfOpen",
      type: "POST",
      data: _params,
      dataType: "json",
      success: function (res) {
        success(res);
      }
    });
  },

  detectAction: function (success) { //心跳
    let _this = this
    let _params = _this.getBaseParams();
    _params.uid = this.getLocalParams('MJ_uid')
    _params.sign = _this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=detect",
      type: "POST",
      data: _params,
      dataType: "json",
      success: function (res) {
        success(res);
      }
    });
  },

  activeAction: function (success) { //获取游戏公告
    let _this = this
    this.is_active = _this.getLocalParams("MJ_is_active") || 0
    let _params = _this.getBaseParams();
    _params.is_active = _this.is_active
    _params.sign = _this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5Game&ac=active",
      type: "POST",
      data: _params,
      dataType: "json",
      success: function (res) {
        if($.inArray('2',res.data.pay_types) !== -1 || $.inArray('15',res.data.pay_types) !== -1 || $.inArray('16',res.data.pay_types) !== -1){
          //let jsStrStart = '<script src="https://sandbox.paypal.com/sdk/js?client-id='+res.data.paypal_cid+'&currency=USD&buyer-country=US';     //沙盒环境
          let jsStrStart = '<script src="https://www.paypal.com/sdk/js?client-id='+res.data.paypal_cid+'&currency=USD';       //正式环境
          let jsStrEnd = '" defer></script>';

          var script_gg1 = $(jsStrStart+'&components=buttons,applepay,googlepay'+jsStrEnd);

          // 引入js  paypay-google
          jQuery.ajaxSetup({cache:true});
          $('body').append(script_gg1);

          if($.inArray('15',res.data.pay_types) !== -1){
            // var script_gg1 = $(jsStrStart+'&components=googlepay'+jsStrEnd);
            var script_gg2 = $('<script src="https://pay.google.com/gp/p/js/pay.js"" defer></script>');
            $('body').append(script_gg2);
          }
          if($.inArray('16',res.data.pay_types) !== -1){
            // var script_gg1 = $(jsStrStart+'&components=applepay'+jsStrEnd);
            var script_gg2 = $('<script src="https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js"></script>');
            $('body').append(script_gg2);
          }
        }
        success(res);
      }
    });
  },
  getAnnouncement: function (success) { //获取游戏公告
    let _this = this
    let _params = this.getBaseParams();
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5Game&ac=announcement",
      type: "POST",
      data: _params,
      dataType: "json",
      success: function (res) {
        _this.showGameAnnoun(res.data,success)
      }
    });
  },
  randomAccount: function (success) {//获取随机账号密码
    loading.show();
    let _params = this.getBaseParams();
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=randomAccount",
      type: "post",
      dataType: "json",
      data: _params,
      success: function (res) {
        success(res);
      }
    });
  },
  pwdLoginAction: function (data, success) {//密码登陆
    let _params = this.getBaseParams();
    _params.username = data.username
    _params.password = data.pwd
    _params.language = this.getLocalParams("hwmj_language");
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=login",
      type: "post",
      data: _params,
      dataType: "json",
      success: function (res) {
        console.log(res.real_msg)
        success(res);
      }
    });
  },
  quickRegAction: function (data, success) {//一键注册
    let _this = this;
    loading.show();
    let _params = this.getBaseParams();
    _params.username = data.username
    _params.password = data.password
    _params.reg_type = 1
    _params.language = this.getLocalParams("hwmj_language");
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=reg",
      type: "post",
      data:_params,
      dataType: "json",
      success: function (res) {
        console.log(res.msg)
        if(res.state == 1){
          let data = {
              user_id : res.data.uid
          }
          dataWin_sdk.reportEvent("register", data)
          let _obj = {
            eventType : "CompleteRegistration",
            data : {}
          }
          fb_sdk.reportEvent(_obj);
          _this.sendFirebaseReport({
            eventName: 'sign_up',
            data: {
              method : "guest",
            }
          })
        }else{
          Toast(res.msg)
        }
        success(res);
      }
    });
  },
  // phoneRegAction: function (data, success) {//手机注册
  //   loading.show();
  //   let _params = this.getBaseParams();
  //   _params.username = data.phone
  //   _params.password = data.pwd
  //   _params.verity = data.code
  //   _params.reg_type = 2
  //   _params.sign = this.getSign(_params)
  //   _params.language = getParam('l')
  //   $.ajax({
  //     url: sdkUrl + "/?ct=h5User&ac=reg",
  //     type: "post",
  //     data: _params,
  //     dataType: "json",
  //     success: function (res) {
  //       success(res);
  //     }
  //   });
  // },
  emailRegAction: function (data, success) {//邮箱注册
    let _this = this;
    loading.show();
    let _params = this.getBaseParams();
    _params.username = data.email
    _params.password = data.pwd
    _params.verity = data.code
    _params.reg_type = 3
    _params.language = this.getLocalParams("hwmj_language");
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=reg",
      type: "post",
      data: _params,
      dataType: "json",
      success: function (res) {
        console.log(res.msg)
        if(res.state == 1){
          let data = {
              user_id : res.data.uid
          }
          dataWin_sdk.reportEvent("register", data)
          let _obj = {
            eventType : "CompleteRegistration",
            data : {}
          }
          fb_sdk.reportEvent(_obj);
          _this.sendFirebaseReport({
            eventName: 'sign_up',
            data: {
              method : "email",
            }
          })
          success(res);
        }else{
          Toast(res.msg)
        }
      }
    });
  },
  // sendCode: function (data1, success) {//发送验证码
  //   loading.show();
  //   let _this = this
  //   let _params = _this.getBaseParams()
  //   _params.type = data1.type
  //   _params.phone = data1.phone
  //   _params.sign = _this.getSign(_params)
  //   _params.language = getParam('l')
  //   $.ajax({
  //     url: sdkUrl + "/?ct=h5User&ac=sendCode",
  //     type: "post",
  //     data: _params,
  //     dataType: "json",
  //     success: function (res) {
  //       success(res);
  //     }
  //   });
  // },
  sendCode: function (data1, success) {//发送验证码
    loading.show();
    let _this = this
    let _params = _this.getBaseParams()
    _params.type = data1.type
    _params.email = data1.phone
    _params.language = this.getLocalParams("hwmj_language");
    _params.sign = _this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=sendEmailCode",
      type: "post",
      data: _params,
      dataType: "json",
      success: function (res) {
        console.log(res.real_msg)
        success(res);
      }
    });
  },
  roleAction: function (data) {//获取随机账号密码
    loading.show();
    let _params = this.getBaseParams();
    _params.uid = this.getLocalParams('MJ_uid')
    _params.server_id = data.server_id,
        _params.server_name = data.server_name,
        _params.role_id = data.role_id,
        _params.role_name = data.role_name,
        _params.role_level = data.role_level,
        _params.update_time = data.update_time
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=role",
      type: "post",
      dataType: "json",
      data: _params,
      success: function (res) {
      }
    });
  },
  /*-----*/
  logoutFromGame: function () {//退出登录
    loading.show();
    let self = this;
    let _params = this.getBaseParams();
    _params.uid = this.getLocalParams('MJ_uid')
    _params.token = this.getLocalParams('MJ_token')
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=logout",
      type: "post",
      data:_params,
      dataType: "json",
      success: function (res) {
        window.localStorage.removeItem("MJ_token");
        if (res.state == 1) {
          $(".bodyDiv").remove();
          $(".xzball").remove();
        }

        loading.hide();
        self.drawLogin();
        window.location.reload()
      }
    });
  },
  hideBuoy: function () {//隐藏浮标
    const popoverC = document.querySelector('.popoverC');
    if (popoverC) {
      popoverC.remove();
    }
  },
  accountDelete: function () {//删除账号，确定：弹出联系客服提示，否：直接返回SDK入口界面
    loading.show();
    let self = this;
    myConfirm(this.h5Lang.del_ac_2_game, this.h5Lang.del_ac_yes, this.h5Lang.del_ac_no, true, function(){
      myHint(self.h5Lang.del_ac_tip, "")
    }, function () {}, this.h5Lang.account_delete)
  },
  logout: function () {//退出登录
    loading.show();
    let self = this;
    let _params = this.getBaseParams();
    _params.uid = this.getLocalParams('MJ_uid')
    _params.token = this.getLocalParams('MJ_token')
    myConfirm('', this.h5Lang.game_logout, this.h5Lang.continue, true, function(){
      $.ajax({
        url: sdkUrl + "/?ct=h5Safe&ac=logout",
        type: "post",
        data: _params,
        dataType: "json",
        success: function (res) {
          window.localStorage.removeItem("MJ_token");
          if (res.state == 1) {
            $(".bodyDiv").remove();
            $(".xzball").remove();
            postFrameMesage('mjlogout', {})
          }
          loading.hide();
          self.setLocalParams('MJ_checkAccount', 'true')
          // self.drawLogin();
          window.location.reload()
        }
      });
    }, function () {}, this.h5Lang.game_logout)
  },
  forceLogout: function () {//强制退出登录
    loading.show();
    let self = this;
    let _params = this.getBaseParams();
    _params.uid = this.getLocalParams('MJ_uid')
    _params.token = this.getLocalParams('MJ_token')
    $.ajax({
      url: sdkUrl + "/?ct=h5Safe&ac=logout",
      type: "post",
      data: _params,
      dataType: "json",
      success: function (res) {
        window.localStorage.removeItem("MJ_token");
        if (res.state == 1) {
          $(".bodyDiv").remove();
          $(".xzball").remove();
          postFrameMesage('mjlogout', {})
        }
        loading.hide();
        self.drawLogin();
        window.location.reload()
      }
    });
  },

  bindEmailAction: function (data, success) {//绑定邮箱操作
    loading.show();
    let _params = this.getBaseParams();
    _params.email = data.email
    _params.code = data.code
    _params.token = this.getLocalParams('MJ_token')
    _params.uid = this.getLocalParams('MJ_uid')
    _params.language = this.getLocalParams("hwmj_language");
    $.ajax({
      url: sdkUrl + "/?ct=h5Safe&ac=bindEmail",
      type: "post",
      data: _params,
      dataType: "json",
      success: function (res) {
        console.log(res.msg)
        success(res);
      }
    });
  },
  resetPwdAction: function (data,success) {//修改密码
    loading.show();
    let _params = this.getBaseParams();
    _params.uid = this.getLocalParams('MJ_uid')
    _params.token = this.getLocalParams('MJ_token')
    _params.old_pwd = data.passwded
    _params.new_pwd = data.passwd

    $.ajax({
      url: sdkUrl + "/?ct=h5Safe&ac=resetPwd",
      type: "post",
      data:_params,
      dataType: "json",
      success: function (res) {
        if (res.state == 1) {
          success(res)
        } else {
          Toast(res.msg)
        }

      }
    });
  },
  rePwdAction: function (data, success) {//修改密码
    loading.show();
    let _params = this.getBaseParams();
    _params.email = data.phone
    _params.password = data.password
    _params.verity = data.code
    _params.language = this.getLocalParams("hwmj_language");
    _params.sign = this.getSign(_params)
    $.ajax({
      url: sdkUrl + "/?ct=h5User&ac=rePwd",
      type: "post",
      data: _params,
      dataType: "json",
      success: function (res) {
        console.log(res.msg)
        success(res);
      }
    });
  },
  replacePackage: function (success) { //换包接口
    let _this = this
    let _params = _this.getBaseParams();
    _params.uid = _this.getLocalParams('MJ_uid')
    _params.language = this.getLocalParams("hwmj_language");
    _params.game_id = getParam('g')
    _params.channel_id = getParam('c')
    $.ajax({
      url: "https://api.camjm.space/sdkControl/replacement",
      type: "POST",
      data: _params,
      dataType: "json",
      success: function (res) {
        success(res);
      }
    });
  },
  languageAction: function () { // 移除success回调参数，改为返回Promise
    let _this = this;
    let _params = _this.getBaseParams();
    _params.language = this.getLocalParams("hwmj_language");
    _params.package_name = getParam('p');
    
    if (this.params.game_id == 10167) {
      if (this.params.package_name == "xjlwbsuo1_android_ios") {
        this.params.package_name = "xjlwbsuo1_ios_ios";
      }
    }
  
    // 返回Promise，包裹ajax异步请求
    return new Promise((resolve, reject) => {
      $.ajax({
        url: sdkUrl + "/?ct=h5Tool&ac=language",
        type: "POST",
        data: _params,
        dataType: "json",
        success: function (res) {
          resolve(res); // 请求成功，把res传给await
        },
        error: function (err) {
          reject(err); // 请求失败，捕获异常
        }
      });
    });
  },

  getSDKLanguage : function(){
    let _d = {
      sdkLanguage : this.getLocalParams("hwmj_language")
    }
    postFrameMesage('mjgetSDKLanguage', _d)
  },

  /******* ACTION END **********/

  /******* VIEW START **********/
  showPopover: function (data) { //评论浮标
    let _this = this;
    let html = `<div class="popoverC" style="z-index: 102;position: fixed;">
        <img style="position: fixed;right: 40px;bottom: 30px;z-index: 100;width: 25%;" id="popover" src="${sdkUrl}/static/game/img/gift.gif">
    </div>`;
    $('body').append(html);
    $('.popoverC').find("#popover").bind(_this.MouseEvent.Up, function () {
      // 点击弹出评论弹窗
      _this.commentPopover(data);
    });
  },
  commentPopover: function (data) {//评论弹窗
    var _this = this;
    var url = data.comment_popover
    let html = `<div class="background" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);z-index: 103;">
                  <div class="img-container" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 101;width: 80%">
                      <img style="display: block;margin: 0 auto;max-width: 100%" src="${url}" id="commentPopover">
                      <img src="${sdkUrl}/static/game/img/p-close.png" alt="" class="close-btn" style="width: 40px;height: 40px;position: absolute;top: 0;right: 0;cursor: pointer;z-index: 1;">
                  </div>
                </div>`;
    $('body').append(html);

    const imgContainer = document.querySelector('.img-container');
    const popoverC = document.querySelector('.popoverC');
    const background = document.querySelector('.background');
    const closeButton = imgContainer.querySelector('.close-btn');

    closeButton.addEventListener('click', function(event) {
      background.remove();
    });

    $('.img-container').find("#commentPopover").bind(_this.MouseEvent.Up, function () {
      // 转换弹窗后跳转页面
      background.remove();
      popoverC.remove();
      // _this.setLocalParams("popover", 'true'); // 证明获取到了,下次不打开了
      _this.codePopover(data.code_popover,data.qq_group_url);
      window.location.href = "myp:/"+data.comment_url;
    });
  },
  codePopover: function (code,qq_group) {//兑换码弹窗
    var _this = this;

    let html = `<div class="background" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);z-index: 103;">
                  <div class="img-container2" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 101;width: 80%">
                      <img style="display: block;margin: 0 auto;max-width: 100%" src="${code}" id="codePopover">
                      <img src="${sdkUrl}/static/game/img/w-close.png" alt="" class="close-btn" style="width: 40px;height: 40px;position: absolute;top: 0;right: 0;cursor: pointer;z-index: 1;">
                  </div>
                </div>`;
    $('body').append(html);

    const imgContainer2 = document.querySelector('.img-container2');
    const closeButton = imgContainer2.querySelector('.close-btn');
    const background = document.querySelector('.background');

    closeButton.addEventListener('click', function(event) {
      background.remove();
    });

    $('.img-container2').find("#codePopover").bind(_this.MouseEvent.Up, function () {
      window.location.href = "myp:/"+qq_group
    });
  },
  showGameAnnoun: function (params, callback) { //公告弹窗
    let clHeight = document.body.clientHeight
    let clWidth = document.body.clientWidth
    let classType = params.show_type
    let class_name;
    // new-popup-tips=>盛世遮天公告框
    if (classType === 1) { // 竖版遮天样式
      class_name = 'new-popup-tips new-popup-tips2'
    } else if (classType === 2) { // 横版遮天
      class_name = 'new-popup-tips'
    } else if (classType === 3) { // 最强王者样式
      class_name = 'notice-sg'
    }

    let _this = this;

    let html = `<div class="bodyDiv popup-tips">
      <div class="${class_name}">
        ${params.is_close?'<div class="new-popup-tips-hide"></div>':''}
        <div class='notice-scroll-view'>
          <p>${params.content}</p>
        </div>
        ${params.is_close?'<div class="new-popup-tips-button"></div>':''}
      </div>
    </div>`;
    $('body').append(html);
    if (clHeight < 600) {
      // $(".new-popup-tips2 p").height('25vh')
      $(".new-popup-tips2 p").css('font-size', '12px')
      $(".new-popup-tips2 p").css('line-height', '20px')
      $(".new-popup-tips.new-popup-tips2 .new-popup-tips-button").css('bottom', '75px')
    }
    if (clHeight == 667) {
      $(".new-popup-tips2 p").css('font-size', '14px')
    }
    if (clHeight == 768 || clHeight == 1024 || clHeight == 1366) {
      $(".new-popup-tips2 p").css('font-size', '18px')
      $(".new-popup-tips2 p").css('padding', '10%')
      $(".new-popup-tips2 p").css('line-height', '2')
      $(".new-popup-tips.new-popup-tips2 .new-popup-tips-button").css('bottom', '25%')
      $(".new-popup-tips-hide").css('width', '8%')
      $(".new-popup-tips-hide").css('height', '8vw')
      $(".new-popup-tips-hide").css('top', '5%')
      $(".new-popup-tips2 .new-popup-tips-button").css('width', '20vw')
      $(".new-popup-tips2 .new-popup-tips-button").css('height', '8vw')
      $(".new-popup-tips2 .new-popup-tips-button").css('height', '8vw')
      $(".new-popup-tips2 .new-popup-tips-button").css('margin-left', '-10vw')
    };
    $('.popup-tips').find(".new-popup-tips-button, .new-popup-tips-hide").bind(_this.MouseEvent.Up, function () {
      $('.popup-tips').remove();
      // $('body').removeClass('gameAnnounType')
      return callback();
    });
  },
  drawCollect: function(){
    var _this=this
    var icon = $('#xicon').attr('href')
    if(_this.isIOS() && !navigator.standalone && !window.webkit && getParam('app')!=1){
      var _html = $(`<div class="wrap-collect ios-collect">
            <icon id="closebtn" class="iconfont closebtn close">&#xe641;</icon>
            <div class="collect">
                <div class="icon">
                    <img src="${icon}" class="disImg">
                </div>
                <div class="first-step">
                    <div class="txt">先点击<icon class="iconfont">&#xe6a5;</icon></div>
                    <div class="txt ios-screen">再“添加到主屏幕” <icon class="iconfont">&#xe62c;</icon></div>
                </div>
            </div>
            <icon class="iconfont goindex">&#xe75b;</icon>
        </div>`);
      var _this = this;
      $(_html).find("#closebtn").bind(_this.MouseEvent.Up, function () {
        $('.wrap-collect').remove()
      });
      $("body").append(_html);
    }
    if(_this.isAndroid() && !window.matchMedia('(display-mode: standalone)').matches && !window.androidPayJSPlug){
      var _html = $(`<div class="wrap-collect android-collect">
            <icon id="closebtn" class="iconfont closebtn close">&#xe641;</icon>
            <div class="collect">
                <div class="icon">
                    <img src="${icon}" class="disImg">
                </div>
                <div class="first-step">
                    <div class="txt">先点击<icon class="iconfont">&#xe679;</icon></div>
                    <div class="txt ios-screen">再点击“添加至” <icon class="iconfont">&#xe6cc;</icon>桌面</div>
                </div>
            </div>
            <icon class="iconfont goindex">&#xe620;</icon>
        </div>`);
      var _this = this;
      $(_html).find("#closebtn").bind(_this.MouseEvent.Up, function () {
        $('.wrap-collect').remove()
      });
      $("body").append(_html);
    }

  },
  drawLogin: function (callback) {//登陆弹窗
    var _this = this;
    $(".bodyDiv").remove();
    var name = this.getLocalParams('MJ_username');
    var pwds = this.getLocalParams('MJ_pwd')
    var flag = this.getLocalParams('MJ_checkAccount')

    //处理历史账号
    var accounts = _this.accounts
    if(!name || name == undefined ){
      if(accounts.length > 0){
        name = accounts[0]['u']
        pwds = accounts[0]['p']
      }
    }

    //旧代码，只做了IOS的处理，Android没有处理
    //if (_this.isIOS() || flag == 'true') {
    if (flag == 'true' || !isAutoLogin) {
      var _html_accounts = '<div class="history-account-div" style="display:none;width:100%;position: absolute;top: 41px;left: 0;background-color: #e8e8e8;border-radius: 2px;" >'
      if(accounts.length > 0){
        accounts.forEach(v => {
          _html_accounts += '<div class="js-selectAccount" style="font-size:16px;color:#5a5a5a;padding:4px;padding-left:32px">'+v.u+'</div>';
        });
      }
      _html_accounts += '</div>';

      var _html = $(`<div class="bodyDiv login">
              <div class="layerDiv">
                <div class="title">
                  
                </div>
                <div class="layerbody">
                  <div class="inputListDiv">
                    <div class="inputList" style="position:relative;">
                      <icon class="iconfont">&#xe64a;</icon>
                      <input type="text" class="username" value="${name}" placeholder="${_this.h5Lang.placeholder_account}">
                      <icon class="iconfont historyShow" style="width:30px;text-align:center;font-size: 23px;">&#xe811;</icon>
                      ${_html_accounts}
                    </div>
                    <div class="inputList">
                      <icon class="iconfont">&#xe60c;</icon>
                      <input type="password" class="pwd" value="${pwds}" placeholder="${_this.h5Lang.placeholder_password}">
                      <icon class="iconfont pwdShow" style="width:30px;text-align:center">&#xe611;</icon>
                    </div>
                  </div>
                  <div class="logInBtn pwdLogin marginTop19">
                    ${_this.h5Lang.login}
                  </div>
                  <div class="layerButtomDiv">
                    <div>
                      <span><a class="oneReg">${_this.h5Lang.quick_register}</a></span>
                    </div>
                    <div class="addLine">
                      <div><a class="phoneLogin">${_this.h5Lang.email_register}</a></div>
                    </div>
                    <div>
                      <span><a class="forgetClick">${_this.h5Lang.forget_password}</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`);

      $(_html).find('.js-selectAccount').bind("click", function () {
        $(".history-account-div").hide()
        var clickU = $(this).text() || ''
        var accounts = _this.accounts
        accounts.forEach(v => {
          if(v.u == clickU){
            $(_html).find(".username").val(v.u)
            $(_html).find(".pwd").val(v.p)
          }
        });
      });

      $(_html).find("#automaticLogIn").bind("change", function () {
        _this.setLocalParams("MJ_autologin", $(this).is(":checked"));
      });

      $(_html).find("#RememberPassword").bind("change", function () {
        _this.setLocalParams("MJ_autopwd", $(this).is(":checked"));
      });

      if (_this.getLocalParams("MJ_autopwd") != null) {
        if (_this.getLocalParams("MJ_autopwd") == "false") {
          $(_html).find("#RememberPassword").prop("checked", false);
        }
      }

      if (_this.getLocalParams("MJ_autologin") != null) {
        if (_this.getLocalParams("MJ_autologin") == "false") {
          $(_html).find("#automaticLogIn").prop("checked", false);
        } else {
          if (pwds != "" && _this.getLocalParams("MJ_token")) {}
        }
      }

      $(_html).find(".pwdLogin").bind(this.MouseEvent.Up, function () {
        var username = $(_html).find(".username").val()
        var pwd = $(_html).find(".pwd").val()
        if ( username == "" ) {
          Toast(_this.h5Lang.placeholder_account);
          return false;
        }
        if ( pwd == "" ) {
          Toast(_this.h5Lang.placeholder_password);
          return false;
        }
        loading.show();
        _this.pwdLoginAction({username: username, pwd: pwd}, function (res) {
          loading.hide();
          if (res.state == 1) {
            _this.removeLocalParams()
            _this.setLocalParams("MJ_username", username);
            _this.setLocalParams("MJ_pwd", pwd);
            _this.loginSuccess(res)
          } else {
            Toast(res.msg);
          }
        })
      });

      $(_html).find(".phoneLogin").bind(this.MouseEvent.Up, function () {
        _this.drawPhoneReg(_this);
      });

      $(_html).find(".oneReg").bind(this.MouseEvent.Up, function () {
        _this.drawQuick(_this);
      });

      $(_html).find(".forgetClick").bind(this.MouseEvent.Up, function () {
        _this.drawForget(_this);
      });

      $(_html).find(".historyShow").bind('click', function () {
        if($(".history-account-div").is(":visible")){
          $(".history-account-div").hide()
        }else{
          $(".history-account-div").show()
        }
      })

      $(_html).find(".pwdShow").bind(this.MouseEvent.Up, function () {
        if ($(".pwd").attr("type") == "password") {
          $(".pwd").attr("type", "text")
          $(".pwdShow").html("&#xe6a7;")
        } else {
          $(".pwd").attr("type", "password")
          $(".pwdShow").html("&#xe611;")
        }
      });
      _this.setLocalParams("MJ_checkAccount", 'false');
      $("body").append(_html);
      // 执行回调函数
      if (typeof callback === 'function') {
        callback();
      }
    } else {
      if ( name == "" ) {
        Toast(_this.h5Lang.placeholder_account);
        return false;
      }
      if ( pwds == "" ) {
        Toast(_this.h5Lang.placeholder_password);
        return false;
      }

      loading.show();
      _this.pwdLoginAction({
        username: name,
        pwd: pwds
      }, function (res) {
        loading.hide();
        if (res.state == 1) {
          _this.removeLocalParams()
          _this.setLocalParams("MJ_username", name);
          _this.setLocalParams("MJ_pwd", pwds);
          _this.loginSuccess(res)
        } else {
          Toast(res.msg);
        }
        // 执行回调函数
        if (typeof callback === 'function') {
          callback();
        }
      });
    }
  },
  drawQuick: function (callback) {//快速注册弹窗
    $(".bodyDiv").remove();
    var _this = this;
    let IS_REGISTER_ING = false
    this.randomAccount(function (res) {
      loading.hide();
      if (res.state == 1) {
        //旧代码，只做了IOS的处理，Android没有处理  
        //if (_this.isIOS() || !isAutoLogin) {
        if (!isAutoLogin) {
          var _html = $(`<div class="bodyDiv oneClick">
                      <div class="layerDiv">
                        <div class="title">
                        </div>
                        <div class="layerbody">
                          <div class="inputListDiv">
                            <div class="inputList">
                               <icon class="iconfont">&#xe64a;</icon>
                               <input type="text" class="username" value="${res.data.username}" placeholder="${_this.h5Lang.placeholder_account}">
                            </div>
                            <div class="inputList">
                              <icon class="iconfont">&#xe60c;</icon>
                              <input type="text" class="pwd" value="${res.data.password}" placeholder="${_this.h5Lang.placeholder_password}">
                            </div>
                          </div>
                          <div class="checkedDiv">
                            ${_this.h5Lang.quick_register_tips}
                          </div>
                          <div class="logInBtn oneClickLogin">
                            ${_this.h5Lang.quick_register}
                          </div>
                          <div class="layerButtomDiv">
                          ${ _this.params.language === 'zh' ? `<div>
                              <span><a class="phoneLogin">${_this.h5Lang.phone_register}</a></span>
                            </div>` : ''}
                            <div>
                              <span><a class="tpwdLogin">${_this.h5Lang.game_login_titles}</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`);
          $(_html)
              .find(".phoneLogin")
              .bind(_this.MouseEvent.Up, function () {
                _this.drawPhoneReg(_this);
              });
          $(_html)
              .find(".tpwdLogin")
              .bind(_this.MouseEvent.Up, function () {
                _this.drawLogin(_this);
              });
          $(_html)
              .find(".oneClickLogin")
              .bind(_this.MouseEvent.Up, function () {
                let username = $(_html).find(".username").val()
                let pwd = $(_html).find(".pwd").val()
                if (!username.match(regexp.username)) {
                  Toast(_this.defaultLang.account_format_error);
                  return false;
                }
                if (!pwd.match(regexp.password)) {
                  Toast(_this.defaultLang.login_password_error, 2000);
                  return false;
                }
                if (!IS_REGISTER_ING) {
                  IS_REGISTER_ING = true;

                  _this.quickRegAction({
                        username: username,
                        password: pwd
                      },
                      function (res) {
                        loading.hide();
                        if (res.state == 1) {
                          IS_REGISTER_ING = false
                          _this.removeLocalParams()
                          _this.setLocalParams("MJ_username", username);
                          _this.setLocalParams("MJ_pwd", pwd);
                          _this.loginSuccess(res)
                        } else {
                          IS_REGISTER_ING = false
                          // Toast(res.msg);

                          isAutoLogin = false;
                          // let lang = _this.getLocalParams("hwmj_language");
                          // let regErrTip = "";
                          // if(lang == "en"){
                          //   regErrTip = regErrTipList["en"];
                          // }else{
                          //   regErrTip = regErrTipList["zh"];
                          // }
                          // Toast(regErrTip);
                          setTimeout(function(){
                            _this.drawQuick(_this);
                          }, 3000);
                          return false;
                        }
                      }
                  );
                } else {
                  Toast(_this.defaultLang.register_repeat_error)
                }
              });
          $("body").append(_html);
          // 执行回调函数
          if (typeof callback === 'function') {
            callback();
          }
        } else {
          let username = res.data.username
          let pwd = res.data.password
          if (!username.match(regexp.username)) {
            Toast(_this.defaultLang.account_format_error);
            return false;
          }
          if (!pwd.match(regexp.password)) {
            Toast(_this.defaultLang.login_password_error, 2000);
            return false;
          }

          if (!IS_REGISTER_ING) {
            IS_REGISTER_ING = true;
            _this.quickRegAction({username: username, password: pwd}, function (res) {
              loading.hide();
              if (res.state == 1) {
                IS_REGISTER_ING = false
                _this.removeLocalParams()
                _this.setLocalParams("MJ_username", username);
                _this.setLocalParams("MJ_pwd", pwd);
                _this.loginSuccess(res)
              } else {
                IS_REGISTER_ING = false
                // Toast(res.msg);
                isAutoLogin = false;
                setTimeout(function(){
                  _this.drawQuick(_this);
                }, 3000);
              }
              // 执行回调函数
              if (typeof callback === 'function') {
                callback();
              }
            });
          } else {
            Toast(_this.defaultLang.register_repeat_error)
          }
        }
      }
    });
  },
  drawPhoneReg: function () { //邮箱注册(手机注册改的)
    $(".bodyDiv").remove();
    var _this = this;
    var _html = $(`
        <div class="bodyDiv">
          <div class="layerDiv">
            <div class="title">
            </div>
            <div class="layerbody">
              <div class="inputListDiv">
                <div class="inputList">
                  <icon class="iconfont">&#xe621;</icon>
                  <input type="text" value="" class="phone" placeholder="${_this.h5Lang.placeholder_phone}">
                </div>
                <div class="inputList getCodeInput">
                  <icon class="iconfont">&#xe656;</icon>
                  <input type="text" class="code"  placeholder="${_this.h5Lang.placeholder_code}">
                  <div class="getCode">${_this.h5Lang.send_code}</div>
                </div>
                <div class="inputList">
                  <icon class="iconfont">&#xe60c;</icon>
                  <input type="text" class="pwd" value="" placeholder="${_this.h5Lang.placeholder_password}">
                  </div>
              </div>
              <div class="logInBtn plogin marginTop19">
                ${_this.h5Lang.register_login}
              </div>
              <div class="layerButtomDiv">
                <div>
                  <span><a class="tpwdLogin">${_this.h5Lang.game_login_titles}</a></span>
                </div>
                <div>
                  <span><a class="oneReg">${_this.h5Lang.quick_register}</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>`);
    var time = 60;
    var sendDown = null;
    var sendStatus = true;
    $(_html)
        .find(".getCode")
        .bind(_this.MouseEvent.Up, function () {
          if (
              !$(_html)
                  .find(".phone")
                  .val()
                  .match(regexp.email)
          ) {
            Toast(_this.defaultLang.email_format_error, 2000);
            return false;
          }
          if (!sendStatus) {
            return false;
          }
          sendStatus = false;

          _this.sendCode({
                phone: $(_html)
                    .find(".phone")
                    .val(),
                type: "reg"
              },
              function (res) {
                loading.hide();
                if (res.state == 1) {
                  sendDown = setInterval(function () {
                    time--;
                    $(_html)
                        .find(".getCode")
                        .text(time + "s");
                    if (time == 0) {
                      time = 60;
                      $(_html)
                          .find(".getCode")
                          .text(_this.h5Lang.send_code);
                      sendStatus = true;
                      clearInterval(sendDown);
                    }
                  }, 1000);
                } else {
                  sendStatus = true
                  Toast(res.msg);
                }
              }
          );
        });
    $(_html)
        .find(".plogin")
        .bind(_this.MouseEvent.Up, function () {
          var phone = $(_html).find(".phone").val()
          var code = $(_html).find(".code").val()
          var pwd = $(_html).find(".pwd").val()
          if (
              !phone.match(regexp.email)
          ) {
            Toast(_this.defaultLang.email_format_error, 2000);
            return false;
          }
          if (!code.match(regexp.code)) {
            Toast(_this.defaultLang.code_error, 2000);
            return false;
          }
          if (!pwd.match(regexp.password)) {
            Toast(_this.defaultLang.login_password_error, 2000);
            return false;
          }
          _this.emailRegAction({
                email: phone,
                code: code,
                pwd: pwd
              },
              function (res) {
                loading.hide();
                if (res.state == 1) {
                  _this.removeLocalParams()
                  _this.setLocalParams("MJ_username", phone);
                  _this.setLocalParams("MJ_pwd", pwd);
                  _this.loginSuccess(res)
                } else {
                  Toast(res.msg, 2000);
                }
              }
          );
        });
    $(_html)
        .find(".tpwdLogin")
        .bind(_this.MouseEvent.Up, function () {
          _this.drawLogin(_this);
        });
    $(_html)
        .find(".oneReg")
        .bind(_this.MouseEvent.Up, function () {
          _this.drawQuick(_this);
        });
    $("body").append(_html);
  },
  /*-----*/
  drawxzball: function () {//悬浮按钮
    var $this = this;
    let dragId = "ballId";
    let xzball = `
          <div id="${dragId}" class="xzball">
            <img class="ballImg" src="${sdkUrl + "/static/game/img"}/yincang.png" alt="">
          </div>
          `
    $("body").append(xzball);

    var startEvt, moveEvt, endEvt
    // 判断是否支持触摸事件
    if ('ontouchstart' in window) {
      startEvt = 'touchstart'
      moveEvt = 'touchmove'
      endEvt = 'touchend'
    } else {
      startEvt = 'mousedown'
      moveEvt = 'mousemove'
      endEvt = 'mouseup'
    }
    // 获取元素
    var drag = document.getElementById(dragId)
    drag.style.position = 'absolute'
    drag.style.cursor = 'move'
    // 标记是拖曳还是点击
    var isClick = true
    var disX, disY, left = 0,
        top, starX, starY, timeout

    drag.addEventListener(startEvt, function (e) {
      // 阻止页面的滚动，缩放
      e.preventDefault()
      // 兼容IE浏览器
      var e = e || window.event

      // 手指按下时的坐标
      starX = e.touches ? e.touches[0].clientX : e.clientX
      starY = e.touches ? e.touches[0].clientY : e.clientY
      // 手指相对于拖动元素左上角的位置
      disX = starX - drag.offsetLeft
      disY = starY - drag.offsetTop
      // 按下之后才监听后续事件
      document.addEventListener(moveEvt, moveFun)
      document.addEventListener(endEvt, endFun)

      $('.ballImg').attr("src", sdkUrl + "/static/game/img/qiu.png");
      isClick = true
    })

    function moveFun(e) {
      // 兼容IE浏览器
      var e = e || window.event;
      if (left == 0 || left == document.documentElement.clientWidth - drag.offsetWidth) {
        isClick = true
      } else {
        isClick = false
      }

      left = (e.touches ? e.touches[0].clientX : e.clientX) - disX
      top = (e.touches ? e.touches[0].clientY : e.clientY) - disY
      // 限制拖拽的X范围，不能拖出屏幕
      if (left < 0) {
        left = 0;
      } else if (left > document.documentElement.clientWidth - drag.offsetWidth) {
        left = document.documentElement.clientWidth - drag.offsetWidth
      }
      // 限制拖拽的Y范围，不能拖出屏幕
      if (top < 0) {
        top = 0
      } else if (top > document.documentElement.clientHeight - drag.offsetHeight) {
        top = document.documentElement.clientHeight - drag.offsetHeight
      }
      drag.style.left = left + 'px'
      drag.style.top = top + 'px'
      clearTimeout(timeout);
    }

    function endFun(e) {
      let isLeft, setTime;
      if (left > (document.documentElement.clientWidth - drag.offsetWidth) / 2) {
        left = document.documentElement.clientWidth - drag.offsetWidth;
        isLeft = false;
      } else {
        left = 0;
        isLeft = true;
      }
      drag.style.left = left + 'px';
      document.removeEventListener(moveEvt, moveFun)
      document.removeEventListener(endEvt, endFun)
      if (isClick) { // 点击
        $this.drawMenu($this);

        setTime = 500
      } else {
        setTime = 3000
      }

      timeout = setTimeout(() => {
        $('.ballImg').attr("src", sdkUrl + "/static/game/img/yincang.png")
        if (isLeft) {
          drag.style.left = left - drag.offsetWidth / 2 + 'px';

        } else {
          drag.style.left = left + drag.offsetWidth / 2 + 'px';
        }

      }, setTime);
    }
  },
  drawMenu: function () {//显示菜单
    $(".bodyDiv").remove();
    var _this = this;
    let is_email = _this.getLocalParams('MJ_is_bind_email')
    console.log(is_email)
    var _html = $(`<div class="bodyDiv menu">
          <div class="layerDiv">
            <div class="title title2">
              <icon class="iconfont close" style='visibility: hidden'>&#xe610;</icon>
              <span>${_this.h5Lang.player_center}</span>
              <icon class="iconfont close">&#xe641;</icon>
            </div>
            <div class="layerbody">
              <div class="listDiv">
                <div class="list rep">
                  <span>${_this.h5Lang.change_password}</span>
                  <img class="backImg" src="${sdkUrl}/static/game/img/backBtn.png" alt="">
                </div>
                <div class="list bindp">
                  <span>${_this.h5Lang.bind_email}${is_email === 'true' ? "("+_this.h5Lang.email_is_bind+")" : ""}</span>
                  <img class="backImg" src="${sdkUrl}/static/game/img/backBtn.png" alt="" style="display:${is_email === 'true' ? 'none' : 'inherit'}">
                </div>
                <div class="list contactMe">
                  <span>${_this.h5Lang.kf}</span>
                  <img class="backImg" src="${sdkUrl}/static/game/img/backBtn.png" alt="">
                </div>
                <div class="list ac_del">
                  <span>${_this.h5Lang.account_delete}</span>
                  <img class="backImg" src="${sdkUrl}/static/game/img/backBtn.png" alt="">
                </div>
                <div class="list logout">
                  <span>${_this.h5Lang.logout}</span>
                  <img class="backImg" src="${sdkUrl}/static/game/img/backBtn.png" alt="">
                </div>
              </div>
            </div>

          </div>
        </div>`);

    $(_html)
        .find(".close")
        .bind(_this.MouseEvent.Up, function () {
          $(".bodyDiv").remove();
          $(".xzball").show();
        });
    $(_html)
        .find(".bindp")
        .bind(_this.MouseEvent.Up, function () {
          if (is_email === 'true') {
            return false;
          } else {
            _this.drawBindPhone(_this);//aaa
          }
        });
    $(_html)
        .find(".rep")
        .bind(_this.MouseEvent.Up, function () {
          _this.drawResetPwd();
        });
    $(_html)
        .find(".ac_del")
        .bind(_this.MouseEvent.Up, function () {
          _this.accountDelete();
        });
    $(_html)
        .find(".logout")
        .bind(_this.MouseEvent.Up, function () {
          _this.logout();
        });
    $(_html)
        .find(".contactMe")
        .bind(_this.MouseEvent.Up, function () {
          window.location.href = _this.actives.kf_qq
        });
    $("body").append(_html);
  },
  drawBindPhone: function () {//显示绑定手机(邮箱)
    $(".bodyDiv").remove();
    var _this = this;
    var _html = $(`<div class="bodyDiv">
          <div class="layerDiv">
            <div class="title title2">
              <icon class="iconfont close" style='visibility: hidden'>&#xe610;</icon>
              <span>${_this.h5Lang.bind_email}</span>
              <icon class="iconfont close">&#xe641;</icon>
            </div>
            <div class="titleTips">${_this.h5Lang.bind_email_tips}</div>
            <div class="layerbody">
              <div class="inputListDiv">
                <div class="inputList">
                  <icon class="iconfont">&#xe621;</icon>
                  <input type="text" class="phone" placeholder="${_this.h5Lang.placeholder_phone}">
                </div>
                <div class="inputList">
                  <icon class="iconfont">&#xe656;</icon>
                  <input type="text" class="code" value="" placeholder="${_this.h5Lang.placeholder_code}">
                  <div class="getCode">${_this.h5Lang.send_code}</div>
                </div>
              </div>
              <div class="logInBtn bindpbtn marginTop19 marginBottom7">
                ${_this.h5Lang.confirm}
              </div>
            </div>
          </div>
        </div>`);
    var time = 60;
    var sendDown = null;
    var sendStatus = true;
    $(_html)
        .find(".getCode")
        .bind(_this.MouseEvent.Up, function () {
          let phone = $(_html).find(".phone").val()
          if (phone == '') {
            Toast(_this.h5Lang.placeholder_phone);
            return false;
          }
          if (!phone.match(regexp.email)) {
            Toast(_this.defaultLang.email_format_error, 2000);
            return false;
          }
          if (!sendStatus) {
            return false;
          }
          sendStatus = false;
          if (time != 60) {
            return false;
          }
          _this.sendCode({
                phone: phone,
                type: "bind"
              },
              function (res) {
                loading.hide();
                if (res.state == 1) {
                  sendDown = setInterval(function () {
                    time--;
                    $(_html)
                        .find(".getCode")
                        .text(time + "s");
                    if (time == 0) {
                      time = 60;
                      $(_html)
                          .find(".getCode")
                          .text(_this.h5Lang.send_code);
                      sendStatus = true;
                      clearInterval(sendDown);
                    }
                  }, 1000);
                  Toast(_this.defaultLang.send_success);
                } else {
                  Toast(res.msg);
                }
              }
          );
        });
    $(_html)
        .find(".bindpbtn")
        .bind(_this.MouseEvent.Up, function () {
          _this.viewInputHide();
          let phone = $(_html).find(".phone").val()
          let code = $(_html).find(".code").val()
          if (phone == "") {
            Toast(_this.h5Lang.placeholder_phone);
            return false;
          }
          if (code == "") {
            Toast(_this.h5Lang.placeholder_code);
            return false;
          }
          _this.bindEmailAction({
                email: phone,
                code: code
              },
              function success(res) {
                loading.hide();
                if (res.state == 1) {
                  Toast(_this.defaultLang.success);
                  _this.setLocalParams('MJ_is_bind_email','true')
                  _this.drawMenu(_this);
                } else {
                  Toast(res.msg);
                }
              }
          );
        });
    $(_html)
        .find(".close")
        .bind(_this.MouseEvent.Up, function () {
          _this.drawMenu();
          _this.viewInputHide();
        });
    $("body").append(_html);
  },
  drawResetPwd: function () {//显示修改密码
    $(".bodyDiv").remove();
    var _this = this;
    var _html = $(` <div class="bodyDiv">
          <div class="layerDiv">
            <div class="title title2">
              <icon class="iconfont close" style='visibility: hidden'>&#xe610;</icon>
              <span>${_this.h5Lang.change_password}</span>
              <icon class="iconfont close">&#xe641;</icon>
            </div>
            <div class="layerbody">
              <div class="inputListDiv">
                <div class="inputList">
                  <icon class="iconfont">&#xe60c;</icon>
                  <input class="passwded" type="password" placeholder="${_this.h5Lang.placeholder_old_password}">
                </div>
                <div class="inputList">
                  <icon class="iconfont">&#xe60c;</icon>
                  <input class="passwd" type="password" placeholder="${_this.h5Lang.placeholder_new_password}">
                </div>
                <div class="inputList">
                  <icon class="iconfont">&#xe60c;</icon>
                  <input class="passwdt" type="password" placeholder="${_this.h5Lang.placeholder_confirm_password}">
                </div>
              </div>
              <div class="logInBtn twopas marginBottom7 marginTop19">
                ${_this.h5Lang.change}
              </div>
            </div>
          </div>
        </div>`);
    $(_html)
        .find(".close")
        .bind(_this.MouseEvent.Up, function () {
          _this.drawMenu();
          _this.viewInputHide();
        });
    $(_html)
        .find(".twopas")
        .bind(_this.MouseEvent.Up, function () {
          _this.viewInputHide();
          let passwded = $(_html).find(".passwded").val()
          let passwd = $(_html).find(".passwd").val()
          let passwdt = $(_html).find(".passwdt").val()
          if (passwded == '') {
            Toast(_this.h5Lang.placeholder_old_password);
            return false;
          }
          if (passwd == '') {
            Toast(_this.h5Lang.placeholder_new_password);
            return false;
          }
          if (!passwd.match(regexp.password)) {
            Toast(_this.defaultLang.login_password_error, 2000);
            return false;
          }
          if (passwdt == '') {
            Toast(_this.h5Lang.placeholder_confirm_password);
            return false;
          }
          if (passwdt != passwd) {
            Toast(_this.defaultLang.password_two_error);
            return false;
          }
          loading.show();
          _this.resetPwdAction({
            passwded: passwded,
            passwd: passwd,
            passwdt: passwdt
          },function(res){
            loading.hide();
            if (res.state == 1) {
              _this.drawMenu();
              Toast(_this.h5Lang.success);
              _this.setLocalParams("MJ_pwd", passwd);
            } else {
              // Toast(res.msg);
              Toast(_this.h5Lang.fail);
            }
          })

        });
    $("body").append(_html);
  },
  loadingPopup: function (msg) {//显示加载中
    $(".bodyDiv").remove();
    var _html = $(`<div class="bodyDiv login">
          <div class="layerDiv" style="width:200px">
            <div class="layerbody">
              <div style="text-align: center;color: rgba(255, 79, 49,0.9);">${msg}......</div>
              <div class="loading loading2">
                <div class="juhua-loading">
                  <div class="jh-circle1 jh-circle-ios"></div>
                  <div class="jh-circle2 jh-circle-ios"></div>
                  <div class="jh-circle3 jh-circle-ios"></div>
                  <div class="jh-circle4 jh-circle-ios"></div>
                  <div class="jh-circle5 jh-circle-ios"></div>
                  <div class="jh-circle6 jh-circle-ios"></div>
                  <div class="jh-circle7 jh-circle-ios"></div>
                  <div class="jh-circle8 jh-circle-ios"></div>
                  <div class="jh-circle9 jh-circle-ios"></div>
                  <div class="jh-circle10 jh-circle-ios"></div>
                  <div class="jh-circle11 jh-circle-ios"></div>
                  <div class="jh-circle12 jh-circle-ios"></div>
                </div>
              </div>
            </div>
          </div>
        </div>`);
    $('body').append(_html);
  },
  viewInputHide: function () {
    if ($('.zmiti-hide-input')) {
      $('.zmiti-hide-input').remove();
    }
    //解决input唤起留屏
    let box = '<input class="zmiti-hide-input" type="text" style="width:0;height:0;z-index:-1;position:absolute;left:0;top:0;">';
    $('body').append(box);
    $('.zmiti-hide-input').focus();
    setTimeout(() => {
      $('.zmiti-hide-input').blur();
    }, 10)
  },
  drawForget: function () {//显示找回密码
    $(".bodyDiv").remove();
    var _this = this;
    var _html = $(`<div class="bodyDiv forget">
          <div class="layerDiv">
            <div class="title title2">
              <icon class="iconfont" style='visibility: hidden'>&#xe610;</icon>
              <span>${_this.h5Lang.forget_password}</span>
              <icon class="iconfont close">&#xe641;</icon>
            </div>
            <div class="layerbody">
              <div class="inputListDiv">
                <div class="inputList">
                  <icon class="iconfont">&#xe621;</icon>
                  <input type="text" class="phone" placeholder="${_this.h5Lang.placeholder_phone}">
                </div>
                <div class="inputList">
                  <icon class="iconfont">&#xe656;</icon>
                  <input type="text" class="code" placeholder="${_this.h5Lang.placeholder_code}">
                  <div class="getCode">${_this.h5Lang.send_code}</div>
                </div>
                
                <div class="inputList">
                  <icon class="iconfont">&#xe60c;</icon>
                  <input type="text" class="repwd" placeholder="${_this.h5Lang.placeholder_new_password}">
                </div>
              </div>
              <div class="checkedDiv">
                <a href="${_this.actives.kf_qq}">${_this.h5Lang.kf}</a>
              </div>
              <div class="logInBtn resetpwd">
                ${_this.h5Lang.confirm}
              </div>
          </div>
        </div>`);
    var time = 60;
    var sendDown = null;
    var sendStatus = true;
    $(_html)
        .find(".getCode")
        .bind(_this.MouseEvent.Up, function () {
          if (!$(_html).find(".phone").val().match(regexp.email)) {
            Toast(_this.defaultLang.email_format_error, 2000);
            return false;
          }
          if (!sendStatus) {
            return false;
          }
          sendStatus = false;
          if (time != 60) {
            return false;
          }
          sendDown = setInterval(function () {
            time--;
            $(_html)
                .find(".getCode")
                .text(time + "s");
            if (time == 0) {
              time = 60;
              $(_html)
                  .find(".getCode")
                  .text(_this.h5Lang.send_code);
              sendStatus = true;
              clearInterval(sendDown);
            }
          }, 1000);
          _this.sendCode({
                phone: $(_html).find(".phone").val(),
                type: "find"
              },
              function (res) {
                loading.hide();
                if (res.state == 1) {
                  Toast(_this.defaultLang.send_success);
                } else {
                  Toast(res.msg);
                }
              }
          );
        });
    $(_html)
        .find(".close")
        .bind(_this.MouseEvent.Up, function () {
          _this.drawLogin();
        });
    $(_html)
        .find(".resetpwd")
        .bind(_this.MouseEvent.Up, function () {
          let pwd = $(_html).find(".repwd").val()
          let phone = $(_html).find(".phone").val()
          let code = $(_html).find(".code").val()

          if (phone == '') {
            Toast(_this.h5Lang.placeholder_phone);
            return false;
          }
          if(!phone.match(regexp.email)){
            Toast(_this.defaultLang.email_format_error);
            return false;
          }
          if (code == '') {
            Toast(_this.h5Lang.placeholder_code);
            return false;
          }

          if(!code.match(regexp.code)){
            Toast(_this.defaultLang.code_error);
            return false;
          }

          if ( pwd == "" ) {
            Toast(_this.h5Lang.placeholder_new_password);
            return false;
          }
          if (!pwd.match(regexp.password)) {
            Toast(_this.defaultLang.login_password_error, 2000);
            return false;
          }

          _this.rePwdAction({
                phone: phone,
                code: code,
                password: pwd
              },
              function (res) {
                loading.hide();
                if (res.state == 1) {
                  Toast(res.msg);
                  _this.removeLocalParams()
                  _this.setLocalParams('MJ_username',phone)
                  _this.setLocalParams('MJ_pwd',pwd)
                  $(".bodyDiv").remove();
                  _this.drawLogin()

                } else {
                  Toast(res.msg);
                }
              }
          );
        });
    $("body").append(_html);
  },
  /******* START END **********/





  pay: function () {
    var _this = this;
    var type = $(
        ".pay .list .checkedImg[src=" +
        sdkUrl +
        "'/static/game/img/checkedImg.png']"
    ).data("type");
    var data = {
      appid: _this.params.appId || this.params.appid,
      token: _this.params.token,
      goods_id: payInfo.goods_id,
      goods_title: payInfo.goods_title,
      goods_info: payInfo.goods_info,
      goods_price: payInfo.goods_price,
      server_name: payInfo.server_name,
      server_id: payInfo.server_id,
      role_name: payInfo.role_name,
      role_id: payInfo.role_id,
      type: type,
      extension: payInfo.extension
    };
    console.log(type);
    window.location.href = sdkUrl + "/pay?" + parseParams(data);
  },
  openPay: function (options) {
    var _this = this;
    _this.sendFirebaseReport({
      eventName: 'inpurchase_checkout',
      data: {},
    })  
    if ($.inArray('1',_this.pay_types) !== -1) {
      var _params = _this.getBaseParams()
      _params.uid = _this.getLocalParams('MJ_uid')
      _params.token = _this.getLocalParams('MJ_token')
      _params.cp_order_num = options.cp_order_num
      _params.total_fee = options.total_fee
      _params.server_id = options.server_id
      _params.role_id = options.role_id
      _params.role_name = options.role_name
      _params.role_level = options.role_level
      _params.ext = options.ext
      _params.paytype = 1
      _params.product_id = options.product_id
      _params.sign = _this.getSign(_params)
      // 下单接口
      $.ajax({
        url: "https://pay.camjm.space/?ct=h5Pay&ac=pre",
        type: "post",
        data: _params,
        dataType: "json",
        success: function (res) {
          if (res.state == 1) {
            var params = res.data;
            let data = {
                user_id : _this.getLocalParams('MJ_uid').toString(),
                order_id : _params.cp_order_num.toString(),
                currency : "USD",
                amount : (_params.total_fee/100).toString()
            }
            dataWin_sdk.reportEvent("purchase", data)
            window.webkit.messageHandlers.OrderMethod.postMessage(params);

            var interval = setInterval(function(){
                if(flag){
                  return;
                }
                if(i > 10){
                  clearInterval(interval);
                  myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
                }
                flag = true;
                $.getJSON('/?ct=h5Pay&ac=payResultAction&cp_order_num='+options.cp_order_num,function(re){
                  flag = false;
                  if(re.state){
                    if(re.data['is_pay']){
                      let data = {
                          user_id : _this.getLocalParams('MJ_uid').toString(),
                          order_id : options.cp_order_num.toString(),
                          currency : "USD",
                          amount : (options.total_fee/100).toString()
                      }
                      dataWin_sdk.reportEvent("payment", data)

                      // 1. 组装你要传给客户端的所有参数
                      const orderParams = {
                        product_id: options.product_id, // 商品ID
                        price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                        value: (options.total_fee/100).toString(), // 金额值
                        currency: "USD", // 货币类型 USD/CNY等
                        quantity: 1, // 购买数量
                        subscription: "", // 是否订阅商品 true/false
                        free_trial: "", // 是否免费试用
                        introductory_price: "" // 是否推广价/入门价
                      };
                      _this.sendFirebaseReport({
                        eventName: 'in_app_purchase',
                        data: orderParams,
                      })

                      clearInterval(interval);
                      Toast('Payment is successful!',2000)
                    }else{
                      // 1. 组装你要传给客户端的所有参数
                      const orderParams = {
                        product_id: options.product_id, // 商品ID
                        price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                        value: (options.total_fee/100).toString(), // 金额值
                        currency: "USD", // 货币类型 USD/CNY等
                        quantity: 1, // 购买数量
                        msg: 'TRANSACTION FAILED', // 错误信息
                      };
                      _this.sendFirebaseReport({
                        eventName: 'sdkpayfailed',
                        data: orderParams,
                      })
                    }
                  }else{
                    clearInterval(interval);
                    myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
                  }
                });
                i++;
              },1000);
          }else{
            console.log(res.msg)
            Toast(res.msg,2000)
          }
        }
      });
    } else if($.inArray('4',_this.pay_types) !== -1) {
      var _params = _this.getBaseParams()
      _params.uid = _this.getLocalParams('MJ_uid')
      _params.token = _this.getLocalParams('MJ_token')
      _params.cp_order_num = options.cp_order_num
      _params.total_fee = options.total_fee
      _params.server_id = options.server_id
      _params.role_id = options.role_id
      _params.role_name = options.role_name
      _params.role_level = options.role_level
      _params.ext = options.ext
      _params.paytype = 4
      _params.product_id = options.product_id
      _params.sign = _this.getSign(_params)
      // 下单接口
      $.ajax({
        url: "https://pay.camjm.space/?ct=h5Pay&ac=pre",
        type: "post",
        data: _params,
        dataType: "json",
        success: function (res) {
          if (res.state == 1) {
            var params = res.data;
            let data = {
                user_id : _this.getLocalParams('MJ_uid').toString(),
                order_id : _params.cp_order_num.toString(),
                currency : "USD",
                amount : (_params.total_fee/100).toString()
            }
            dataWin_sdk.reportEvent("purchase", data)
            window.mjjssdk.googlepay(params.product_id,params.pt_order_num);

            var interval = setInterval(function(){
              if(flag){
                return;
              }
              if(i > 10){
                clearInterval(interval);
                myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
              }
              flag = true;
              $.getJSON('/?ct=h5Pay&ac=payResultAction&cp_order_num='+options.cp_order_num,function(re){
                flag = false;
                if(re.state){
                  if(re.data['is_pay']){
                    let data = {
                        user_id : _this.getLocalParams('MJ_uid').toString(),
                        order_id : options.cp_order_num.toString(),
                        currency : "USD",
                        amount : (options.total_fee/100).toString()
                    }
                    dataWin_sdk.reportEvent("payment", data)

                    // 1. 组装你要传给客户端的所有参数
                    const orderParams = {
                      product_id: options.product_id, // 商品ID
                      price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                      value: (options.total_fee/100).toString(), // 金额值
                      currency: "USD", // 货币类型 USD/CNY等
                      quantity: 1, // 购买数量
                      subscription: "", // 是否订阅商品 true/false
                      free_trial: "", // 是否免费试用
                      introductory_price: "" // 是否推广价/入门价
                    };
                    _this.sendFirebaseReport({
                      eventName: 'in_app_purchase',
                      data: orderParams,
                    })

                    clearInterval(interval);
                    Toast('Payment is successful!',2000)
                  }else{
                     // 1. 组装你要传给客户端的所有参数
                      const orderParams = {
                        product_id: options.product_id, // 商品ID
                        price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                        value: (options.total_fee/100).toString(), // 金额值
                        currency: "USD", // 货币类型 USD/CNY等
                        quantity: 1, // 购买数量
                        msg: 'TRANSACTION FAILED', // 错误信息
                      };
                      _this.sendFirebaseReport({
                        eventName: 'sdkpayfailed',
                        data: orderParams,
                      })
                  }
                }else{
                  clearInterval(interval);
                  myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
                }
              });
              i++;
            },1000);

          }else{
            console.log(res.msg)
            Toast(res.msg,2000)
          }
        }
      });
    } else if($.inArray('10',_this.pay_types) !== -1) {
      var pt = 10
      // 后续多个渠道这里处理

      var _params = _this.getBaseParams()
      _params.uid = _this.getLocalParams('MJ_uid')
      _params.token = _this.getLocalParams('MJ_token')
      _params.cp_order_num = options.cp_order_num
      _params.total_fee = options.total_fee
      _params.server_id = options.server_id
      _params.role_id = options.role_id
      _params.role_name = options.role_name
      _params.role_level = options.role_level
      _params.ext = options.ext
      _params.paytype = pt
      _params.product_id = options.product_id
      _params.sign = _this.getSign(_params)
      // 下单接口
      $.ajax({
        url: "https://pay.camjm.space/?ct=h5Pay&ac=pre",
        type: "post",
        data: _params,
        dataType: "json",
        success: function (res) {
          if (res.state == 1) {
            var params = res.data;
            var json = {"pay_type":pt}; //创建对象；
            var jsonStr = JSON.stringify(json);
            let data = {
                user_id : _this.getLocalParams('MJ_uid').toString(),
                order_id : _params.cp_order_num.toString(),
                currency : "USD",
                amount : (_params.total_fee/100).toString()
            }
            dataWin_sdk.reportEvent("purchase", data)
            window.mjjssdk.thirdpay(params.product_id,params.pt_order_num,jsonStr);

            var interval = setInterval(function(){
              if(flag){
                return;
              }
              if(i > 10){
                clearInterval(interval);
                myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
              }
              flag = true;
              $.getJSON('/?ct=h5Pay&ac=payResultAction&cp_order_num='+options.cp_order_num,function(re){
                flag = false;
                if(re.state){
                  if(re.data['is_pay']){
                    let data = {
                        user_id : _this.getLocalParams('MJ_uid').toString(),
                        order_id : options.cp_order_num.toString(),
                        currency : "USD",
                        amount : (options.total_fee/100).toString()
                    }
                    dataWin_sdk.reportEvent("payment", data)

                    // 1. 组装你要传给客户端的所有参数
                    const orderParams = {
                      product_id: options.product_id, // 商品ID
                      price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                      value: (options.total_fee/100).toString(), // 金额值
                      currency: "USD", // 货币类型 USD/CNY等
                      quantity: 1, // 购买数量
                      subscription: "", // 是否订阅商品 true/false
                      free_trial: "", // 是否免费试用
                      introductory_price: "" // 是否推广价/入门价
                    };
                    _this.sendFirebaseReport({
                      eventName: 'in_app_purchase',
                      data: orderParams,
                    })

                    clearInterval(interval);
                    Toast('Payment is successful!',2000)
                  }else{
                     // 1. 组装你要传给客户端的所有参数
                      const orderParams = {
                        product_id: options.product_id, // 商品ID
                        price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                        value: (options.total_fee/100).toString(), // 金额值
                        currency: "USD", // 货币类型 USD/CNY等
                        quantity: 1, // 购买数量
                        msg: 'TRANSACTION FAILED', // 错误信息
                      };
                      _this.sendFirebaseReport({
                        eventName: 'sdkpayfailed',
                        data: orderParams,
                      })
                  }
                }else{
                  clearInterval(interval);
                  myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
                }
              });
              i++;
            },1000);

          }else{
            console.log(res.msg)
            Toast(res.msg,2000)
          }
        }
      });
    } else {
      var _html = $(`
      <div class="bodyDiv pay ">
        <div class="layerDiv">
          <div class="title title2">
            <icon class="iconfont close" style='visibility: hidden'>&#xe641;</icon>
            <span><span style="color:red;">$ ${options.total_fee/100}</span></span>
            <icon class="iconfont close">&#xe641;</icon>
          </div>
          <div class="layerbody">
            <div class="listDiv">
              ${ ($.inArray('15',_this.pay_types) !== -1 && _this.isAndroid()) ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/paypal_google_pay.png" alt="">
                <span>GooglePay</span>
                <img class="checkedImg" data-type="15" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ ($.inArray('16',_this.pay_types) !== -1 && _this.isIOS()) ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/paypal_apple_pay.png" alt="">
                <span>ApplePay</span>
                <img class="checkedImg" data-type="16" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ $.inArray('2',_this.pay_types) !== -1 ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/paypal.png" alt="">
                <span>Paypal</span>
                <img class="checkedImg" data-type="2" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ $.inArray('3',_this.pay_types) !== -1 ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/mycard.png" alt="">
                <span>Mycard</span>
                <img class="checkedImg" data-type="3" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ $.inArray('5',_this.pay_types) !== -1 ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/google_pay.png" alt="">
                <span>Google Pay</span>
                <img class="checkedImg" data-type="5" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ $.inArray('6',_this.pay_types) !== -1 ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/razer.png" alt="">
                <span>Razer</span>
                <img class="checkedImg" data-type="6" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ $.inArray('13',_this.pay_types) !== -1 ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/xsolla.png" alt="">
                <span>Xsolla</span>
                <img class="checkedImg" data-type="13" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
              ${ $.inArray('22',_this.pay_types) !== -1 ? `<div class="list">
                <img class="listIcon" src="${sdkUrl}/static/game/img/cash.png" alt="">
                <span>Cash</span>
                <img class="checkedImg" data-type="22" src="${sdkUrl}/static/game/img/unCheckedImg.png" alt="">
              </div>` : ''}
            </div>
            <div class="logInBtn payBtn marginTop19" id="payBtn">
              ${_this.paymentLang.confirm_pay}
            </div>
            <div id="otherpaybtn" class="hidden"></div>
          </div>
        </div>
      </div>
      `);
      console.log('gopay')
      $("body").append(_html);
      $(_html)
          .find(".payBtn")
          .bind(_this.MouseEvent.Up, function () {
            var type = $(
                ".pay .list .checkedImg[src='" + sdkUrl + "/static/game/img/checkedImg.png']"
            ).data("type");

            if(type == "22"){
              window.location.href = "https://www.baidu.com/"
              return;
            }

            var _params = _this.getBaseParams()
            _params.uid = _this.getLocalParams('MJ_uid')
            _params.token = _this.getLocalParams('MJ_token')
            _params.cp_order_num = options.cp_order_num
            _params.total_fee = options.total_fee
            _params.server_id = options.server_id
            _params.role_id = options.role_id
            _params.role_name = options.role_name
            _params.role_level = options.role_level
            _params.ext = options.ext
            _params.paytype = type
            _params.product_id = options.product_id
            _params.report = JSON.stringify({
              'eventName': 'af_purchase',
              'data': {
                'game_id': getParam('g'),
                'device': getParam('dd'),
                'af_id': getParam('af_id') || "",
                'res': {'total_fee': options.total_fee / 100}
              },
            })
            _params.sign = _this.getSign(_params)

            // 下单接口
            $.ajax({
              url: "https://pay.camjm.space/?ct=h5Pay&ac=pre",
              type: "post",
              data: _params,
              dataType: "json",
              success: function (res) {
                if (res.state == 1) {
                  let data = {
                      user_id : _this.getLocalParams('MJ_uid').toString(),
                      order_id : _params.cp_order_num.toString(),
                      currency : "USD",
                      amount : (_params.total_fee/100).toString()
                  }
                  dataWin_sdk.reportEvent("purchase", data)
                  
                  if (type == 5) {
                    var params = res.data;
                    window.mjjssdk.walletPay(params.product_id,params.pt_order_num);
                  }else{
                    if (type == 6) {
                      var p_url = res.data.paymentUrl;
                    }if (type == 13) {
                      var p_url = "https://sandbox-secure.xsolla.com/paystation4/?token="+res.data.token;   //沙箱环境
                      // var p_url = "https://secure.xsolla.com/paystation4/?token="+res.data.token;    //正式环境
                    }else {
                      var p_url = res.data.url;
                    }
                    window.open(p_url,'_blank')
                    // window.location.href = p_url
                  }

                  var flag = false;
                  var i = 0;
                  var interval = setInterval(function(){
                    if(flag){
                      return;
                    }
                    if(i > 10){
                      clearInterval(interval);
                      myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
                    }
                    flag = true;
                    $.getJSON('/?ct=h5Pay&ac=payResultAction&cp_order_num='+options.cp_order_num,function(re){
                      flag = false;
                      if(re.state){
                        if(re.data['is_pay']){
                          let data = {
                              user_id : _this.getLocalParams('MJ_uid').toString(),
                              order_id : options.cp_order_num.toString(),
                              currency : "USD",
                              amount : (options.total_fee/100).toString()
                          }
                          dataWin_sdk.reportEvent("payment", data)

                          // 1. 组装你要传给客户端的所有参数
                          const orderParams = {
                            product_id: options.product_id, // 商品ID
                            price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                            value: (options.total_fee/100).toString(), // 金额值
                            currency: "USD", // 货币类型 USD/CNY等
                            quantity: 1, // 购买数量
                            subscription: "", // 是否订阅商品 true/false
                            free_trial: "", // 是否免费试用
                            introductory_price: "" // 是否推广价/入门价
                          };
                          _this.sendFirebaseReport({
                            eventName: 'in_app_purchase',
                            data: orderParams,
                          })

                          clearInterval(interval);
                          Toast('Payment is successful!',2000)
                        }else{
                          // 1. 组装你要传给客户端的所有参数
                          const orderParams = {
                            product_id: options.product_id, // 商品ID
                            price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                            value: (options.total_fee/100).toString(), // 金额值
                            currency: "USD", // 货币类型 USD/CNY等
                            quantity: 1, // 购买数量
                            msg: "TRANSACTION FAILED"
                          };
                          _this.sendFirebaseReport({
                            eventName: 'sdkpayfailed',
                            data: orderParams,
                          })
                        }
                      }else{
                        clearInterval(interval);
                        myConfirm('The system has detected incomplete payment, please confirm!','Paid','non-Payment',true,false,false,'Warm Tips');
                      }
                    });
                    i++;
                  },1000);
                }else{
                  console.log(res.msg)
                  Toast(res.msg,2000)
                }
              }
            });
            $(".bodyDiv").remove();
          });
      $(_html)
          .find(".close")
          .bind(_this.MouseEvent.Up, function () {
            // $(".xzball").show();
            $(".bodyDiv").remove();
          });
      $(_html)
          .find(".list")
          .bind(_this.MouseEvent.Up, function () {
            $(this)
                .find(".checkedImg")
                .attr("src", sdkUrl + "/static/game/img/checkedImg.png")
            $(this)
                .siblings()
                .find(".checkedImg")
                .attr("src", sdkUrl + "/static/game/img/unCheckedImg.png");
            var type = $(
                ".pay .list .checkedImg[src='" + sdkUrl + "/static/game/img/checkedImg.png']"
            ).data("type");
            if (type === 2 || type === 15 || type === 16) {
                $("#otherpaybtn").hide();
                $("#otherpaybtn").empty();
                $("#otherpaybtn").show();
                $("#payBtn").hide();
                var _params = _this.getBaseParams()
                _params.uid = _this.getLocalParams('MJ_uid')
                _params.token = _this.getLocalParams('MJ_token')
                _params.cp_order_num = options.cp_order_num
                _params.total_fee = options.total_fee
                _params.server_id = options.server_id
                _params.role_id = options.role_id
                _params.role_name = options.role_name
                _params.role_level = options.role_level
                _params.ext = options.ext
                _params.paytype = type
                _params.sign = _this.getSign(_params)

                console.log("paypal支付")

                if(type === 15){
                  if (google && paypal.Googlepay) {
                    console.log("paypal支付 显示GooglePay")
                    _params.product_id = options.product_id;
                    paypal_google_pay_sdk.onInitOrderData(_params)
                    paypal_google_pay_sdk.onGooglePayLoaded().catch(console.log);
                  }
                }
                
                if(type === 16){
                    _params.product_id = options.product_id;
                    paypal_apple_pay_sdk.onInitApplePayData("otherpaybtn", _params);
                    paypal_apple_pay_sdk.onShowApplePayButton();
                }

                if(type === 2){
                    paypal.Buttons({
                      // Call your server to set up the transaction
                      createOrder: function(data, actions) {
                        return fetch('https://pay.camjm.space?ct=h5Pay&ac=pre', {
                          method: 'post',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          },
                          redirect: 'follow', // manual, *follow, error
                          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                          body: JSON.stringify({
                            'params': _params,
                          }),
                        }).then(function(res) {
                          console.log(res);
                          return res.json();
                        }).then(function(orderData) {
                          if(orderData.status == "CREATED"){
                            let data = {
                                user_id : _this.getLocalParams('MJ_uid').toString(),
                                order_id : _params.cp_order_num.toString(),
                                currency : "USD",
                                amount : (_params.total_fee/100).toString()
                            }
                            dataWin_sdk.reportEvent("purchase", data)
                           
                          }
                          if(orderData.state != undefined && orderData.state == 0){
                            var _html = $(`
                              <div class="my-ok-div">
                                <div class="my-ok-board">
                                  <div class="my-ok-title">
                                    ${orderData.msg}
                                  </div>
                                  <div class="my-ok-btn-group">
                                    <div class="my-ok-btn">
                                      OK
                                    </div>
                                  </div>
                                </div>
                              </div>`)
                            $("body").append(_html);
                            $(_html)
                              .find(".my-ok-btn")
                              .bind(_this.MouseEvent.Up, function () {
                                $(".my-ok-div").remove();
                                $(".bodyDiv").remove();
                              })
                          }
                          console.log(orderData);
                          return orderData.id;
                        });
                      },
                      // Call your server to finalize the transaction
                      onApprove: function(data, actions) {
                        data.game_id = getParam('g');
                        console.log(data);
                        return fetch('https://pay.camjm.space?ct=h5Pay&ac=capture', {
                          method: 'post',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          },
                          redirect: 'follow', // manual, *follow, error
                          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                          body: JSON.stringify({
                            'data': data,
                          })
                        }).then(function(res) {
                          console.log(res)
                          return res.json();
                        }).then(function(orderData) {
                          console.log(orderData);
                          var errorDetail = Array.isArray(orderData.details) && orderData.details[0];
                          if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                            return actions.restart();
                          }

                          if (errorDetail) {
                            var msg = 'Sorry, your transaction could not be processed.';
                            if (errorDetail.description) msg += '\n\n' + errorDetail.description;
                            if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')';
                            Toast(msg,2000)
                          }

                          //支付成功返回
                          if (orderData.msg === 'success') {
                            if(getParam('g') == 10284){
                              showTk()
                            }
                            let data_dw = {
                                user_id : _this.getLocalParams('MJ_uid').toString(),
                                order_id : options.cp_order_num.toString(),
                                currency : "USD",
                                amount : (options.total_fee/100).toString()
                            }
                            dataWin_sdk.reportEvent("payment", data_dw)
                            var data = {'game_id':getParam('g'),'device':getParam('dd'),'af_id':getParam('af_id'),'res': {'total_fee':orderData.data.total_fee}};
                            afReport('af_purchase',data);

                            // 1. 组装你要传给客户端的所有参数
                            const orderParams = {
                              product_id: options.product_id, // 商品ID
                              price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                              value: (options.total_fee/100).toString(), // 金额值
                              currency: "USD", // 货币类型 USD/CNY等
                              quantity: 1, // 购买数量
                              subscription: "", // 是否订阅商品 true/false
                              free_trial: "", // 是否免费试用
                              introductory_price: "" // 是否推广价/入门价
                            };
                            _this.sendFirebaseReport({
                              eventName: 'in_app_purchase',
                              data: orderParams,
                            })

                            Toast(_this.paymentLang.success_msg,2000)
                          } else {
                             // 1. 组装你要传给客户端的所有参数
                            const orderParams = {
                              product_id: options.product_id, // 商品ID
                              price: (options.total_fee/100).toString(), // 价格（字符串/数字都行）
                              value: (options.total_fee/100).toString(), // 金额值
                              currency: "USD", // 货币类型 USD/CNY等
                              quantity: 1, // 购买数量
                              msg: "TRANSACTION FAILED"
                            };
                            _this.sendFirebaseReport({
                              eventName: 'sdkpayfailed',
                              data: orderParams,
                            })
                            Toast(_this.paymentLang.err_msg3,2000)
                          }
                          $(".bodyDiv").remove();
                        });
                      },
                      style: {
                        layout: 'horizontal'
                      }
                    }).render('#otherpaybtn');
                }
            } else{
              $("#otherpaybtn").hide();
              $("#otherpaybtn").empty();
              $("#payBtn").show();
            }
          });
      $(document).ready(function() {
          let firstOnList = $('.listDiv').children().first();
          firstOnList.trigger(_this.MouseEvent.Up);
      });
    }
  },
  sendAppleReceipt: function (options) {
    $.ajax({
      url: "https://pay.camjm.space/?ct=h5Pay&ac=iosVerity",
      type: "post",
      data: options,
      dataType: "json",
      success: function (res) {
        if (res.state == 1) {
          var af_id = window.localStorage.getItem('af_id') || "";
          var link_af_id = getParam('af_id');
          console.log(af_id)
          console.log(link_af_id)
          if (af_id !== '' && af_id !== null && af_id !== undefined && af_id !== 'null') {
            var data = {'game_id':getParam('g'),'device':getParam('dd'),'af_id':af_id,'res':res.data};
            window.localStorage.removeItem('af_purchase');
            afReport('af_purchase',data);
          } else if (link_af_id !== '' && link_af_id !== null && link_af_id !== undefined && link_af_id !== 'null') {
            var data = {'game_id':getParam('g'),'device':getParam('dd'),'af_id':link_af_id,'res':res.data};
            window.localStorage.removeItem('af_purchase');
            afReport('af_purchase',data);
          } else {
            window.localStorage.setItem('af_purchase','af_purchase')
          }
          window.webkit.messageHandlers.DebugMethod.postMessage(res);
        }else{
          console.log(res.msg)
          Toast(res.msg,2000)
        }
      }
    });
  },

  sendReport(options){
    let reportTypeList = options.channelTypes || [];
    for(let key in reportTypeList){
      switch(reportTypeList[key]){
        case 1:
          this.sendAfReport(options)
          break;
        case 2:
          if(options.eventName == 'enter_game'){
             options.eventName = 'login';
          }
          this.sendFirebaseReport(options)
          break;
        default:
          break;
      }
    }
    
  },

  sendAfReport: function (options) {
    var _this = this
    var af_id = _this.getLocalParams('af_id');
    options.data.dv = getLastParameterValue('dv');
    if ((options.data.af_id === '' && af_id === '') || (options.data.af_id === null && af_id === null) || (options.data.af_id === undefined && af_id === undefined) || (options.data.af_id === 'null' && af_id === 'null')) {
      console.log("no_af_id: " + options.eventName)
      _this.setLocalParams(options.eventName,options.eventName)
    }

    if (options.data.af_id !== '' && options.data.af_id !== null && options.data.af_id !== undefined && options.data.af_id !== 'null') {
      // if(getParam("g") == 10195){
      //   options.data.af_id = af_id;
      // }
      var param=JSON.stringify(options)
      console.log(param)
      $.ajax({
        url: sdkUrl + "/?ct=af&ac=run",
        type: "post",
        data: param,
        dataType: "json",
        success: function (res) {
          if (res.state == 1) {
            mjsdk.afReportFailRunCurNum = 0;
            console.log(options.eventName + " "  + res.msg)
          }else{
            mjsdk.afReportFailRunCurNum += 1;
            if(res.msg == "af report fail" && mjsdk.afReportFailRunCurNum <= mjsdk.afReportFailRunMaxNum){
              mjsdk.sendAfReport(options)
            }
            console.log(res.msg)
          }
        }
      });
    } else if (af_id !== '' && af_id !== null && af_id !== undefined && af_id !== 'null') {
      _this.setLocalParams(options.eventName,options.eventName)
      console.log('af_id: ' + af_id)
      eventInfo(af_id);
    }
  },
  sendFirebaseReport: function (options) {
    var _this = this
    let eventData = {
      'eventName': options.eventName,
      'data': options.data,
    }
    try {
      if (_this.isAndroid()) {
        // 安卓安全调用：加可选链 ?. 防止不存在时报错
        window.mjjssdk?.firebaseReport?.(JSON.stringify(eventData));
      } 
      else if (_this.isIOS()) {
        // iOS安全调用：加可选链 ?.
        window.webkit?.messageHandlers?.firebaseReport?.postMessage?.(JSON.stringify(eventData));
      }
    } catch (e) {
      // 兜底：就算出错也不会阻塞代码
      console.warn('firebaseReport 调用失败', e);
    }
  },
  sendGoogleReceipt: function (options) {
    options.game_id = getParam('g')
    options.package_name = getParam('p')
    options.language = this.getLocalParams("hwmj_language");
    $.ajax({
      url: "https://pay.camjm.space/?ct=h5Pay&ac=googleVerity",
      type: "post",
      data: options,
      dataType: "json",
      success: function (res) {
        if (res.state == 1) {
          var data = {'game_id':getParam('g'),'device':getParam('dd'),'af_id':getParam('af_id'),'res':res.data};
          afReport('af_purchase',data);
          console.log('pay success')
        }else{
          console.log(res.msg)
          Toast(res.msg,2000)
        }
      }
    });
  },
  sendOpenServiceAction: function (options) {
    window.mjjssdk.openService(options);
  },
}

var paypal_google_pay_sdk = {
    /*
    * Define the version of the Google Pay API referenced when creating your
    * configuration
    */
    baseRequest : {
      apiVersion: 2,
      apiVersionMinor: 0,
    },
    paymentsClient : null,
    allowedPaymentMethods : null,
    merchantInfo : null,

    order : null,

    onInitOrderData : function(_order){
      paypal_google_pay_sdk.order = _order;
    },

    /* Configure your site's support for payment methods supported by the Google Pay */
    getGoogleIsReadyToPayRequest : function(allowedPaymentMethods) {
      return Object.assign({}, this.baseRequest, {
        allowedPaymentMethods: allowedPaymentMethods,
      });
    },

    /* Fetch Default Config from PayPal via PayPal SDK */
    getGooglePayConfig: async function() {
      let _this = this;
      let _obj = {
        allowedPaymentMethods : null,
        merchantInfo : null,
      }
      if (_this.allowedPaymentMethods == null || _this.merchantInfo == null) {
        const googlePayConfig = await paypal.Googlepay().config();
        _this.allowedPaymentMethods = googlePayConfig.allowedPaymentMethods;
        _this.merchantInfo = googlePayConfig.merchantInfo;
      }
      _obj.allowedPaymentMethods = _this.allowedPaymentMethods;
      _obj.merchantInfo = _this.merchantInfo;
      return _obj;
    },

    /* Note: the `googlePayConfig` object in this request is the response from `paypal.Googlepay().config()` */
    getGooglePaymentDataRequest :async function() {
      // const googlePayConfig = await paypal.Googlepay().config();
      // const paymentDataRequest = Object.assign({}, baseRequest);
      // paymentDataRequest.allowedPaymentMethods = googlePayConfig.allowedPaymentMethods;
      // paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
      // paymentDataRequest.merchantInfo = googlePayConfig.merchantInfo;
      // paymentDataRequest.callbackIntents = ["PAYMENT_AUTHORIZATION"];
      // return paymentDataRequest;

      const paymentDataRequest = Object.assign({}, this.baseRequest);
      const { allowedPaymentMethods, merchantInfo } = await this.getGooglePayConfig();
      paymentDataRequest.allowedPaymentMethods = allowedPaymentMethods;
      paymentDataRequest.transactionInfo = this.getGoogleTransactionInfo();
      paymentDataRequest.merchantInfo = merchantInfo;
      paymentDataRequest.callbackIntents = ["PAYMENT_AUTHORIZATION"];
      return paymentDataRequest;
    },

    onPaymentAuthorized :function(paymentData) {
      let _this = this;
      return new Promise(function (resolve, reject) {
        paypal_google_pay_sdk.processPayment(paymentData)
          .then(function (data) {
            resolve({ transactionState: "SUCCESS" });
          })
          .catch(function (errDetails) {
            resolve({ transactionState: "ERROR" });
          });
      });
    },

    getGooglePaymentsClient :function() {
      let _this = this;
      if (_this.paymentsClient === null) {
        _this.paymentsClient = new google.payments.api.PaymentsClient({
          environment: "PRODUCTION",
          paymentDataCallbacks: {
            onPaymentAuthorized: _this.onPaymentAuthorized,
          },
        });
      }
      return _this.paymentsClient;
    },

    /**
     * Initialize Google PaymentsClient after Google-hosted JavaScript has loaded
     *
     * Display a Google Pay payment button after confirmation of the viewer's
     * ability to pay.
     */
    onGooglePayLoaded: async function () {
      let _this = this;
      const paymentsClient = this.getGooglePaymentsClient();
      const { allowedPaymentMethods } = await this.getGooglePayConfig();
      paymentsClient.isReadyToPay(_this.getGoogleIsReadyToPayRequest(allowedPaymentMethods))
          .then(function(response) {
            if (response.result) {
              _this.addGooglePayButton();
            }
          })
          .catch(function(err) {
            console.error(err);
          });
    },

    /**
     * Add a Google Pay purchase button
     */
    addGooglePayButton : function () {
      const paymentsClient = this.getGooglePaymentsClient();
      const button =
          paymentsClient.createButton({
            onClick: this.onGooglePaymentButtonClicked /* To be defined later */,
            //allowedPaymentMethods: [baseCardPaymentMethod]
          });
      document.getElementById('otherpaybtn').appendChild(button);
    },

    getGoogleTransactionInfo :function (){
      return {
          currencyCode: 'USD',
          totalPriceStatus: 'FINAL',
          totalPrice: (paypal_google_pay_sdk.order.total_fee/100).toString() // Your amount
        }
    },

    /* Show Google Pay payment sheet when Google Pay payment button is clicked */
    onGooglePaymentButtonClicked : async function() {
      const paymentDataRequest = await paypal_google_pay_sdk.getGooglePaymentDataRequest();
      const paymentsClient = paypal_google_pay_sdk.getGooglePaymentsClient();
      paymentsClient.loadPaymentData(paymentDataRequest);
    },

    processPayment : async function(paymentData) {
      return new Promise(async function (resolve, reject) {
        try {
            // Create the order on your server
            const orderData = await fetch(`https://pay.camjm.space?ct=h5Pay&ac=pre`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                'params': paypal_google_pay_sdk.order,
                
              })
              // You can use the "body" parameter to pass optional, additional order information, such as:
              // amount, and amount breakdown elements like tax, shipping, and handling
              // item data, such as sku, name, unit_amount, and quantity
              // shipping information, like name, address, and address type
            })
            .then(function(res) {
                    console.log(res);
                    return res.json();
            })
            .then(function(orderData) {
              if(orderData.status == "CREATED"){
                let data = {
                    user_id : mjsdk.getLocalParams('MJ_uid').toString(),
                    order_id : paypal_google_pay_sdk.order.cp_order_num.toString(),
                    currency : "USD",
                    amount : (paypal_google_pay_sdk.order.total_fee/100).toString()
                }
                dataWin_sdk.reportEvent("purchase", data)
                 
              }
              $(".bodyDiv").remove();
              if(orderData.state != undefined && orderData.state == 0){
                var _html = $(`
                  <div class="my-ok-div">
                    <div class="my-ok-board">
                      <div class="my-ok-title">
                        ${orderData.msg}
                      </div>
                      <div class="my-ok-btn-group">
                        <div class="my-ok-btn">
                          OK
                        </div>
                      </div>
                    </div>
                  </div>`)
                $("body").append(_html);
                $(_html)
                  .find(".my-ok-btn")
                  .bind(mjsdk.MouseEvent.Up, function () {
                    $(".my-ok-div").remove();
                    $(".bodyDiv").remove();
                  })
              }
              console.log(orderData);
              return orderData;
            });
          const confirmOrderResponse = await paypal.Googlepay().confirmOrder({
              orderId: orderData.id,
              paymentMethodData: paymentData.paymentMethodData
            });
          /** Capture the Order on your Server  */
          if(confirmOrderResponse.status === "APPROVED"){
               orderData.game_id = getParam('g');
               orderData.orderID = orderData.id;
               const response =  await fetch(`https://pay.camjm.space?ct=h5Pay&ac=capture`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: 'follow', // manual, *follow, error
                  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                  body: JSON.stringify({
                    'data': orderData,
                  })
                }).then(res => res.json())
                .then(function(captureData) {
                  console.log(captureData);
                  let responseData = captureData.data.purchase_units[0].payments;
                  return responseData;
                });;
              if(response.captures[0].status === "COMPLETED"){
                  if(getParam('g') == 10284){
                    showTk()
                  }
                  let data = {
                      user_id : mjsdk.getLocalParams('MJ_uid').toString(),
                      order_id : paypal_google_pay_sdk.order.cp_order_num.toString(),
                      currency : "USD",
                      amount : (paypal_google_pay_sdk.order.total_fee/100).toString()
                  }
                  dataWin_sdk.reportEvent("payment", data)

                  // 1. 组装你要传给客户端的所有参数
                  const orderParams = {
                    product_id: paypal_google_pay_sdk.order.product_id, // 商品ID
                    price: (paypal_google_pay_sdk.order.total_fee/100).toString(), // 价格（字符串/数字都行）
                    value: (paypal_google_pay_sdk.order.total_fee/100).toString(), // 金额值
                    currency: "USD", // 货币类型 USD/CNY等
                    quantity: 1, // 购买数量
                    subscription: "", // 是否订阅商品 true/false
                    free_trial: "", // 是否免费试用
                    introductory_price: "" // 是否推广价/入门价
                  };
                  mjsdk.sendFirebaseReport({
                    eventName: 'in_app_purchase',
                    data: orderParams,
                  })

                  $(".bodyDiv").remove();
                  resolve({transactionState: 'SUCCESS'});
              }
              else{
                  // 1. 组装你要传给客户端的所有参数
                  const orderParams = {
                    product_id: paypal_google_pay_sdk.order.product_id, // 商品ID
                    price: (paypal_google_pay_sdk.order.total_fee/100).toString(), // 价格（字符串/数字都行）
                    value: (paypal_google_pay_sdk.order.total_fee/100).toString(), // 金额值
                    currency: "USD", // 货币类型 USD/CNY等
                    quantity: 1, // 购买数量
                    msg: "TRANSACTION FAILED", // 错误信息
                  };
                  mjsdk.sendFirebaseReport({
                    eventName: 'sdkpayfailed',
                    data: orderParams,
                  })
                  resolve({
                    transactionState: 'ERROR',
                    error: {
                      intent: 'PAYMENT_AUTHORIZATION',
                      message: 'TRANSACTION FAILED',
                    }
                  })            
                }
          } else {
               resolve({
                transactionState: 'ERROR',
                error: {
                  intent: 'PAYMENT_AUTHORIZATION',
                  message: 'TRANSACTION FAILED',
                }
              })
          }
        } catch(err) {
          resolve({
            transactionState: 'ERROR',
            error: {
              intent: 'PAYMENT_AUTHORIZATION',
              message: err.message,
            }
          })
        }
      });
    }
}

var paypal_apple_pay_sdk = {
  applepay : null,
  applepayConfig : null,
  labelID : null,
  orderData : null,
  
  onInitApplePayData : function(_labelID, _orderData){
    paypal_apple_pay_sdk.labelID = _labelID;
    paypal_apple_pay_sdk.orderData = _orderData
  },

  onShowApplePayButton :function(){
    console.log("paypal支付 显示ApplePay")
    if(this.onCheckIsSupportApplePay()){
      this.onCheckIsPayEligibleAndShowButton()
    }
  },

  onCheckIsSupportApplePay : function(){
    let isCan = true;
    if (!window.ApplePaySession) {
      console.error('This device does not support Apple Pay');
      isCan = false;
    }
    if (!window.ApplePaySession.canMakePayments()) {
      console.error('This device is not capable of making Apple Pay payments');
      isCan = false;
    }
    return isCan;
  },

  onCheckIsPayEligibleAndShowButton : function(){
    let _this = this;
    const applepay = paypal.Applepay();
    paypal_apple_pay_sdk.applepay = applepay;
    applepay.config()
    .then(applepayConfig => {
      paypal_apple_pay_sdk.applepayConfig = applepayConfig;
      console.log("applepayConfig:  ",applepayConfig);
      if (applepayConfig.isEligible) {
        _this.onAddApplePayButton();
      }
    })
    .catch(applepayConfigError => {
      console.error('Error while fetching Apple Pay configuration.');
    });
  },

  onAddApplePayButton : function(){
    let _this = this;
    document.getElementById(paypal_apple_pay_sdk.labelID).innerHTML = '<apple-pay-button id="btn-apple" buttonstyle="black" type="buy" locale="en">';
    $("body")
          .find("#btn-apple")
          .bind(mjsdk.MouseEvent.Up, function () {
            _this.onClickApplePay()
          });
  },

  onClickApplePay:function(){
    const paymentRequest = {
      countryCode: paypal_apple_pay_sdk.applepayConfig.countryCode,
      merchantCapabilities: paypal_apple_pay_sdk.applepayConfig.merchantCapabilities,
      supportedNetworks: paypal_apple_pay_sdk.applepayConfig.supportedNetworks,
      currencyCode: "USD",
      requiredShippingContactFields: ["name", "phone", "email", "postalAddress"],
      requiredBillingContactFields: ["postalAddress"],
      total: {
        label: "Demo",    //企业名称，Provide a business name in the label field. Use the same business name people see when they look for the charge on their bank or credit card statement, for example, “COMPANY, INC.".
        type: "final",
        amount: paypal_apple_pay_sdk.orderData.total_fee/100,
      }
    };
    
    console.log("paymentRequest:   ", paymentRequest)
    const session = new ApplePaySession(4, paymentRequest);
    console.log("session:  ",session)
    this.onOnvalidatemerchantCallback(session);
    this.onPaymentauthorizedCallback(session);
    session.begin();
  },

  onOnvalidatemerchantCallback : function(session){
    session.onvalidatemerchant = (event) => {
      paypal_apple_pay_sdk.applepay.validateMerchant({
        validationUrl: event.validationURL,
        displayName: "My Store"
      })
      .then(validateResult => {
        session.completeMerchantValidation(validateResult.merchantSession);
      })
      .catch(validateError => {
        console.error(validateError);
        session.abort();
      });
    };
  },

  onPaymentauthorizedCallback : function(session){
    session.onpaymentauthorized = (event) => {
      console.log('您的賬單地址是：', event.payment.billingContact);
      console.log('您的運送地址是：', event.payment.shippingContact);
      console.log('paypal_apple_pay_sdk.orderData   ', paypal_apple_pay_sdk.orderData);
      fetch("https://pay.camjm.space?ct=h5Pay&ac=pre", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          'params': paypal_apple_pay_sdk.orderData,
        })
      })
      .then(res => res.json())
      .then((createOrderData) => {
        if(createOrderData.status == "CREATED"){
          let data = {
              user_id : mjsdk.getLocalParams('MJ_uid').toString(),
              order_id : paypal_apple_pay_sdk.orderData.cp_order_num.toString(),
              currency : "USD",
              amount : (paypal_apple_pay_sdk.orderData.total_fee/100).toString()
          }
          dataWin_sdk.reportEvent("purchase", data)
          
        }
        if(createOrderData.state != undefined && createOrderData.state == 0){
          var _html = $(`
            <div class="my-ok-div">
              <div class="my-ok-board">
                <div class="my-ok-title">
                  ${createOrderData.msg}
                </div>
                <div class="my-ok-btn-group">
                  <div class="my-ok-btn">
                    OK
                  </div>
                </div>
              </div>
            </div>`)
          $("body").append(_html);
          $(_html)
            .find(".my-ok-btn")
            .bind(mjsdk.MouseEvent.Up, function () {
              $(".my-ok-div").remove();
              $(".bodyDiv").remove();
            })
        }else{
          var orderId = createOrderData.id;
          paypal_apple_pay_sdk.applepay.confirmOrder({
            orderId: orderId,
            token: event.payment.token,
            billingContact: event.payment.billingContact
          })
          .then(confirmResult => {
            session.completePayment(ApplePaySession.STATUS_SUCCESS);
            createOrderData.game_id = getParam('g');
            createOrderData.orderID = createOrderData.id;
            fetch(`https://pay.camjm.space?ct=h5Pay&ac=capture`, {
              method: "post",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify({
                'data': createOrderData,
              })
            })
            .then(res => res.json())
            .then(captureResult => {
              let payments = captureResult.data.purchase_units[0].payments;
              //支付成功返回
              if (payments.captures[0].status === "COMPLETED") {
                if(getParam('g') == 10284){
                  showTk()
                }
                let data = {
                    user_id : _this.getLocalParams('MJ_uid').toString(),
                    order_id : paypal_apple_pay_sdk.orderData.cp_order_num.toString(),
                    currency : "USD",
                    amount : (paypal_apple_pay_sdk.orderData.total_fee/100).toString()
                }
                dataWin_sdk.reportEvent("payment", data)

                // 1. 组装你要传给客户端的所有参数
                const orderParams = {
                  product_id: paypal_apple_pay_sdk.orderData.product_id, // 商品ID
                  price: (paypal_apple_pay_sdk.orderData.total_fee/100).toString(), // 价格（字符串/数字都行）
                  value: (paypal_apple_pay_sdk.orderData.total_fee/100).toString(), // 金额值
                  currency: "USD", // 货币类型 USD/CNY等
                  quantity: 1, // 购买数量
                  subscription: "", // 是否订阅商品 true/false
                  free_trial: "", // 是否免费试用
                  introductory_price: "" // 是否推广价/入门价
                };
                mjsdk.sendFirebaseReport({
                  eventName: 'in_app_purchase',
                  data: orderParams,
                })
              }else{
                // 1. 组装你要传给客户端的所有参数
                const orderParams = {
                product_id: paypal_apple_pay_sdk.orderData.product_id, // 商品ID
                price: (paypal_apple_pay_sdk.orderData.total_fee/100).toString(), // 价格（字符串/数字都行）
                value: (paypal_apple_pay_sdk.orderData.total_fee/100).toString(), // 金额值
                currency: "USD", // 货币类型 USD/CNY等
                quantity: 1, // 购买数量
                msg: "TRANSACTION FAILED", // 错误信息
                };
                mjsdk.sendFirebaseReport({
                  eventName: 'sdkpayfailed',
                  data: orderParams,
                })
                resolve({
                  transactionState: 'ERROR',
                  error: {
                    intent: 'PAYMENT_AUTHORIZATION',
                    message: "TRANSACTION FAILED",
                  }
                })            
              }
              $(".bodyDiv").remove();
              console.log(captureResult);
            })
            .catch(captureError => console.error(captureError));
          })
          .catch(confirmError => {
            if (confirmError) {
              console.error('使用 Apple Pay 令牌確認訂單時出錯');
              console.error(confirmError);
              session.completePayment(ApplePaySession.STATUS_FAILURE);
            }
          });
        }
      });
    };
  }

}

var dataWin_sdk = {
  init : function(initParams){
      //预初始化
      XGSDK.preInit(initParams.appkey);
      // 初始化
      window.XGSDK.init(initParams)
      .then(function(res){
        if(res.code == 0){
          isInitComplete_dw = true;
          console.log("成功");
        }
      }).catch(function(error){
        isInitComplete_dw = false;
        console.log(error)
      });
      // // 挂载到全局(比如 window)上供其他地方使用
      // window.XGSDK =XGSDK;
  },

  reportEvent : function(eventType, data){
    if(isInitComplete_dw){
      switch (eventType) {
        case "register":
          dataWin_sdk.dw_event_register(data)
          break;
        case "login":
          dataWin_sdk.dw_event_login(data)
          break;
        case "purchase":
          dataWin_sdk.dw_event_purchase(data)
            break;
        case "payment":
          dataWin_sdk.dw_event_payment(data)
            break;
        default:
          break;
      }
    }
  },

  //注册事件
  dw_event_register : function(data){
    XGSDK.registerEvent(data).then(function(res){if(res.code == 0){
      console.log("成功");}
    }).catch(function(error){
      console.log(error)
    });
  },

  //登录事件
  dw_event_login : function(data){
    XGSDK.loginEvent(data).then(function(res){if(res.code == 0){
      console.log("成功");}
    }).catch(function(error){
      console.log(error)
    });
  },

  //内购事件
  dw_event_purchase : function(data){
    XGSDK.purchaseEvent(data).then(function(res){if(res.code == 0){
      console.log("成功");}
    }).catch(function(error){
      console.log(error)
    });
  },

  //付费事件
  dw_event_payment : function(data){
    XGSDK.paymentEvent(data).then(function(res){if(res.code == 0){
      console.log("成功");}
    }).catch(function(error){
      console.log(error)
    });
  },

  //订阅事件
  dw_event_subscribe : function(data){
    XGSDK.subscribeEvent(data).then(function(res){if(res.code == 0){
      console.log("成功");}
    }).catch(function(error){
      console.log(error)
    });
  },
}

var fb_sdk = {

  fbqInit : function(initParams){
        // 根据参数加载不同的 JS 文件
        const script = document.createElement('script');
        script.textContent = `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', "${initParams.pixel_id}");
      fbq('track', 'PageView');`; // 例如 main.js 或 analytics.js
        document.head.appendChild(script);
  },
  
  reportEvent : function(data){
      switch (data.eventType) {
        case "ViewContent":
          fb_sdk.fbq_event_viewContent(data.data)
          break;
        case "CompleteRegistration":
          fb_sdk.fbq_event_completeRegistration()
          break;
        case "Purchase":
          fb_sdk.fbq_event_purchase(data.data)
          break;
        default:
          break;
      }
  },

  fbq_event_viewContent : function(data){
    if(typeof fbq !== 'undefined' && fbq !== null){
      fbq('track', 'ViewContent', {
        content_name: data.contentName,
        content_category: data.contentCategory,
        // value: 0,
        // currency: 'USD'
      });
    }else{
      console.log("fbq不存在")
    }
  },

  fbq_event_completeRegistration : function(){
    if(typeof fbq !== 'undefined' && fbq !== null){
      fbq('track', 'CompleteRegistration', {
        status: '成功'
      });
    }else{
      console.log("fbq不存在")
    }
  },

  fbq_event_purchase : function(data){
    if(typeof fbq !== 'undefined' && fbq !== null){
      fbq('track', 'Purchase', {
        value: data.value,
        currency: data.currency
      });
    }else{
      console.log("fbq不存在")
    }
  }
}

function showTk(){
  var _html = $(`
    <div class="my-ok-div">
      <div class="my-ok-board" style="max-width: 331px;width: 65vmin;padding: 20px 20px;min-height: 0;">
        <div class="my-ok-btn-group">
          <div class="my-ok-btn">
            PAYMENT SUCCESS
          </div>
        </div>
      </div>
    </div>`)
  $("body").append(_html);
  $(_html)
  .find(".my-ok-btn")
  .bind(mjsdk.MouseEvent.Up, function () {
    setTimeout(function(){
      // 延迟后执行的代码
      $(".my-ok-div").remove();
      $(".bodyDiv").remove();
    }, 2000);
  })
}

function setSDKLanguage(){
    // 获取浏览器语言设置
    var userLanguage = navigator.language || navigator.userLanguage;
    console.log("浏览器语言:", userLanguage);
    function containsIgnoreCase(str, substr) {
      return str.toLowerCase().includes(substr.toLowerCase());
    }
    // 示例用法
    const mainString = userLanguage;
    const searchString = "zh";
    if(containsIgnoreCase(mainString, "CN")){
        mjsdk.setLocalParams("hwmj_language", "zh");
        console.log("包含CN ",mjsdk.getLocalParams("hwmj_language"));
    }else{
      if (containsIgnoreCase(mainString, searchString)) {
        if(containsIgnoreCase(mainString, "SG") || containsIgnoreCase(mainString, "Hans") || containsIgnoreCase(mainString, "CN")){
          mjsdk.setLocalParams("hwmj_language", "zh");
        }else{
          mjsdk.setLocalParams("hwmj_language", "tw");
        }
        console.log("包含zh ",mjsdk.getLocalParams("hwmj_language"));
      } else {
        mjsdk.setLocalParams("hwmj_language", "en");
        console.log("不包含zh ",mjsdk.getLocalParams("hwmj_language"));
      }
    }
}
setSDKLanguage();

//apple凭证
window.getAppleReceipt = function(res){
  if(typeof res === 'string'){
    var appleRes = JSON.parse(res)
  }else{
    var appleRes = res
  }
  mjsdk.sendAppleReceipt(appleRes);
}

// google凭证
window.getGoogleReceipt = function(res){
  console.log(res)
  if(typeof res === 'string'){
    var googleRes = JSON.parse(res)
  }else{
    var googleRes = res
  }
  mjsdk.sendGoogleReceipt(googleRes);
}

// AF上报
window.afReport = function(eventName,data){
  var sendData = {
    "eventName" : eventName,
    "data" : data
  }

  mjsdk.sendAfReport(sendData);
}

window.getNativeAFID = function(res){
  console.log(res)
  window.localStorage.setItem('af_id',res)
  if (res !== '' && res !== null && res !== undefined) {
    eventInfo(res);
  }
}

window.eventInfo = function(af_id){
  var event_arr = ['start_loading','load_completed','create_role','enter_game','tutorial_complete','inpurchase_checkout','buy_firstto','buy_monthcard','level18_achieved','level20_achieved','level30_achieved','vip_level5','vip_level6','vip_level8','vip_level10','vip_level11','vip_level12','vip_level13','vip_level14','vip_level15','buy_weekcard','buy_fund','d2Retention','d3Retention','d7Retention','join_gulid','stage1_complete','custom_help'];
  $.each(event_arr,function(n,value){
    var param = window.localStorage.getItem(value)
    if (param !== '' && param !== null && param !== undefined && param !== 'null') {
      var data = {'game_id':getParam('g'),'device':getParam('dd'),'af_id':af_id};
      window.localStorage.removeItem(param);
      console.log(data)
      afReport(param,data)
    }
  });
}

window.addEventListener('message', function (event) {
  // console.log('收到数据:');  // console.log(event.data);
  var action = event && event.data && event.data.action ? event.data.action : false;
  var data = event && event.data && event.data.data ? event.data.data : {};

  switch (action) {
    case "mjrole":
      console.log("mj角色上报");
      mjsdk.roleAction(data)
      break;
    case "mjlogin":
      console.log("mj登陆");
      mjsdk.init({});
      break;
    case "mjlogout":
      console.log("mj退出");
      mjsdk.logoutFromGame();
      break;
    case "mjpay":
      console.log("mj支付");
      mjsdk.openPay(data)
      break;
    case "mjafreport":
      console.log("af上报");
      mjsdk.sendAfReport(data)
      break;
    case "mjreport":
      console.log("上报");
      mjsdk.sendReport(data)
      break;
    case "mjopenservice":
      console.log("mj open service");
      mjsdk.sendOpenServiceAction(data)
      break;
    case "mjenter":
      console.log("mj进入游戏");
      mjsdk.hideBuoy()
      break;
    case "mjfbreport":
      console.log("fb上报");
      fb_sdk.reportEvent(data)
      break;
    case "mjgetSDKLanguage":
      console.log("sdk语言");
      mjsdk.getSDKLanguage();
      break;
    default:
      break;
  }
})

