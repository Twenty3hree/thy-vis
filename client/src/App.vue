<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="height:20px;" />
    <button @click="week='week1'">Week1</button>
    <button @click="week='week2'">Week2</button>
    <button @click="week='week3'">Week3</button>
    <button @click="week='week4'">Week4</button>
    <button @click="week='week5'">Week5</button>
    <br />
    <Graph1 :data="this.data" style="width: 33%;height:300px;float:left" />
    <Graph2 :data="this.data" style="width: 33%;height:300px;float:left" />
    <Graph3 :data="this.data" style="width: 33%;height:300px;float:left" />
    <Graph4 :data="this.data" style="width: 100%;height:500px;margin-top:50px;float:left" />
  </div>
</template>

<script>
// import axios from 'axios'
import echarts from "echarts";
// import _ from 'lodash'
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import Graph3 from "./components/Graph3";
import Graph4 from "./components/Graph4";

export default {
  name: "app",
  data() {
    return {
      week: 'week1',
      data: ''
    };
  },
  components: {
    Graph1,
    Graph2,
    Graph3,
    Graph4
  },
  methods: {
    getData: function(week) {
        this.$http.get(`${week}`).then(response => {
        this.data = response.data;
      });
    }
  },
  created() {
    this.getData(this.week)
  },
  watch: {  
    week: function (newValue,oldValue) {
      if(newValue != oldValue)
        this.getData(newValue)
      // this.major_list = _.mapValues(val, 'Address')
      // this.m = _.countBy(this.major_list)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-left: 15px;
}
</style>
