<template>
<div class="container">
  <h4>시설 안내</h4>
    <div class="facility-info-img">
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpBzMJ%2FbtqBg9UsCgZ%2F9sDTwNGjfegogGAXEwCFyk%2Fimg.jpg">
    </div>
  <hr>
  <h4>찾아 오시는 길</h4>
  <div class="facility-info-img">
      <KakaoMap />
  </div>
</div>
</template>
<script>
import KakaoMap from "./KakaoMap.vue";
export default {
  name : 'FacilityInfo',
    components : {
    KakaoMap,

  },
  props : {

  },
  data() {
    return {
      extrabusroute : {}
    }
  },

};
</script>

<style>
  @import '../style/main.css';
</style>