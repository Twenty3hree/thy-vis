<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph2",
  props: {
    date: ""
  },
  data() {
    return {
      sqlData: null
    };
  },
  mounted() {
    this.drawGraph(this.$refs.graph);
    this.$http.get(`graph2`).then(response => {
      this.sqlData = response.data;
    });
  },
  methods: {
    drawGraph(el) {
      // Graph 2
      let myChart = echarts.init(el);

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "各专业消费人数",
          subtext: "颜色代表专业,横轴是各个消费场所"
        },
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [
          {
            type: "scatter",
            symbolSize: 30,
            data: [
              [160.0, 55.9],
              [165.1, 59.1],
              [182.9, 81.8],
              [166.4, 70.7],
              [165.1, 56.8],
              [177.8, 60.0],
              [165.1, 58.2],
              [175.3, 72.7],
              [154.9, 54.1],
              [158.8, 49.1]
            ],
            itemStyle: {
              //当前数据的样式
              normal: { color: "#556EAA" }
            }
          },
          {
            type: "scatter",
            symbolSize: 30,
            data: [
              [170.2, 55.9],
              [158.8, 55.5],
              [172.7, 69.5],
              [167.6, 76.4],
              [162.6, 61.4],
              [167.6, 65.9],
              [156.2, 58.6],
              [175.2, 66.8],
              [172.1, 56.6],
              [162.6, 58.6]
            ],
            itemStyle: {
              //当前数据的样式
              normal: { color: "red" }
            }
          },
          {
            type: "scatter",
            symbolSize: 30,
            data: [
              [167.6, 58.3],
              [165.1, 56.2],
              [160.0, 50.2],
              [170.0, 72.9],
              [157.5, 59.8],
              [167.6, 61.0],
              [160.7, 69.1],
              [163.2, 55.9],
              [152.4, 46.5],
              [157.5, 54.3]
            ],
            itemStyle: {
              //当前数据的样式
              normal: { color: "green" }
            }
          },
          {
            type: "scatter",
            symbolSize: 30,
            data: [
              [170.0, 69.4],
              [162.5, 58.2],
              [170.3, 64.8],
              [164.1, 71.6],
              [169.5, 52.8],
              [163.2, 59.8],
              [154.5, 49.0],
              [159.8, 50.0],
              [173.2, 69.2],
              [170.0, 55.9]
            ],
            itemStyle: {
              //当前数据的样式
              normal: { color: "pink" }
            }
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
