<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph4",
  props: {
    data: "",
    week: ""
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
      const self = this
      let week = self.week
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

      let source = {
        'week1':[
          ['Dept', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          ["第一食堂",3610.25,3034.15,3752.2,3836.11,5964.35,4589.23,3522.16],
          ["第二食堂",6976.97,6784.28,7926.09,7666.09,1285.7],
          ["第三食堂",5061.51,4907.86,4983.7,5059.2,3712.8,3345.8,3697.5],
          ["第四食堂",8300.5,10550.5,9309.5,10394,1849],
          ["第五食堂",7531.9,7753.65,8336.1,7608.3,1132.8]
        ],
        'week2':[
          ['Dept', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          ["第一食堂",3383.9,3832.1,3968.2,2999.36,1973.79,1502,1300.8],
          ["第二食堂",9141.43,8589.85,9038.4,8002.3,8850.42,4424.6,3952.2],
          ["第三食堂",5385.49,5229.75,5396.8,5222.4,5706.5,2384.2,2707.2],
          ["第四食堂",10713.5,10648.5,10618,10308.5,8969,4830.5,5422.5],
          ["第五食堂",8870.84,8601.6,8056.15,7426.16,7233.1,3659.26,4123.3]
        ],
        'week3':[
          ['Dept', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          ["第一食堂",3070.71,3280.65,3171.3,2726.6,2224.6,1088.5,1228.1],
          ["第二食堂",7826.36,7915.6,10867.9,6712.4,7993.09,4367.27,4055.49],
          ["第三食堂",5128.2,5244.7,6065.3,5288.66,4866.9,2883.3,3325.3],
          ["第四食堂",10272,10683,9091.5,10295,8128.5,5320,5295.5],
          ["第五食堂",8068.15,8255.7,7720.4,6507,6727.8,4094.1,3391]
        ],
        'week4':[
          ['Dept', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          ["第一食堂",2677.15,3320.6,2890,2603.8,1851.1],
          ["第二食堂",8865.2,8376.05,8319.9,7450.89,7787.29,5829.85],
          ["第三食堂",5513.1,5477.3,4972.59,5537.25,3844.8],
          ["第四食堂",9183,10189,9095.9,9053.5,7385.5],
          ["第五食堂",7692.68,6921.8,7162.7,6492.54,5316.89,1875]
        ],
        'week5':[
          ['Dept', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          ["第一食堂",1934.9,2168],
          ["第二食堂",4985.8,4942.52],
          ["第三食堂",3340.1,3635.5],
          ["第四食堂",6206,6596.5],
          ["第五食堂",4727.4,4784]
        ]
      }
      let option = {
          legend: {},
          tooltip: {},
          dataset: {
              source: source[week]
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
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              // These series are in the second grid.
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
          ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  watch: {
    data: function(newValue, oldValue) {
      const self = this
      self.drawGraph(self.$refs.graph);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
