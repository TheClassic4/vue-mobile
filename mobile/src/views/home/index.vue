<template>
  <div class="home">
    <base-collapse/>
    <div class="content">
      <div class="market">
        <p class="left-tips">专辑销售趋势</p>
        <line-chart :lineData="marketData" />
      </div>
    </div>
    <base-tabbar/>
  </div>
</template>

<script>
  import BaseTabbar from "@/components/BaseTabbar";
  import BaseCollapse from "@/components/BaseCollapse";
  import LineChart from "./component/lineChart";
  export default {
    name: 'home',
    data () {
      return {
       marketData: [],
       marketList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      };
    },
    components: {BaseTabbar, BaseCollapse, LineChart},
    mounted() {
      this.getCdSaleMonths();
    },
    methods: {
      getCdSaleMonths() {
        let response = [
          {
            "amount":"560000",
            "month":"02"
          }
        ];
        //进行格式转换，转换成series中data所需要的格式
        response.forEach((item, index)=> {
          this.marketList[Number(item.month)-1] = Number(item.amount);
        })
        this.marketData = this.marketList;
      }
    }
  };
</script>

<style lang="less" scoped>
@write-color:#fff;
.home {
  background: @write-color;
  .content {
    padding: 0 18px;
    .left-tips{
      margin-bottom: 14px;
      font-weight:500;
    }
    .market {
      height: 330px;
      width: 339px;

    }
  }
}
</style>
