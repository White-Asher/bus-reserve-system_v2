import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import FacilityInfo from '../components/FacilityInfo'
import ExpressBusInfo from '../components/ExpressBusInfo'
// import Extrabusroute from '../components/Extrabusroute'
// import Extrabustime from '../components/Extrabustime'
import Customerservice from '../components/Customerservice'
import Login from '../components/Login'
import Memberjoin from '../components/Memberjoin'


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
        path: "/ExpressBusInfo",
        component: ExpressBusInfo,
    },
    // {
    //     path: "/Extrabusroute",
    //     component: Extrabusroute,
    // },
    // {
    //     path: "/Extrabustime",
    //     component: Extrabustime,
    // },
    {
        path: "/Customerservice",
        component: Customerservice,
    },


    {
        path: "/Login",
        component: Login,
    },
    {
        path: "/Memberjoin",
        component: Memberjoin,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;