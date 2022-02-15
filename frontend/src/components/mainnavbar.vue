<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" aria-current="page">Bus Time Table</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/ExtraBusRoute">시외버스 노선 안내</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">시내버스 노선 안내</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/Customerservice" >고객 지원</router-link>
        </li>
      </ul>
      
    </div>
    <form class="form-inline my-2 my-lg-0">
      <span class="navbar-text">
        <!-- <a class="nav-link" aria-current="page" href="#">Login</a> -->
        <router-link class="nav-link" href="#" aria-current="page" to="/Login">Login</router-link>
      </span>
      <span class="navbar-text">
        <router-link class="nav-link" aria-current="page" href="#" to="/Memberjoin">회원가입</router-link>
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