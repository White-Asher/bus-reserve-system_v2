<template>
<div class="container">
    <h4>운수사 정보</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th scope="col">회사</th>
        <th scope="col">연락처</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="index in buscompany" :key="index.id">
            <td>{{index.buscompany}}</td>
            <td>{{index.bctele}}</td>
        </tr>
    </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name : "Customerservice",
  data() {
      return {
        buscompany : {},
      }
  },
  components : {

  },
    mounted(){
    this.loadextrabusrouteTable();
  },
  methods: {
    loadextrabusrouteTable: function(){
      axios.get("/api/buscompany").then((res) => {
        this.buscompany = res.data.data;
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
