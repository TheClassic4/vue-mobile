<template>
  <div class="BaseCollapse">
    <div class="content">
      <div class="mask" v-show="activeNames==='1'" style="z-index: 2" @click="onClose"></div> 
      <van-collapse v-model="activeNames" accordion style="z-index: 3">
        <van-collapse-item name="1">
          <div slot="title">
            <p class="name">{{selectedValue}}</p>
            <p class="tip">当前所选名字，点击切换</p>
          </div>
          <ul class="namelist">
            <li v-for="(item,index) in namelist" :key="index" @click="onClick(item)">{{item}}</li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="gap"></div>
  </div>
</template>
<script>
import { isEmpty } from "@/helper";
export default {
  data () {
    return {
      activeNames: "0",
      selectedValue: "",
      namelist : []  
    }
  },
  mounted() {
    this.getNameInfo();
    this.selectedValue = !isEmpty(localStorage.getItem("memberName"))
      ? localStorage.getItem("memberName")
      : "";
  },
  watch: {
    activeNames(newFlag, oldFlag) {
      newFlag === "1"
        ? document
            .querySelector("body")
            .setAttribute("style", "overflow: hidden;")
        : document.querySelector("body").removeAttribute("style")
    }
  },
  methods: {
    getNameInfo() {
      this.namelist.push("mina", "chaeyoung" ,"momo", "nayeon");
      //set了memberName初始值,页面其它地方的接口通过获取localStorage.getItem获取参数
      localStorage.setItem("memberName", this.namelist[0]);
    },
    onClose() {
      this.activeNames = "0";
    },
    onClick(record) {
      this.selectedValue = record;
      this.activeNames = "0"
      localStorage.setItem("memberName", record);
    }
  }   
}
</script>
<style lang="less" scoped>
.content {
    //相对于浏览器窗口进行绝对定位，因为是公共的头部栏所以用fixed
    position: fixed;
    width: 100%;
    z-index: 3;
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 2;
    }
    .van-collapse {
      /deep/.van-collapse-item__content {
        padding: 0;
      }
      /deep/.van-cell--clickable {
        padding: 12px 18px;
      }
      /deep/.van-cell__right-icon {
        width: 27px;
        height: 27px;
        background: #e2ecf5;
        text-align: center;
        border-radius: 27px;
        line-height: 27px;
        margin: 0;
        color: #4a63e7;
      }
  }
  .namelist {
    li {
      &:hover {
        background: rgba(74, 98, 231, 0.15);
        color: rgba(74, 94, 231, 1);
        font-weight: 400;
      }
      &:first-child {
        //第一个子元素上方产生阴影
        box-shadow: 0px 5px 5px rgba(74, 98, 231, 0.15) inset;
      }
      color: #4e4667;
      height: 40px;
      font-size: 16px;
      padding: 8px 18px 10px;
    }
  }
  .name {
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    line-height: 25px;
  }
  .tip {
    height: 13px;
    font-size: 9px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(143, 143, 143, 1);
    line-height: 13px;
  }
}
.gap {
  height: 76px;
}
</style>
