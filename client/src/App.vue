<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="height:20px;" />
    <br />
    <Graph1 :date="this.date" style="width: 33%;height:300px;float:left" />
    <Graph2 :date="this.date" style="width: 33%;height:300px;float:left" />
    <Graph3 :date="this.date" style="width: 33%;height:300px;float:left" />
    <Graph4 :date="this.date" style="width: 100%;height:500px;margin-top:50px;float:left" />
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
      date: "10月1日"
    };
  },
  components: {
    Graph1,
    Graph2,
    Graph3,
    Graph4
  },
  mounted() {
    this.$http.get(`graph1`).then(response => {
      this.info = response.data;
    });
  },
  watch: {
    // date: function (val) {
    //   this.major_list = _.mapValues(val, 'Address')
    //   this.m = _.countBy(this.major_list)
    // }
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
</style>
