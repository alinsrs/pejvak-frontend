import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from "@/views/loginPage.vue";
import validatePhoneNumber from "@/views/validatePhoneNumber.vue";
import registerForm from "@/views/registerForm.vue";
import khadamat from "@/views/khadamat.vue";
import electricalBank from "@/views/electrical-bank.vue";
import physicalBank from "@/views/physical-bank.vue";
import orderFlower from "@/views/order-flower.vue";
import onlineCharge from "@/views/online-charge.vue";
import physicalBankReq from "@/views/physical-bank-req.vue";
import chooseCategory from "@/views/choose-category.vue";
import products from "@/views/products.vue";
import bankDetails from "@/views/bank-details.vue";
import orderInformation from "@/views/order-information.vue";
import countReq from "@/views/count-req.vue";
import collectReq from "@/views/collect-req.vue";

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
        path: '/physical-bank',
        name: 'physical-bank',
        component: physicalBank
    },
    {
        path: '/order-flower',
        name: 'order-flower',
        component: orderFlower
    },
    {
        path: '/electrical-bank/online-charge',
        name: 'online-charge',
        component: onlineCharge
    },
    {
        path: '/physical-bank/physical-bank-req',
        name: 'physical-bank',
        component: physicalBankReq
    },
    {
        path: '/choose-category',
        name: 'choose-category',
        component: chooseCategory
    },
    {
        path: '/products',
        name: 'products',
        component: products
    },
    {
        path: '/bank-details',
        name: 'bank-details',
        component: bankDetails
    },
    {
        path: '/order-information',
        name: 'order-information',
        component: orderInformation
    },
    {
        path: '/count-req',
        name: 'count-req',
        component: countReq
    },
    {
        path: '/collect-req',
        name: 'collect-req',
        component: collectReq
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
