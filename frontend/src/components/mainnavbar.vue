<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" aria-current="page">터미널</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/FacilityInfo">시설 안내</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="https://txbus.t-money.co.kr/main.do" target="_blank">버스 운행 안내 / 예매</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/Notice">공지사항</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/FrequentlyQnA">고객지원센터</router-link>
        </li>
      </ul>
  
    </div>
    <form class="form-inline my-2 my-lg-0">
      <span class="navbar-text">
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