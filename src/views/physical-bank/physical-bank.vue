<template>
    <v-container fluid>
        <header class="mb-8">
            <div class="txtBold" style="display: flex;">
                <v-icon x-large style="color: black;"
                        @click="$router.push('/khadamat')"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                <div class="">
                    قلک فیزیکی
                </div>
            </div>
        </header>

        <div class="txtRegular mx-auto" style="display: flex">
            <div class="mr-4">
                میزان کل حمایت شما تا کنون :
            </div>
            <div class="mr-auto ml-4">
                {{ payedMoney }} تومان
            </div>
        </div>

        <v-row class="mx-0 px-0 mt-6">
            <v-col cols="12" md="8" lg="11" class="mx-auto text-center mx-0 px-0 mb-lg-10 mb-md-10">
                <v-img src="../../assets/2.png" style="position: relative; display: inline-block;">
                    <v-btn class="overlay-button elevation-0" style="background-color: #EC8E85; border-radius: 10px;
                        position: absolute; color: white; font-weight: 800; font-size: 13px; font-family: 'My Iranian Sans', sans-serif"
                           :style="{'width': inputWidth, 'height': inputHeight}"
                           @click="$router.push('/physical-bank/physical-bank-req')"
                    >
                        درخواست قلک
                        <v-icon> mdi-chevron-left</v-icon>
                    </v-btn>
                </v-img>
            </v-col>
        </v-row>

        <v-row style="overflow-y: scroll" class="mx-1">

            <v-col cols="12" md="12" lg="12" style="display: flex;"
                   class="mx-auto text-center">
                <div class="txtBold mr-5" style="font-size: 23px;"> قلک های شما</div>
            </v-col>

            <v-col cols="12" lg="12" md="12" class="mx-auto my-1 py-6"
                   v-for="(history, index) in history"
                   :key="index"
                   style="display: flex; border: #BDBDBD solid 1px; border-radius: 15px;"
                   @click="$router.push('/bank-details')"
            >
                <div class="mr-4"> {{ history.title }}</div>
                <div class="ml-5 mr-auto"> {{ history.amount }} تومان</div>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "physical-bank",
    data() {
        return {
            payedMoney: 20000000,
            history:
        [
            {amount: 2000000, title: 'عنوان قلک'},
            {amount: 2000000, title: 'عنوان قلک'},
            {amount: 2000000, title: 'عنوان قلک'},
            {amount: 2000000, title: 'عنوان قلک'},
            {amount: 2000000, title: 'عنوان قلک'},
            {amount: 2000000, title: 'عنوان قلک'},
        ]
    }
    },
    mounted() {
        axios.get(`${this.$store.getters.getServerAddress}/transactions/total?type=CoinBox`, {headers: {'Authorization': `Bearer ${this.$store.getters.getToken}`}})
            .then(response => console.log(response))
            .catch(err => console.log(err))
        axios.get(`${this.$store.getters.getServerAddress}/my-coin-boxes`, {headers: {'Authorization': `Bearer ${this.$store.getters.getToken}`}})
            .then(response => console.log(response))
            .catch(err => console.log(err))
    },
    computed: {
        inputWidth() {
            if (this.$vuetify.breakpoint.xs)
                return "130px"
            else
                return '250px'
        }
        ,
        inputHeight() {
            if (this.$vuetify.breakpoint.xs)
                return "48px"
            else
                return "70px"
        }
    }
}
</script>

<style scoped>

@font-face {
    font-family: 'My Iranian Sans';
    src: url('../../fonts/IRANSansXBlack.ttf') format('truetype');
}

@font-face {
    font-family: regularIranSans;
    src: url("../../fonts/IRANSansXMedium.ttf") format('truetype');
}

.txtBold {
    font-family: 'My Iranian Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

    place-items: center;

    color: #1C1D1F;
}

.txtRegular {
    font-family: 'regularIranSans', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;

    color: #5B5C5F;
}


.overlay-button {
    position: absolute;
    bottom: 10%;
    right: 9%;
    z-index: 1;
}


</style>