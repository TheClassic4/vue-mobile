<template>
  <div class="baseTabbar">
    <div class="gap"></div>
    <div class="footer">
      <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="bars"></van-tabbar-item>
        <van-tabbar-item replace to="/projectStrategy" icon="label"></van-tabbar-item>
        <van-tabbar-item replace to="/product" icon="bag"></van-tabbar-item>
        <van-tabbar-item replace to="/financialStaff" icon="friends"></van-tabbar-item>
      </van-tabbar>
    </div>  
  </div>

</template>

<script>
export default {
  name: "baseTabbar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.baseTabbar {
  .gap {
    // 由于底部tabbar遮挡了一部份高度，所以增加gap来显示被遮住的部分。env(safe-area-inset-bottom)用来适配ipx
    height: calc(65px + env(safe-area-inset-bottom));
    height: calc(65px + constant(safe-area-inset-bottom));
  }
  .footer {
    .van-tabbar {
      background: #fff;
      box-sizing: content-box;
      height: 65px;
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
      box-shadow: 0px -10px 18px rgba(74, 98, 231, 0.15);
      .iconfont {
        font-size: 24px;
      }
    }
  }
}
</style>
