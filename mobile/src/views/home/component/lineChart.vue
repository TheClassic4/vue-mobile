<template>
  <div class="BasePie">
    <div id="myCharts" ref="myCharts"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data (){
    return {};
  },
  props: {
    lineData: Array,
    default() {
      return [];
    }
  },
  mounted() {
    this.getChart();
  },
  watch: {
    lineData() {
      this.getChart();
    }
  },
  methods: {
    getChart() {
      const myCharts = echarts.init(this.$refs.myCharts);
      let options = {
        grid: {
          x: "2%", //左侧与y轴的距离
          y: "5%", //top部与x轴的距离
          x2: "2%", //右侧与y轴的距离
          y2: "44px;", //bottom部与x轴的距离
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisLine: {
            lineStyle: {
              color: "rgba(143, 143, 143, 1)", // 颜色
              width: 1 // 粗细
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(143, 143, 143, 1)" //坐标值得具体的颜色
            },
            fontSize: 9
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "rgba(143, 143, 143, 1)"
            },
            fontSize: 9
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          }
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "rgba(0,0,0,0)" // 阴影颜色
            }
          },
          textStyle: {
            color: "rgba(78, 70, 103, 1)",

            fontSize: 10
          },
          formatter: function(param) {
            return `${param[0].name}: ${param[0].value}万元`;
          },
          extraCssText:
            "background:white;padding:4px 9px;box-shadow: 0px 4px 18px 0px rgba(74, 98, 231, 0.15)"
        },
        series: [
          {
            data: this.lineData,
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 6, //折线点的大小
            itemStyle: {
              normal: {
                borderWidth: 4,
                borderColor: "#fff",
                color: "rgba(90, 178, 245, 1)", //折线点的颜色
                lineStyle: {
                  width: 2, //连线粗细
                  color: "rgba(90, 178, 245, 1)" //连线颜色
                }
              }
            },
            //线条样式
            areaStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(101, 198, 242, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(189, 238, 255, 0)"
                  }
                ])
              }
            } //区域颜色渐变
          }
        ]
      };
      myCharts.setOption(options);
    }
  }    
};
</script>
<style lang="less" scoped>
#myCharts {
  height: 300px;
  width: 100%;
}
</style>