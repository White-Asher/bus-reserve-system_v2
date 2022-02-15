<template>
<div class="container">
  <div class="py-5 text-center">
    <h2>회원가입</h2>
  </div>

  <div class="row">
    <div class="col-md-12 order-md-1">
      <h4 class="mb-3">회원 정보를 입력하세요</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-12 mb-3">
            <label for="firstName">아이디(ID)</label>
            <input type="text" class="form-control" v-model="userid" placeholder="ID" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="username">비밀번호(Password)</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="userpw" placeholder="비밀번호" required>
            <div class="invalid-feedback" style="width: 100%;">
              Your username is required.
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="username">비밀번호 확인(Password)</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="pwcheck" placeholder="비밀번호확인" required>
            <div class="invalid-feedback" style="width: 100%;">
              Your username is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="username">이름</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="username" placeholder="이름" required>
            <div class="invalid-feedback" style="width: 100%;">
              Your username is required.
            </div>
          </div>
        </div>
          
        <div class="mb-3">
          <label for="username">나이</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="userage" placeholder="나이" required>
            <div class="invalid-feedback" style="width: 100%;">
              이름을 입력하세요
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" v-model="useremail" placeholder="you@example.com">
          <div class="invalid-feedback">
            이메일을 입력하세요
          </div>
        </div>

        <div class="mb-3">
          <label for="username">연락처</label>
          <div class="input-group">
            <input type="text" class="form-control" v-model="usertele" placeholder="연락처" required>
            <div class="invalid-feedback" style="width: 100%;">
              연락처를 입력하세요
            </div>
          </div>
        </div>

        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit" @click="registerUser" to="/">회원가입</button>
      </form>
    </div>
  </div>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2021-2021 Bus Reservation System</p>
  </footer>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name : 'Member_join',
  props : {

  },
  components : {
        
  },
  data() {
    return {
        userid: "",
        userpw: "",
        pwcheck: "",
        username: "",
        userage : "",
        useremail : "",
        usertele : ""
    }
  },
  methods: {
    registerUser: function() {
      axios.post("/api/user", {
        userid: this.userid,
        userpw: this.userpw,
        username: this.username,
        userage: this.userage,
        useremail: this.useremail,
        usertele: this.usertele,
      }).then((res) => {
        if(res.data.msg === "Validation Failed"){
          let errors = res.data.errors;
          let errorMsg = "";
          if(errors.userid.length != 0){
            for(let i=0; i<errors.userid.length; i++){
              errorMsg += `${errors.userid[i]}\n`;
            }
          } 
          
          if(errors.userpw.length != 0){
            for(let i=0; i<errors.userpw.length; i++){
              errorMsg += `${errors.userpw[i]}\n`;
            }
          }
          if(errors.username.length != 0){
            for(let i=0; i<errors.username.length; i++){
              errorMsg += `${errors.username[i]}\n`;
            }
          }
          if(errors.userage.length != 0){
            for(let i=0; i<errors.userage.length; i++){
              errorMsg += `${errors.userage[i]}\n`;
            }
          }
          if(errors.useremail.length != 0){
            for(let i=0; i<errors.useremail.length; i++){
              errorMsg += `${errors.useremail[i]}\n`;
            }
          }
          if(errors.usertele.length != 0){
            for(let i=0; i<errors.usertele.length; i++){
              errorMsg += `${errors.usertele[i]}\n`;
            }
          }
          alert(errorMsg);
        }
        else{
          alert("Successfully Saved");
        }
      }).catch(()=>{
        alert(this.errors);
      })
    }
  }

};
</script>

<style>
  @import '../style/main.css';
  .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>