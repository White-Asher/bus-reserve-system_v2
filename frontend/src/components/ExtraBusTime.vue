<template>
<div class="container">
  <div class="time-search">
  <h4>배차 조회</h4>

  <form class="form-inline">
      <input type="text" class="form-control mr-sm-2" v-model="ebr_RouteArrive" placeholder="도착지 입력" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="getTime">검색</button>
  </form>

  <form class="form-inline">
    <input class="form-control mr-sm-2" list="datalistOptions" type="text" v-model="test" id="exampleDataList" placeholder="도착지 입력">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="getTime">검색</button>
    <datalist id="datalistOptions">
      <option v-for="test in bustime" :key="test.id">{{test.ebt_RouteID}} </option>
    </datalist>
  </form>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">노선번호</th>
      <th scope="col">출발시간</th>
      <th scope="col">도착시간</th>
      <th scope="col">소요시간</th>
      <th scope="col">이용요금(성인)</th>
      <th scope="col">이용요금(청소년)</th>
      <th scope="col">이용요금(아동)</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="index in bustime" :key="index.id">
          <td>{{index.ebt_RouteID}}</td>
          <td>{{index.ebt_DeptTime}}</td>
          <td>{{index.ebt_ArriveTime}}</td>
          <td>{{index.ebt_RequiredTime}}</td>
          <td>{{index.ebr_ChargeAdult}}</td>
          <td>{{index.ebr_ChargeYouth}}</td>
          <td>{{index.ebr_ChargeChild}}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name : 'Extrabustime',
  data() {
    return {
      ebr_RouteArrive: "",
      bustime : {},
      test: '',
      tests: {
        
      },
    }
  },
  mounted(){
  },

  methods:{
    getTime: function(){
        axios.get("/api/getarrivetime", {
          params: {
            ebr_RouteArrive: this.ebr_RouteArrive,
          }
        })
      .then((res) => {
        this.bustime = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    }
  }
};

</script>


<style>
  @import '../style/main.css';
</style>