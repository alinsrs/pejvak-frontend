<template>
    <v-container>
        <header class="mb-8">
            <div class="txtBold" style="display: flex;">
                <v-icon x-large style="color: black;"
                        to="/khadamat"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                <div class="">
                    عنوان قلک
                </div>

                <div class="mr-auto ml-3 txtRegular"
                     style="font-size: 15px!important; font-weight: 300!important; color: black">
                    جمع آوری
                </div>
            </div>
        </header>

        <v-card class="txtRegular mx-5 pa-6 elevation-0" style="border-radius: 15px; background-color: #F6EBFF;
            border: solid 1px"
                :style="{'border-color': $vuetify.theme.currentTheme.primary}">
            <div style="display: flex" class="mb-4">
                <div>میزان کل حمایت شما تاکنون :</div>
                <div class="mr-auto ml-2">{{ amount }} تومان</div>
            </div>

            <div style="display: flex" class="my-4">
                <div>نوع قلک :</div>
                <div class="mr-auto ml-2">{{ application }}</div>
            </div>

            <div style="display: flex" class="mt-4">
                <div> سریال قلک :</div>
                <div class="mr-auto ml-2">{{ serial }}</div>
            </div>
        </v-card>


        <v-row class="mt-7">
            <v-col cols="12" md="8" lg="11" style="display: flex;"
                   class="mx-auto text-center">
                <div class="txtBold mr-5" style="font-size: 23px;"> تاریخچه شمارش</div>
                <v-icon class="mr-auto ml-7" style="color: black"> mdi-tune-variant</v-icon>
            </v-col>
            <div style="overflow-y: auto; flex: auto; max-height: 52vh">
                <v-col cols="12" lg="12" md="12" class="mx-1"
                       v-for="(history, index) in history"
                       :key="index"
                       style="display: flex"
                >
                    <div class="mr-4"> {{ history.date }}</div>
                    <div class="ml-5 mr-auto"> {{ history.amount }} تومان</div>
                </v-col>
            </div>
            <v-col cols="12" class="text-center">
                    <v-btn style="border-radius: 12px; color: white; width: 90%;"
                           :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                           height="50px"
                    >
                        درخواست شمارش
                    </v-btn>
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
export default {
    name: "bank-details",
    data() {
        return {
            amount: 20000000,
            application: 'خانگی',
            serial: '۳۳۸۳۳۲۸',
            history: [
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
                {amount: 2000000, date: '1402.02.03'},
            ]
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

</style>