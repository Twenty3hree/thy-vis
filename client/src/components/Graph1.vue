<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph1",
  props: {
    data: ""
  },
  data() {
    return {
      sqlData: null
    };
  },
  mounted() {
    this.drawGraph(this.$refs.graph);
    // this.$http.get(`graph1`).then(response => {
    //   this.sqlData = response.data;
    // });
  },
  methods: {
    drawGraph(el) {
      // Graph 1 各食堂消费人数(分男女)
      let myChart = echarts.init(el);

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "各地点男女消费人次"
          // subtext: '数据来自网络'
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["男", "女"]
        },
        grid: {
          left: "3%",
          right: "10%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          name: "人次",
          type: "value"
        },
        yAxis: {
          type: "category",
          data: [
            "第一食堂",
            "第二食堂",
            "第三食堂",
            "第四食堂",
            "第五食堂",
            "好利来食品店",
            "红太阳超市"
          ]
        },
        series: [
          {
            name: "男",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: "女",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
