<template>
<div class="main-container">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/main_bus1.jpg" class="d-block h-auto w-100 " alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>환영합니다</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fba9qE9%2FbtqBeKV8W7H%2FGJFSwiVO2NOEMJHcfypmmk%2Fimg.jpg" class="d-block h-auto w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>시간표를 확인하실 수 있습니다</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHUZB6%2FbtqBg8OMvGJ%2FZ0UHt9c3vFKBTNfkjK2U5k%2Fimg.jpg" class="d-block h-auto w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>터미널에는 다양한 시설이 있습니다</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
</div>
</template>
<script>

export default {
    name : 'Home',
    data() {
        return {
        }
    }
}
</script>

<style>
  @import '../style/main.css';
</style>