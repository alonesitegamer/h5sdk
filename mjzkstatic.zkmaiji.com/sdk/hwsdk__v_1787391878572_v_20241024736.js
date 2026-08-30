var MJSYSDK = (function(window){

    var callbacks = {};
    var protocol = 'mjsdkapi://';
    var makeParam = function(data){
        var string = '';
        for(var key in data){
            string += key + '=' + data[key] + '&';
        }
        return string.substring(0,string.length-1);
    };

    window.loginRespond = function(state,uid,code,msg){
        if(state === '1'){
            callbacks['login'](1,{uid:uid,code:code},'');
        }else{
            callbacks['login'](0,{},msg);
        }
    };

    window.enterRespond = function(state){
        callbacks['enter'](state);
    };

    window.logoutRespond = function(state){
        callbacks['logout'](state);
    };

    function postTopMessage(a,d){
        var o = {
            action: a,
            data: d = d || {}
        };
        parent.postMessage(o, "*")
    }

    function getParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

    var isH5 = false;
    console.log(getParam('zzh5'))
    isH5 = getParam('zzh5') == '1' ? true : false;

    window.addEventListener("message", function(t) {
        // console.log(t);
        var a = !!(t && t.data && t.data.action) && t.data.action
            , s = t && t.data && t.data.data ? t.data.data : {};
        switch (a) {
            case "mjlogin":
                window.loginRespond(s.state?"1":"0",s.data.uid,s.data.code,s.msg)
                break;
            case "mjlogout":
                window.logoutRespond(1)
                break;
            case "mjloginRespond":
                console.log('loginRespond')
                window.loginRespond(s.state?"1":"0",s.uid,s.code,s.msg)
                break;
            case "mjlogoutRespond":
                console.log('logoutRespond')
                window.logoutRespond(1)
                break;
            case "mjenter":
                window.enterRespond(1)
                break;
        }
    });

    return {
        login:function(callback){
            callbacks['login'] = (typeof callback === 'function') ? callback : null;
            if(isH5){
                postTopMessage("mjlogin")
            }else{
                location.href = protocol + 'login';
            }
        },
        logout:function(callback){
            callbacks['logout'] = (typeof callback === 'function') ? callback : null;
            if(isH5){
                postTopMessage("mjlogout")
            }else{
                location.href = protocol + 'logout';
            }
        },
        role:function(data){
            if(isH5){
                postTopMessage("mjrole",data)
            }else{
                location.href = protocol + 'role?' + makeParam(data);
            }
        },
        pay:function(data){
            if(isH5){
                postTopMessage("mjpay",data)
            }else{
                location.href = protocol + 'pay?' + makeParam(data);
            }
        },
        afReport:function(data){
            if(isH5){
                postTopMessage("mjafreport",data)
            }else{
                location.href = protocol + 'afReport?' + makeParam(data);
            }
        },
        openService:function(data){
            if(isH5){
                postTopMessage("mjopenservice",data)
            }else{
                location.href = protocol + 'openService?' + makeParam(data);
            }
        },
        enter:function(callback){
            callbacks['enter'] = (typeof callback === 'function') ? callback : null;
            if(isH5){
                postTopMessage("mjenter")
            }else{
                location.href = protocol + 'enter';
            }
        },
    }
})(window);