<template>
  <div id="g1" class="g1" ref="graph"></div>
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
      maleObj: {},
      femaleObj: {},
      maleArr: [],
      femaleArr: [],
      arr: [],
      revenue: []
    };
  },
  mounted() {
    // this.process()
    // this.drawGraph(this.$refs.graph);
    // this.$http.get(`graph1`).then(response => {
    //   this.sqlData = response.data;
    // });
  },
  created() {
    // this.process()
  },
  methods: {
    // process(data) {
    //   const self = this
    //   let deptData = _.groupBy(data,'Dept')
    //   _.forEach(deptData,function(value) {
    //     let a = _.countBy(_.uniqBy(value, 'expendId'),'Sex')
    //     let b = a['男']
    //     self.maleArray.push(b)
    //   })
    // },
    drawGraph: function(el) {
      // Graph 1 各食堂消费人数(分男女)
      let myChart = echarts.init(el);
      let maleArr = this.maleArr
      let femaleArr = this.femaleArr
      let revenue = this.revenue
      // 指定图表的配置项和数据
      let option = {
        title:{
          text:"男女消费统计",
          x:"center",
          y: 'top',
          textStyle: {
            fontSize: 14,
            color: '#747779'
          }
        },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          legend: {
              data:['男','女','人均消费'],
              x: "center",
              top: 25,
          },
          xAxis: [
              {
                  type: 'category',
                  data: ['第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','好利来食品店','红太阳超市'],
                  axisLabel:{
                  interval:0,
                  rotate:30,
                  splitLine:false,
                  textStyle:{
                    fontSize:10,
                    color:"#000"
                  }
                },
                axisTick:{
                  show:false
                }
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '流量/人',
                  min: 0,
                  max: Math.max(...maleArr,...femaleArr) > 2000 ? 8000 : 2000,
                  interval: Math.max(...maleArr,...femaleArr) > 2000 ? 1600 : 400,
                  axisLabel: {
                      formatter: '{value}'
                  },
                axisTick:{
                  show:false
                }
              },
              {
                  type: 'value',
                  name: '人均消费/元',
                  min: 0,
                  max: 10,
                  interval: 2,
                  axisLabel: {
                      formatter: '{value}'
                  },
                axisTick:{
                  show:false
                }
              }
          ],
          series: [
              {
                  name:'男',
                  type:'bar',
                  data: maleArr,
                  color:'#669999'
              },
              {
                  name:'女',
                  type:'bar',
                  data:femaleArr,
                  color:'#D87C7C'
              },
              {
                  name:'人均消费',
                  type:'line',
                  yAxisIndex: 1,
                  data:revenue,
                  color:'#D53A35'
              }
          ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.onresize = function(){
        myChart.resize();
      }
    }
  },
  watch: {
    data: function(newValue, oldValue) {
      const self = this
      self.data = newValue
      _.forEach(newValue, function(object) {
        let time = new Date(object.Date)
        let day = time.getDate()
        let timeInDay
        if(time.getHours()<9)
            timeInDay = 'breakfast'
        else if(time.getHours()<15)
            timeInDay = 'lunch'
        else if(time.getHours()<24)
            timeInDay = 'dinner'
        object.day = day
        object.expendId = object.CardNo + timeInDay + day
        // object.dayId = object.CardNo + day
        // if(object.Dept=='第一食堂')
        //   object.d = 1
        // if(object.Dept=='第二食堂')
        //   object.d = 2
        // if(object.Dept=='第三食堂')
        //   object.d = 3
        // if(object.Dept=='第四食堂')
        //   object.d = 4
        // if(object.Dept=='第五食堂')
        //   object.d = 5
      })

      self.maleObj = {}
      self.femaleObj =  {}
      let deptData = _.groupBy(newValue,'Dept')
      _.forEach(deptData, function(value,key) {
        self.maleObj[key] = _.countBy(_.uniqBy(value, 'expendId'),'Sex')['男']
        self.femaleObj[key] = _.countBy(_.uniqBy(value, 'expendId'),'Sex')['女']
        // self.maleArray.push(_.countBy(_.uniqBy(value, 'expendId'),'Sex')['男'])
        // self.femaleArray.push(_.countBy(_.uniqBy(value, 'expendId'),'Sex')['女'])
      })
      self.maleArr = []
      self.femaleArr = []
      self.maleArr.push(self.maleObj['第一食堂'])
      self.maleArr.push(self.maleObj['第二食堂'])
      self.maleArr.push(self.maleObj['第三食堂'])
      self.maleArr.push(self.maleObj['第四食堂'])
      self.maleArr.push(self.maleObj['第五食堂'])
      self.maleArr.push(self.maleObj['好利来食品店'])
      self.maleArr.push(self.maleObj['红太阳超市'])
      self.femaleArr.push(self.femaleObj['第一食堂'])
      self.femaleArr.push(self.femaleObj['第二食堂'])
      self.femaleArr.push(self.femaleObj['第三食堂'])
      self.femaleArr.push(self.femaleObj['第四食堂'])
      self.femaleArr.push(self.femaleObj['第五食堂'])
      self.femaleArr.push(self.femaleObj['好利来食品店'])
      self.femaleArr.push(self.femaleObj['红太阳超市'])

      self.arr = [0,0,0,0,0,0,0].map(function(value, index){
        return self.maleArr[index] + self.femaleArr[index]
      })
      let m = {
        '第一食堂': 0,
        '第二食堂': 0,
        '第三食堂': 0,
        '第四食堂': 0,
        '第五食堂': 0,
        '好利来食品店': 0,
        '红太阳超市': 0,
      }
      _.forEach(self.data,function(value) {
          let str = value.Dept
          m[str]+=parseInt(value['Money'])
      })
      let revenue = _.flatMap(m)
      self.revenue = _.map(revenue, function(value,index) {
        value /= self.arr[index]
        return value.toFixed(2)
      })
      self.drawGraph(self.$refs.graph);
    }
  },
};
// var myChartx = echarts.init(document.getElementById('g1'));
// $('.g1').resize(function(){
//   myChartx.resize();
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#g1{
    /*width: 100%;*/
    /*height: 500px;*/
    /*background: #00B7FF;*/
}
</style>
