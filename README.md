# Vue.js
### vue项目proxyTable配置
在localhost环境下跑项目时，接口地址是 http://xxxx.com/save/index 这样的接口地址，我们这样直接使用会存在跨域的请求，导致接口请求不成功，我们进入 config/index.js代码下如下配置即可  
下面的代码就是将本地的8080的端口代理到www.abc.com上，即写api就会直接访问 http://www.abc.com
```
dev: {
//  env: require('./dev.env'),
//  port: 8080,
//  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api': {
      target: 'http://www.abc.com',  //目标接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/api'   //重写接口
      }
    },
  cssSourceMap: false
}
```


```
<template>
  <div>
    <p>token信息：{{utoken}}</p>  
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  export default {
    name : "xxxx",
    data() {
      return{
        utoken:""; //url中携带的token
      }
    }，
    created() {
      this.utoken = this.GetQueryString("token");
      // 如果获取到了token值
      if (this.utoken) {
        var _this = this;
        var storage = window.localStorage;
      // 如果有则显示
        _this.token = storage.token ? storage.token : "";
        axios({
          method: "get",
          url: "",
          params:{
            token:_this.utoken
          }
        }).then(function (res) {
        var url = res.data ? res.data.url : "";
        window.location.href =url;
        }).
        catch(function (err) {
          console.log(err);
        })
      }
    }
    methods: {
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
      var startPos = document.location.toString().indexOf("?");
      var tempLocation = document.location
        .toString()
        .substring(starPos, document.location.toString().length);
        var str = window.decodeURL(tempLocation);
        var r = str.substr(1).match(reg):
        if (r!=null) {
          return unescape(r[2]);
        }
        return null;
    },
    
    }
  }
</script>
```
