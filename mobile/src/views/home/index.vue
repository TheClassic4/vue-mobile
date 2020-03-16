<template>
  <div class="home">
    <base-collapse/>
    <div class="content">
      <div class="market">
        <p class="left-tips">专辑销售趋势</p>
        <line-chart :lineData="marketData" />
      </div>
      <div class="sales">
        <div class="flex flex_between align_center left-tips">
          <p>各地区销售额</p>
          <div>
            <button
              v-for="item in btnType"
              :key="item.value"
              :class="action === item.value? 'btn  btn-select':'btn'"
              @click="changeType(item)"
            >{{item.text}}</button>
          </div>
        </div>
        <div v-if="companySaleDatas.length>0">
          <van-row type="flex" v-for="(item, index) in companySaleDatas" :key="index">
            <van-col span="7" class="company-title">{{item.companyName}}</van-col>
            <van-col span="11">
              <Progress
                :progressType="'lineProgres'"
                :percentage="Number(item.amount)/saleTotal*100"
              />
            </van-col>
            <van-col span="6" class="company-money">{{item.amount|formatNumber}}万元</van-col>
          </van-row>
        </div>      
      </div>
    </div>
    <base-tabbar/>
  </div>
</template>

<script>
  import BaseTabbar from "@/components/BaseTabbar";
  import BaseCollapse from "@/components/BaseCollapse";
  import Progress from "@/components/Progress";
  import LineChart from "./component/lineChart";
  import { formatNumber } from "@/helper";
  export default {
    name: 'home',
    data () {
      return {
       action: 2,
       marketData: [],
       marketList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       btnType: [
         { text: "本月", value: 2 },
         { text: "本季", value: 1 },
         { text: "本年", value: 0 },        
       ],
       companySaleDatas:[],
       saleTotal:0
      };
    },
    components: {BaseTabbar, BaseCollapse, LineChart, Progress},
    mounted() {
      this.getCdSaleMonths();
      this.getCompanySaleDatas();
    },
    methods: {
      changeType(item) {
        this.action = item.value;
        this.getCompanySaleDatas();
      },
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
      },
      getCompanySaleDatas() {
        let response = [
          {
            "amount":"7920000",
            "companyName":"Mnet"
          },
          {
            "amount":"7920000",
            "companyName":"Melon"
          },
          {
            "amount":"8820000",
            "companyName":"MBC"
          },
          {
            "amount":"9540000",
            "companyName":"KBS"
          },
          {
            "amount":"7920000",
            "companyName":"Melon"
          },
          {
            "amount":"8820000",
            "companyName":"MBC"
          },
          {
            "amount":"9540000",
            "companyName":"KBS"
          },
        ];
        this.companySaleDatas = response;
        const sum = response.reduce((pre, item) => {
          return pre + Number(item.amount);
        },0);
        this.saleTotal = sum;
      }
    }
  };
</script>

<style lang="less" scoped>
@write-color-50:rgba(255, 255, 255, 0.5);
@write-color:#fff;
@write-color-purple:#4a5ee7;
.home {
  background: @write-color;
  .content {
    padding: 0 18px;
    .btn {
      padding: 3px 9px;
      border-radius: 9px;
      border: 1px solid rgba(181, 197, 214, 1);
      color: #b5c5d6;
      width: 0 4.5px;
      font-size: 10px;
      font-weight: 400;
      margin: 0 4.5px;
      background: @write-color;
    }
    .btn-select {
      border: 1px solid @write-color-purple!important;
      background: rgba(74, 94, 231, 0.15) !important;
      color: @write-color-purple;
    }
    .left-tips {
      margin-bottom: 14px;
      font-weight:500;
    }
    .market {
      height: 330px;
      width: 339px;

    }
    .sales {
      margin-bottom: 20px;
      .company-title {
        font-size:10px;
        color:#9BABBB;
        text-align: left;
        padding: 0 5px;
      }
      .company-money {
        color: @write-color-purple;
        font-size:10px;
        text-align: right;
        padding: 0 5px;
        font-weight:bold;        
      }
    }
  }
}
</style>
