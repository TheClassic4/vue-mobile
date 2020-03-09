<template>
  <div class="home">
    <base-collapse/>
    <base-tabbar/>
  </div>
</template>

<script>
  import BaseTabbar from "@/components/BaseTabbar";
  import BaseCollapse from "@/components/BaseCollapse";
  export default {
    name: 'home',
    data () {
      return {
       
      };
    },
    components: {BaseTabbar, BaseCollapse},
    methods: {
      
    }
  };
</script>

<style lang="less" scoped>
</style>
