<template>
<div class="container">
    <div class="notice-board-top">
        <hr>
        <p class="notice-board-title">공지사항</p>
        <p>터미널의 공지사항을 전달합니다.</p>
        <hr>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="tab-content" id="nav-tabContent">
                <table class="table" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="col-md-8">제목</th>
                            <th class="col-md-2">작성자</th>
                            <th class="col-md-2">작성일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#">Work 1</a></td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div style="display: inline-block; float: right; margin:20px;">
        <button type="button" class="btn btn-secondary" @click="goWritePage()">글작성</button>
    </div>
    <div style="clear: both;"></div>

</div>
</template>
<script>
import axios from 'axios';
export default {
  name : 'Notice',
    components : {

  },
  props : {

  },
  data() {
    return {

    }
  },
  mounted(){

  },
  methods: {
      goWritePage: function(){
        this.$router.push('/Notice_write')
    },
  }
};
</script>

<style>
  @import '../style/main.css';
</style>