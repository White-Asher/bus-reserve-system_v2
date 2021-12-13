<template>
<div class="container">
  <div class="time-search">
  <h4>배차 조회</h4>

  <form class="form-inline">
      <input type="text" class="form-control mr-sm-2" v-model="ebr_RouteArrive" placeholder="도착지 입력" />
      <!-- <input class="form-control mr-sm-2" type="search" placeholder="출발시간" aria-label="Search">시 이후 -->
      <button class="btn btn-outline-success my-2 my-sm-0" @click="searchTime">검색</button>
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
          <td>{{index.ebt_DeptTime}}</td>
          <td>{{index.ebt_ArriveTime}}</td>
          <td>{{index.ebt_RequiredTime}}</td>
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
    }
  },
  mounted(){

  },

  methods:{
      searchTime: function(){
      axios.post("/api/inputArrivetime", {
        ebr_RouteArrive: this.ebr_RouteArrive,
      }).then((res) => {
        if(res.data.msg === "Validation Failed"){
          let errors = res.data.errors;
          let errorMsg = "";
          if(errors.ebr_RouteArrive.length != 0){
            for(let i=0; i<errors.ebr_RouteArrive.length; i++){
              errorMsg += `${errors.ebr_RouteArrive[i]}\n`;
            }
          } alert(errorMsg);
        }
        else{
          alert("Success");
        }
      }).catch(()=>{
        alert("Something Went Wrong");
        // alert(this.errors);
        // alert(this.errorMsg);
        alert(this.ebr_RouteArrive);
      })

      axios.get("/api/inputArrivetime").then((res) => {
        
        this.bustime = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    
    // searchTime: function() {
    //   axios.post("/api/inputArrivetime", {
    //     ebr_RouteArrive: this.ebr_RouteArrive,

    //   }).then((res) => {
    //     if(res.data.msg === "Validation Failed"){
    //       let errors = res.data.errors;
    //       let errorMsg = "";
    //       if(errors.ebr_RouteArrive.length != 0){
    //         for(let i=0; i<errors.ebr_RouteArrive.length; i++){
    //           errorMsg += `${errors.ebr_RouteArrive[i]}\n`;
    //         }
    //       } alert(errorMsg);
    //     }
    //     else{
    //       alert("Success");
    //     }
    //   }).catch(()=>{
    //     alert("Something Went Wrong");
    //     // alert(this.errors);
    //     // alert(this.errorMsg);
    //     alert(this.ebr_RouteArrive);
    //   })
    // }
  }
};

</script>


<style>
  @import '../style/main.css';
</style>