<template>
<div class="container">
  <h4>고객님의 승/하차의 버스 위치를 안내합니다</h4>
    <div>
      <img src="../assets/facility_img1.jpg">
    </div>

  <h4>찾아 오시는 길</h4>
  <div>
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