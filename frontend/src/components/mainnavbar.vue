<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Bus Reservation System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">시설 이용 안내</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">버스 이용 안내</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            시외 버스 예매
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
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
</template>

<script>
export default {
  name : 'mainnavbar',
  data(){
    return{
      
    }
  }
}
</script>
<style>

</style>