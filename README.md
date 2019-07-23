# Vue.js
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
