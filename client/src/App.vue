<template>
  <div id="app" class="app">
    <div id="top">
      <div id="top_1">
        <Graph1 :data="this.data" :week="this.week" style="width: 100%;height:22em;" />
      </div>
      <div id="top_2">
        <div class="box" >
            <div class="topTit" >一卡通数据可视化系统</div>
            <div id="lineStyle"></div>
            <button @click="week='week1'" class="btn btn-outline-info btn-sm">1st week</button>
            <button @click="week='week2'" class="btn btn-outline-info btn-sm">2nd week</button>
            <button @click="week='week3'" class="btn btn-outline-info btn-sm">3rd week</button>
            <button @click="week='week4'" class="btn btn-outline-info btn-sm">4th week</button>
            <button @click="week='week5'" class="btn btn-outline-info btn-sm">5th week</button>
        </div>
          <Graph4 :data="this.data" :week="this.week" style="width: 100%;height:19em;margin-top:1%" />
      </div>
      <div id="top_3">
        <Graph5 :data="this.data" :week="this.week" style="width: 100%;height:22em;margin-top:4%" />
      </div>
    </div>
    <div id="bottom">
      <div id="bottom_1">
          <Graph2 :dept="this.dept" :data="this.data" :week="this.week" style="width: 100%;height:19em;margin-bottom:1%" />
      </div>
      <div id="bottom_2">
          <Graph3 v-on:updateDept="updateDept" :data="this.data" :week="this.week" style="width: 100%;height:19em;margin-top:1% " />
      </div>
      <div id="bottom_3">
          <Graph6 :dept="this.dept" :data="this.data" :week="this.week" style="width: 100%;height:19em;margin-top:1%" />
      </div>
    </div>
    <br />
    <!-- <Graph1 :data="this.data" :week="this.week" style="width: 33%;height:300px;float:left" /> -->
    <!-- <Graph3 v-on:updateDept="updateDept" :dept="this.dept" :data="this.data" :week="this.week" style="width: 50%;height:300px;float:left" /> -->
    <!--<Graph2 :data="this.data" :week="this.week" style="width: 33%;height:300px;float:left" />-->
    <!--<Graph4 :data="this.data" :week="this.week" style="width: 50%;height:500px;float:left" />-->
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
import Graph5 from "./components/Graph5";
import Graph6 from "./components/Graph6";
import $ from 'jquery'
export default {
  name: "app",
  data() {
    return {
      week: 'week1',
      data: '',
      stuData: '',
      dept: '一食堂',
    };
  },
  components: {
    Graph1,
    Graph2,
    Graph3,
    Graph4,
    Graph5,
    Graph6
  },
  methods: {
    updateDept: function(dept) {
      this.dept = dept
    },
    getData: function(week) {
      this.$http.get(`${week}`).then(response => {
        this.data = response.data;
      });
      this.$http.get(`student`).then(response => {
        this.stuData = response.data;
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
    }
  }
};
</script>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  body {
    width: 100vw;
    height: 100vh;
    padding: 0px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    overflow: hidden;
    /*background: aliceblue;*/
      background-image: linear-gradient(to top, aliceblue,#B7DBFF);
  }
  .box{
      border: 1px solid #334B5C;
      border-radius: 5px;
      border-top:none;
      /*background:rgba(0,0,0,0.1) ;*/
      box-shadow: 2px 1px 1px #336666;
  }
  #lineStyle{
      width:80%;
      margin:0 auto;
      border: 0;
      height: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#top{
  height: 40%;
  width: 100%;
  /*background: darkkhaki;*/
  display: flex;
  flex-direction: row;
}
#top_1{
  height:100%;
  width: 28%;
    margin-top: 2%;
}
#top_2{
  height: 100%;
  width: 44%;
    margin: 0 1%;
}
.topTit{
  height: 20%;
  width: 44%;
  margin: 5px auto;
    font-size: 1.3em;
    color: #000000;
    letter-spacing: 3px;
    color: #2c3e50;

}
#top_3{
  height: 100%;
  width: 28%;
}
#bottom{
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
#bottom_1{
  height:100%;
  width: 28%;
}
#bottom_2{
  height: 100%;
  width: 44%;
  margin: 2% 1%;
}
#bottom_3{
  height: 100%;
  width: 28%;
}
button {
    margin: 1% 3% 1% 3%;
}
</style>
