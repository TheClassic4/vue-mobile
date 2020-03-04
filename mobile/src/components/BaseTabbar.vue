<template>
  <div class="baseTabbar">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="bars">概况</van-tabbar-item>
      <van-tabbar-item replace to="/projectStrategy" icon="label">项目/战略</van-tabbar-item>
      <van-tabbar-item replace to="/product" icon="bag">产品</van-tabbar-item>
      <van-tabbar-item replace to="/financialStaff" icon="friends">财务/员工</van-tabbar-item>
    </van-tabbar>
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
.van-tabbar {
  height: 74px;
  box-shadow: 0px -10px 18px rgba(74, 98, 231, 0.15);
  .van-tabbar-item {
    color: #b5c5d6;
  }
  .van-tabbar-item--active {
    color: #4e4667;
  }
  .van-icon {
    font-size: 24px;
  }
}
</style>
