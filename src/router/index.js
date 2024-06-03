import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/views/Home.vue'
import AboutUs from '@/components/views/AboutUs.vue'
import OurServices from '@/components/views/OurServices.vue'
import OurProjects from '@/components/views/OurProjects.vue'
import Contact from "@/components/views/Contact.vue";
import WifiAuth from "@/components/views/services/WifiAuth.vue";
import WifiAnalysis from "@/components/views/services/WifiAnalysis.vue";
import WifiMarketing from "@/components/views/services/WifiMarketing.vue";
import Vacancies from "@/components/views/vacancies/Vacancies.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about-us', name: 'AboutUs', component: AboutUs },
    { path: '/our-services', name: 'OurServices', component: OurServices },
    { path: '/careers', name: 'Vacancies', component: Vacancies },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/wifi-auth', name: 'WifiAuth', component: WifiAuth },
    { path: '/wifi-analysis', name: 'WifiAnalysis', component: WifiAnalysis },
    { path: '/wifi-marketing', name: 'WifiMarketing', component: WifiMarketing },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
