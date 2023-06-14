import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from "@/views/loginPage.vue";
import validatePhoneNumber from "@/views/validatePhoneNumber.vue";
import registerForm from "@/views/registerForm.vue";

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
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
