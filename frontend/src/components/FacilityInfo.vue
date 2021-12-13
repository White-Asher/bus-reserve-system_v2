<template>
<div class="container">
  <h4>고객님의 승/하차의 버스 위치를 안내합니다</h4>
    <div>
      <img src="../assets/facility_img1.jpg">
    </div>

  <h4>승차홈 안내</h4>
    <table>
      <tr>
        <th>승차홈 번호</th> <th>행선지</th>
      </tr>
      <tr><td>1</td><td>test</td></tr>
      <tr><td>2</td><td>test</td></tr>
      <tr><td>3</td><td>test</td></tr>
      <tr><td>4</td><td>test</td></tr>
      <tr><td>5</td><td>test</td></tr>
      <tr><td>6</td><td>test</td></tr>
      <tr><td>7</td><td>청주(고속)</td></tr>
      <tr><td>8</td><td>청주(시내)</td></tr>
      <tr><td>9</td><td>시내버스</td></tr>
      <tr><td>10</td><td>시내버스</td></tr>
      <tr><td>11</td><td>시내버스</td></tr>
      <tr><td>12</td><td>시내버스</td></tr>
      <tr><td>13</td><td>시내버스</td></tr>
    </table>

  <h4>찾아 오시는 길</h4>
  <div>
      <img src="../assets/facility_img2.jpg">
    </div>
</div>
</template>
<script>

export default {
  name : 'FacilityInfo',
  props : {

  },
  components : {
        
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