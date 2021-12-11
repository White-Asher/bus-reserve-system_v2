<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" @click="presentUI=0">Bus Reservation System</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/FacilityInfo" @click="presentUI=10">시설 이용 안내</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/ExtraBustime" @click="presentUI=20">버스 운행 정보</router-link>
        </li> -->
          
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            버스 운행 정보
          </a>
          <!-- @click="presentUI=20" -->
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" to="/ExtraBusRoute" @click="presentUI=20">노선 정보</a>
            <a class="dropdown-item" href="#" to="/ExtraBusTime" @click="presentUI=21">배차 조회</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>


        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/ExtraBustime" @click="presentUI=20">시외버스 예매</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#">고객 지원</a>
        </li>
      </ul>
      
    </div>
    <form class="form-inline my-2 my-lg-0">
      <span class="navbar-text">
        <a class="nav-link" aria-current="page" href="#">Login</a>
      </span>
      <span class="navbar-text">
        <a class="nav-link" aria-current="page" href="#">회원가입</a>
      </span>
    </form>
  </div>
</nav>

  <div class="main-img-box" v-if="presentUI == 0"></div>
  <div class="container">
    <div  v-if="presentUI == 10">
    <FacilityInfo
    :presentUI = 'presentUI'
    />
    </div>

    <div  v-if="presentUI == 20">
    <ExtraBusRoute
    :presentUI = 'presentUI'
    />
    </div>

  </div>


<mainfooter></mainfooter>
</template>

<script>
import mainfooter from './components/mainfooter';
import FacilityInfo from './components/FacilityInfo';
import ExtraBusRoute from './components/ExtraBusRoute';


export default {
  name : 'App',
  data(){
    return{
      presentUI:0,
      
    }
  },
  components : {
    mainfooter,
    FacilityInfo,
    ExtraBusRoute,
  },

}

</script>


<style>
@import './style/main.css';
</style>
