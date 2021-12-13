import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import FacilityInfo from '../components/FacilityInfo'
import Extrabusroute from '../components/Extrabusroute'
import Extrabustime from '../components/Extrabustime'
import Login from '../components/Login'

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/FacilityInfo",
        component: FacilityInfo,
    },
    {
        path: "/Extrabusroute",
        component: Extrabusroute,
    },
    {
        path: "/Extrabustime",
        component: Extrabustime,
    },
    // 버스 예매
    // 고객지원
    {
        path: "/Login",
        component: Login,
    }
    // 회원가입
    // 비밀번호 찾기
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;