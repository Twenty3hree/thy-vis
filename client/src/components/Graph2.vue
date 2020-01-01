<template>
  <div ref="graph"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  name: "Graph2",
  props: {
    data: "",
    //将最终的数据存在source中
    week: "",
    dept: ""
  },
  data() {
    return {
      sqlData: null
    };
  },
  mounted() {
    // this.drawGraph(this.$refs.graph);
      // this.$http.get(`graph2`).then(response => {
    //   this.sqlData = response.data;
    // });
  },

  watch: {
    data: function(newValue, oldValue) {
      const self = this
      self.drawGraph(self.$refs.graph);
    },
    dept: function(newValue, oldValue) {
      const self = this
      self.drawGraph(self.$refs.graph);
    },
  },
  methods: {
    drawGraph(el) {
      const self = this
      // Graph 2
      let myChart = echarts.init(el);

      let week = self.week
      let dept = self.dept

      let data = {
        'week1': {
          '一食堂':[{name:'男',type:'line',data:[0.11, 0.08, 0.11, 0.11, 0.71, 0.69, 0.44]},
                   {name:'女',type:'line',data:[0.1, 0.09, 0.08, 0.1, 0.64, 0.55, 0.3]   }],
          '二食堂':[{name:'男',type:'line',data:[0.21, 0.22, 0.27, 0.23, 0.29, 0.31, 0.1] },
                   {name:'女',type:'line',data:[0.25, 0.22, 0.25, 0.21, 0.36, 0.45, 0.12]}],
          '三食堂':[{name:'男',type:'line',data:[0.15, 0.16, 0.14, 0.15, 0, 0, 0.26]      },
                   {name:'女',type:'line',data:[0.15, 0.15, 0.14, 0.14, 0, 0, 0.37]      }],
          '四食堂':[{name:'男',type:'line',data:[0.35, 0.38, 0.3, 0.36, 0, 0, 0.15]       },
                   {name:'女',type:'line',data:[0.19, 0.23, 0.18, 0.25, 0, 0, 0.06]      }],
          '五食堂':[{name:'男',type:'line',data:[0.18, 0.16, 0.18, 0.15, 0, 0, 0.05]      },
                   {name:'女',type:'line',data:[0.31, 0.31, 0.34, 0.29, 0, 0, 0.15]      }]
        },
        'week2':{
          '一食堂':[{name:'男',type:'line',data:[0.09, 0.08, 0.11, 0.1, 0.06, 0.07, 0.06]  },
                   {name:'女',type:'line',data:[0.06, 0.09, 0.09, 0.08, 0.06, 0.07, 0.06] }],
          '二食堂':[{name:'男',type:'line',data:[0.24, 0.22, 0.25, 0.23, 0.32, 0.34, 0.29] },
                   {name:'女',type:'line',data:[0.27, 0.21, 0.25, 0.23, 0.27, 0.28, 0.23] }],
          '三食堂':[{name:'男',type:'line',data:[0.15, 0.12, 0.15, 0.16, 0.15, 0.11, 0.13] },
                   {name:'女',type:'line',data:[0.15, 0.16, 0.18, 0.16, 0.16, 0.15, 0.17] }],
          '四食堂':[{name:'男',type:'line',data:[0.34, 0.39, 0.33, 0.35, 0.32, 0.31, 0.34] },
                   {name:'女',type:'line',data:[0.21, 0.22, 0.2, 0.24, 0.2, 0.16, 0.19]   }],
          '五食堂':[{name:'男',type:'line',data:[0.17, 0.18, 0.16, 0.16, 0.16, 0.18, 0.18] },
                   {name:'女',type:'line',data:[0.31, 0.32, 0.32, 0.3, 0.3, 0.34, 0.34]   }]
        },
        'week3':{
          '一食堂':[{name:'男',type:'line',data:[0.08, 0.08, 0.08, 0.08, 0.07, 0.05, 0.08]},
                   {name:'女',type:'line',data:[0.09, 0.08, 0.07, 0.09, 0.05, 0.04, 0.06]}],
          '二食堂':[{name:'男',type:'line',data:[0.24, 0.26, 0.33, 0.23, 0.33, 0.3, 0.31] },
                   {name:'女',type:'line',data:[0.22, 0.25, 0.33, 0.22, 0.29, 0.27, 0.23]}],
          '三食堂':[{name:'男',type:'line',data:[0.14, 0.13, 0.11, 0.14, 0.16, 0.11, 0.13]},
                   {name:'女',type:'line',data:[0.15, 0.17, 0.17, 0.17, 0.17, 0.19, 0.21]}],
          '四食堂':[{name:'男',type:'line',data:[0.36, 0.35, 0.29, 0.38, 0.29, 0.35, 0.34]},
                   {name:'女',type:'line',data:[0.23, 0.2, 0.15, 0.25, 0.18, 0.18, 0.17] }],
          '五食堂':[{name:'男',type:'line',data:[0.18, 0.18, 0.19, 0.17, 0.15, 0.19, 0.14]},
                   {name:'女',type:'line',data:[0.31, 0.31, 0.35, 0.28, 0.31, 0.32, 0.32]}]
        },
        'week4':{
          '一食堂':[{name:'男',type:'line',data:[0.07, 0.09, 0.07, 0.07, 0.07, 0.79, 0]},
                   {name:'女',type:'line',data:[0.08, 0.09, 0.09, 0.07, 0.05, 0.56, 0]}],
          '二食堂':[{name:'男',type:'line',data:[0.3, 0.27, 0.31, 0.26, 0.33, 0.21, 0] },
                   {name:'女',type:'line',data:[0.27, 0.23, 0.25, 0.24, 0.31, 0.44, 0]}],
          '三食堂':[{name:'男',type:'line',data:[0.15, 0.14, 0.14, 0.17, 0.12, 0, 0]   },
                   {name:'女',type:'line',data:[0.17, 0.18, 0.17, 0.18, 0.17, 0, 0]   }],
          '四食堂':[{name:'男',type:'line',data:[0.31, 0.35, 0.33, 0.36, 0.32, 0, 0]   },
                   {name:'女',type:'line',data:[0.17, 0.22, 0.21, 0.22, 0.19, 0, 0]   }],
          '五食堂':[{name:'男',type:'line',data:[0.17, 0.15, 0.14, 0.14, 0.16, 0, 0]   },
                   {name:'女',type:'line',data:[0.31, 0.28, 0.31, 0.29, 0.28, 0, 0]   }]
        },
        'week5':{
          '一食堂':[{name:'男',type:'line',data:[0.09, 0.08]},
                   {name:'女',type:'line',data:[0.07, 0.09]}],
          '二食堂':[{name:'男',type:'line',data:[0.33, 0.26]},
                   {name:'女',type:'line',data:[0.28, 0.24]}],
          '三食堂':[{name:'男',type:'line',data:[0.14, 0.14]},
                   {name:'女',type:'line',data:[0.17, 0.19]}],
          '四食堂':[{name:'男',type:'line',data:[0.28, 0.36]},
                   {name:'女',type:'line',data:[0.17, 0.18]}],
          '五食堂':[{name:'男',type:'line',data:[0.16, 0.16]},
                   {name:'女',type:'line',data:[0.31, 0.3]}]
        },
      }

      // 指定图表的配置项和数据
      let option = {
          title: {
              text: dept + '男女分别到场比例'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value',
              max: 1,
              interval: 0.2
          },
          series: data[week][dept]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.onresize = function(){
        myChart.resize();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
