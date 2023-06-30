import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from "@/views/loginPage.vue";
import validatePhoneNumber from "@/views/validatePhoneNumber.vue";
import registerForm from "@/views/registerForm.vue";
import khadamat from "@/views/khadamat.vue";
import electricalBank from "@/views/electrical-bank.vue";
import phisicalBank from "@/views/phisical-bank.vue";
import orderFlower from "@/views/order-flower.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: loginPage,
    },
    {
      path: '/validate-phone-number',
      name: 'validatePhoneNumber',
      component: validatePhoneNumber
    },
    {
        path: '/register-form',
        name: 'registerForm',
        component: registerForm
    },
    {
        path: '/khadamat',
        name: 'khadamat',
        component: khadamat
    },
    {
        path: '/electrical-bank',
        name: 'electrical-bank',
        component: electricalBank
    },
    {
        path: '/phisical-bank',
        name: 'phisical-bank',
        component: phisicalBank
    },
    {
        path: '/order-flower',
        name: 'order-flower',
        component: orderFlower
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
