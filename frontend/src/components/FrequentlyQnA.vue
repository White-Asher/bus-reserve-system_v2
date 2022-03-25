<template>
    <div class="container">
        <div class="notice-board-top">
            <hr>
            <p class="notice-board-title">자주 묻는 질문</p>
            <p>자주 묻는 질문 sub-title</p>
            <hr>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="tab-content" id="nav-tabContent">
                    <table class="table" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="col-md-1">번호</th>
                                <th class="col-md-11">제목</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in FrequentlyQnA" :key="index.id">
                                <td>{{index.frequently_qna_id}}</td>
                                <td>{{index.frequently_qna_title}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Notice',
    data() {
        return {
            FrequentlyQnA: {},
        }
    },
    components: {

    },
    mounted() {
        this.getFrequentlyQnA();
    },
    methods: {
        getFrequentlyQnA: function() {
            axios.get("/api/frequentlyQnA").then((res) => {
                    this.FrequentlyQnA = res.data.data;
                })
                .catch(() => {
                    console.log("Something Went Wrong");
                })
        },
    }
};
</script>

<style>
@import '../style/main.css';
</style>