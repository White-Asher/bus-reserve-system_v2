import { createWebHistory, createRouter } from 'vue-router'
import mainfooter from '../components/mainfooter'
import FacilityInfo from '../components/FacilityInfo'
import ExtraBusRoute from '../components/ExtraBusRoute'
import ExtraBusTime from '../components/ExtraBusTime'
import App from '../App'

const routes = [
    {
        path: "/",
        component: App,
    },
    {
        path: "/mainfooter",
        component: mainfooter,
    },
    {
        path: "/FacilityInfo",
        component: FacilityInfo,
    },
    {
        path: "/ExtraBusRoute",
        component: ExtraBusRoute,
    },
    {
        path: "/ExtraBusTime",
        component: ExtraBusTime,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;