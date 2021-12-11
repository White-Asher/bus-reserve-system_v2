<template>
<h4>노선정보</h4>
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
    <tr v-for="index in extrabusroute" :key="index.id">
          <td>{{index.ebr_RouteID}}</td>
          <td>{{index.ebr_RouteDept}}</td>
          <td>{{index.ebr_RouteArrive}}</td>
          <td>{{index.ebr_ChargeAdult}}</td>
          <td>{{index.ebr_ChargeYouth}}</td>
          <td>{{index.ebr_ChargeChild}}</td>
    </tr>
  </tbody>
</table>


</template>

<script>
import axios from 'axios';
export default {
  name : 'ExtraBusRoute',
  data(){
    return{
      presentUI : Number,
      extrabusroute : {},
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
        this.extrabusroute = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    }
  }
}
</script>

<style>
  @import '../style/main.css';
</style>
