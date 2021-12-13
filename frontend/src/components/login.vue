<template>
<div class="signin-container">
<div class="text-center">
<form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">Login</h1>
  <label for="inputEmail" class="sr-only">ID</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> 로그인 정보를 저장합니다.
    </label>
    <div class="sign-pw-box">
        <div><a href="#">회원가입</a></div>
        <div><a href="#">비밀번호 찾기</a></div>
    </div>

  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2021-2021</p>
</form>
</div>
</div>
</template>

<script>

export default {
  name : "Login",
  components : {

  },
};
</script>

<style>
  @import '../style/main.css';
  @import '../style/signin.css';
</style>
