
<template>
<div>
    <Mainnavbar />
    <router-view></router-view>
    <Mainfooter />

</div>
</template>

<script>
import Mainnavbar from "./components/Mainnavbar";
import Mainfooter from "./components/Mainfooter";
export default {
  name : "App",
  components : {
    Mainnavbar,
    Mainfooter,
  },
};
</script>

<style>
  @import './style/main.css';
</style>
