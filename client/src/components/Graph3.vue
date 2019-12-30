<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph3",
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
    // this.$http.get(`graph3`).then(response => {
    //   this.sqlData = response.data;
    // });
  },
  methods: {
    drawGraph(el) {
      // Graph 3
      let myChart = echarts.init(el);

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "各专业此时间段消费了的比例",
          subtext: "此时间段某专业消费人次/专业总人数"
        },
        dataset: {
          source: [
            ["ratio", "type", "major"],
            [89.3, 10, "18审计"],
            [57.1, 20, "18宝玉石鉴定"],
            [74.4, 30, "18会计"],
            [50.1, 40, "18金融管理"],
            [89.7, 50, "18投资与理财"],
            [68.1, 60, "18电子商务"],
            [19.6, 70, "18工商企管"],
            [10.6, 80, "18物流管理"],
            [32.7, 90, "18连锁经营"]
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: "ratio/%" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 90,
          // Map the score column to color
          dimension: 1,
          inRange: {
            color: ["#D7DA8B", "#E15457"]
          }
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "ratio",
              // Map the "product" column to Y axis
              y: "major"
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
