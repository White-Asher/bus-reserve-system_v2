import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import FacilityInfo from '../components/FacilityInfo'
import Notice from '../components/Notice'
import Notice_write from '../components/Notice_write'
import FrequentlyQnA from '../components/FrequentlyQnA'
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
        path: "/Notice",
        component: Notice,
    },
    {
        path: "/Notice_write",
        component: Notice_write,
    },
    {
        path: "/FrequentlyQnA",
        component: FrequentlyQnA,
    },
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