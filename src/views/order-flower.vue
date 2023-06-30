<template>
    <v-container fluid>
        <header class="mb-8">
            <div class="txtBold" style="display: flex;">
                <v-icon x-large style="color: black;"
                        to="/khadamat"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                <div class="">
                    استند و گل
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
                <v-img src="../assets/3.png" style="position: relative; display: inline-block;">
                    <v-btn class="overlay-button elevation-0" style="background-color: #78A781; border-radius: 10px;
                        position: absolute; color: white; font-weight: 800; font-size: 13px; font-family: 'My Iranian Sans', sans-serif"
                           :style="{'width': inputWidth, 'height': inputHeight}"
                    >
                        ثبت سفارش
                        <v-icon> mdi-chevron-left</v-icon>
                    </v-btn>
                </v-img>
            </v-col>
        </v-row>

        <v-row class="mx-2">

            <v-col cols="12" md="12" lg="12" style="display: flex;"
                   class="mx-auto text-center">
                <div class="txtBold mr-2" style="font-size: 23px;"> سفارشات شما</div>
            </v-col>

            <v-col cols="12" sm="12" lg="12" md="12" class="mx-auto my-2"
                   v-for="(history, index) in history"
                   :key="index"
                   style="display: flex; border-radius: 15px; border: #BDBDBD solid 1px;
                   align-items: center; vertical-align: middle;
"
            >
                <v-img :src="history.photo" max-width="90px"></v-img>
                <div class="mr-3"> {{ history.date }}</div>
                <div class="ml-3 mr-auto"> {{ history.amount }} تومان</div>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: "order-flower",
    data() {
        return {
            payedMoney: 20000000,
            history: [
                {photo: "/img/img.cb9e45d2.png", amount: 2000000, date: '1402.02.03'},
                {photo: "/img/img.cb9e45d2.png", amount: 2000000, date: '1402.02.03'},
                {photo: "/img/img.cb9e45d2.png", amount: 2000000, date: '1402.02.03'},
                {photo: "/img/img.cb9e45d2.png", amount: 2000000, date: '1402.02.03'},
                {photo: "/img/img.cb9e45d2.png", amount: 2000000, date: '1402.02.03'},
                {photo: "/img/img.cb9e45d2.png", amount: 2000000, date: '1402.02.03'},
            ]
        }
    },
    computed: {
        inputWidth() {
            if (this.$vuetify.breakpoint.xs)
                return "120px"
            else
                return '250px'
        },
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
    src: url('../fonts/IRANSansXBlack.ttf') format('truetype');
}

@font-face {
    font-family: regularIranSans;
    src: url("../fonts/IRANSansXMedium.ttf") format('truetype');
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
    bottom: 9%;
    right: 11%;
    z-index: 1;
}

</style>