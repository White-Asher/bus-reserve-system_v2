<template>
  <mainnavbar></mainnavbar>
  <div class="main-img-box"></div>
  
  <div class="container">



  </div>


<mainfooter></mainfooter>
</template>

<script>
import mainnavbar from './components/mainnavbar';
import mainfooter from './components/mainfooter';
// import FacilityInfo from './components/FacilityInfo';
export default {
  name : 'App',
  data(){
    return{
      presentUI:0
    }
  },
  components : {
    mainnavbar,
    mainfooter,
    // FacilityInfo
  }

}
</script>


<style>
@import './style/main.css';
</style>
