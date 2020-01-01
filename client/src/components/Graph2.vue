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
    source:""
  },
  data() {
    return {
      sqlData: null
    };
  },
  mounted() {
    this.drawGraph(this.$refs.graph);
      // this.$http.get(`graph2`).then(response => {
    //   this.sqlData = response.data;
    // });
  },

  watch: {
    data: function(newValue, oldValue) {
      const self = this
      self.data = newValue
      // debugger
      this.source = self.process(self.data)
      // this.d = self.process(self.data)
    }

  },
  methods: {
    process: function(data) {
      let s = [];
      let data_Dept = _.groupBy(data,'Dept');
      let depts = _.keys(data_Dept);
      //提取日期
      let days = _.keys(_.groupBy(_.groupBy(data,'Dept')['第一食堂'], 'day'));
      //插入第一个关键字后为数组1
      days = days.splice(0,0,'Deps');
      let data_Dept_days1 = _.groupBy(data_Dept.第一食堂,'day')
      let data_Dept_days2 = _.groupBy(data_Dept.第二食堂,'day')
      let data_Dept_days3 = _.groupBy(data_Dept.第三食堂,'day')
      let data_Dept_days4 = _.groupBy(data_Dept.第四食堂,'day')
      let data_Dept_days5 = _.groupBy(data_Dept.第五食堂,'day')
      let data_Dept_days6 = _.groupBy(data_Dept.好利来食品店,'day')
      let data_Dept_days7 = _.groupBy(data_Dept.红太阳超市,'day')

    },
    drawGraph(el) {
      // Graph 2
      let myChart = echarts.init(el);

      // 指定图表的配置项和数据
      let option = {
          title: {
              text: '折线图堆叠'
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
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
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
