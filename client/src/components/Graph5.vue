<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph6",
  props: {
    data: "",
    week: "",
    dept: ""
  },
  data() {
    return {
      maleObj: {},
      femaleObj: {},
      maleArr: [],
      femaleArr: [],
      arr: [],
      revenue: [] 
    };
  },
  mounted() {
    this.drawGraph(this.$refs.graph);
    // this.$http.get(`graph6`).then(response => {
    //   this.sqlData = response.data;
    // });
  },
  methods: {
    drawGraph(el) {
      const self = this
      // Graph 5
      let myChart = echarts.init(el);
      let week = this.week
      // 指定图表的配置项和数据
      let data = [[18.78,22365,22],[49.26,18271,2222]]

      // 指定图表的配置项和数据
      let option = {
        title: {
            text: 'Dispersion of house price based on the area',
            left: 'center',
            top: 0
        },
        visualMap: {
            min: 15202,
            max: 159980,
            dimension: 1,
            orient: 'vertical',
            right: 10,
            top: 'center',
            text: ['HIGH', 'LOW'],
            calculable: true,
            inRange: {
                color: ['#f2c31a', '#24b7f2']
            }
        },
        tooltip: {
            trigger: 'item',
            
            axisPointer: {
                type: 'cross'
            },
            position: 'top',
            formatter: function (params) {
                return 'CardNo:'+ params.value[2]
            }
        },
        xAxis: [{
            type: 'value'
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'price-area',
            type: 'scatter',
            symbolSize: 5,
            // itemStyle: {
            //     normal: {
            //         borderWidth: 0.2,
            //         borderColor: '#fff'
            //     }
            // },
            data: data
        }]
      };

      myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart.on('click', function (params) {
        // 控制台打印数据的名称
        if(params.componentType =="yAxis")
          self.$emit('updateDept', params.value)
      });
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
