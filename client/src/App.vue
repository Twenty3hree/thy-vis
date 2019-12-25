<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="height:20px;">
    <br>
    <div id="graph-1" style="width: 33%;height:300px;float:left"></div>
    <div id="graph-2" style="width: 33%;height:300px;float:left"></div>
    <div id="graph-3" style="width: 33%;height:300px;float:left"></div>
    <div id="graph-4" style="width: 100%;height:500px;margin-top:50px;float:left"></div>
    <!-- <h1>{{info}}</h1> -->
  </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import _ from 'lodash'
import drawGraph1 from './utils/drawGraph1'
import drawGraph2 from './utils/drawGraph2'
import drawGraph3 from './utils/drawGraph3'
import drawGraph4 from './utils/drawGraph4'

export default {
  name: 'app',
  data() {
    return {
      info:"",
      major_list: [],
      m: []
    }
  },
  mounted() {
    let sql = `select * from data1`
    axios.get(`/api/query?sql=${sql}`)
    .then(response => (
        this.info = response.data
    ))
    drawGraph1(document.getElementById('graph-1'))
    drawGraph2(document.getElementById('graph-2'))
    drawGraph3(document.getElementById('graph-3'))
    drawGraph4(document.getElementById('graph-4'))

  },
  watch: {
      info: function (val) {
        this.major_list = _.mapValues(val, 'Address')
        this.m = _.countBy(this.major_list)
      }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
