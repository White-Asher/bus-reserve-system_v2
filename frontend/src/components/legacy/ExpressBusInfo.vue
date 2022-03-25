<template>
<div class="container">
<h4>노선정보</h4>
  <form class="form-inline">
    <input class="form-control mr-sm-2" list="datalistOptions" type="text" v-model="test" id="exampleDataList" placeholder="도착지 입력">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="getTime">검색</button>
    <datalist id="datalistOptions">
      <option v-for="test in busArriveArea" :key="test.id">{{test}} </option>
    </datalist>
  </form>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">노선번호</th>
      <th scope="col">출발지</th>
      <th scope="col">도착지</th>
      <th scope="col">이용요금(성인)</th>
      <th scope="col">이용요금(청소년)</th>
      <th scope="col">이용요금(아동)</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="index in busroutes" :key="index.id">
          <td>{{index.ebr_RouteID}}</td>
          <td>{{index.ebr_RouteDept}}</td>
          <td>{{index.ebr_RouteArrive}}</td>
          <td>{{index.ebr_ChargeAdult}}</td>
          <td>{{index.ebr_ChargeYouth}}</td>
          <td>{{index.ebr_ChargeChild}}</td>
    </tr>
  </tbody>
</table>
{{busroutes[1].ebr_RouteArrive}}

</div>
</template>

<script>
import axios from 'axios';
export default {
  name : "Extrabusroute",
  data(){
    return{
      busroutes : {},
      busArriveArea : [],
    }
  },
  components : {

  },
  mounted(){
    this.loadextrabusrouteTable();
  },
  methods: {
    loadextrabusrouteTable: function(){
      axios.get("/api/extrabusroute").then((res) => {
        this.busroutes = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },

  }
}
</script>

<style>
  @import '../style/main.css';
</style>
