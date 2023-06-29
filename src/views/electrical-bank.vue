<template>
    <v-container fluid>
        <header class="mb-5">
            <div class="txtBold">
                <v-icon x-large style="color: black;"
                        to="/khadamat"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                قلک الکترونیکی

            </div>
        </header>

        <v-row class="txtRegular mx-auto">
            <div class="mr-2">
                میزان کل حمایت شما تا کنون :
            </div>
            <div class="mr-auto">
                {{ payedMoney }} تومان
            </div>
        </v-row>

        <v-row>
            <v-col cols="12" md="6" lg="4" >
                <v-img src="../assets/1.png" style="">
                    <v-btn>
                        حمایت
                        mdi-chevron-left
                    </v-btn>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "electrical-bank",
    data() {
        return {
            payedMoney: 20000000,
        }
    },
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
    line-height: 32px;


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