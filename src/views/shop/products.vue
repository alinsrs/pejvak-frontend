<template>
    <v-container fluid>
        <header class="mb-6">
            <div class="txtBold" style="display: flex;">
                <v-icon x-large style="color: black;"
                        @click="$router.push('/choose-category')"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                <div class="">
                    ثبت سفارش
                </div>
            </div>
        </header>

        <div class="txtRegular mr-4" style="font-size: 15px; font-weight: 800; color: black">
            نوع محصول مورد نظر خود را انتخاب فرمایید.
        </div>

        <v-row class="mt-4">
            <v-col cols="12" lg="4" md="6" sm="6"
                   v-for="(products, index) in products"
                   :key="index"
            >
                <v-card class="elevation-0">
                    <v-card-title>
                        <v-img :src="products.photo" max-height="400px" max-width="400px" class="mx-auto"></v-img>
                    </v-card-title>
                    <v-card-text style="display: flex" class="mr-2 ml-3">
                        <div class="mr-3f"> {{products.model}} </div>
                        <div class="mr-auto ml-7"> {{products.amount}} تومان </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: "order",
    data() {
        return {
            products: [
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},
                {photo: require('@/assets/img.png'), amount: 2000000, model: 'رومیزی'},

            ]
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
    src: url("../../fonts/IRANSansXLight.ttf") format('truetype');
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