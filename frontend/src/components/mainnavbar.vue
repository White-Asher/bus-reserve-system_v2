<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" aria-current="page">Bus Reservation System</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/FacilityInfo">시설 이용 안내</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/ExtraBusRoute">노선 정보 안내</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/ExtraBusTime">배차 조회 및 예매</router-link>
        </li>
          <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            버스 운행 정보
          </a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" href="#" aria-current="page" to="/ExtraBusRoute">노선 정보</router-link>
            <router-link class="dropdown-item" href="#" aria-current="page" to="/ExtraBusTime">배차 조회</router-link>
          </div>
        </li> -->
        <li class="nav-item">
          <a class="nav-link"  href="#">고객 지원</a>
        </li>
      </ul>
      
    </div>
    <form class="form-inline my-2 my-lg-0">
      <span class="navbar-text">
        <!-- <a class="nav-link" aria-current="page" href="#">Login</a> -->
        <router-link class="nav-link" href="#" aria-current="page" to="/Login">Login</router-link>
      </span>
      <span class="navbar-text">
        <a class="nav-link" aria-current="page" href="#">회원가입</a>
      </span>
    </form>
  </div>
</nav>
</template>
<script>
export default {
  name : 'Mainnavbar',
  data(){
    return{
      
    }
  }
}
</script>
<style>

</style>