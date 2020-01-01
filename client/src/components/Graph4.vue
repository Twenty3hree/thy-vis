<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph4",
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
    // this.$http.get(`graph4`).then(response => {
    //   this.sqlData = response.data;
    // });
  },
  methods: {
    drawGraph(el) {
      // Graph 4
      let myChart = echarts.init(el);

      // 指定图表的配置项和数据
      var base = +new Date(2019, 12, 24);
      var oneDay = 24 * 3600 * 1000;
      var valueBase = Math.random() * 100;
      var valueBase2 = Math.random() * 50;
      var data = [];
      var data2 = [];

      for (var i = 1; i < 10; i++) {
        var now = new Date((base += oneDay));
        var dayStr = [
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate()
        ].join("-");

        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
        valueBase <= 0 && (valueBase = Math.random() * 300);
        data.push([dayStr, valueBase]);

        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
        data2.push([dayStr, valueBase2]);
      }

      let option = {
          legend: {},
          tooltip: {},
          dataset: {
              source: [
                  ['product', '2012', '2013', '2014', '2015'],
                  ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                  ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                  ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
              ]
          },
          xAxis: [
              {type: 'category', gridIndex: 0},
              {type: 'category', gridIndex: 1}
          ],
          yAxis: [
              {gridIndex: 0},
              {gridIndex: 1}
          ],
          grid: [
              {bottom: '55%'},
              {top: '55%'}
          ],
          series: [
              // These series are in the first grid.
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              // These series are in the second grid.
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
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
