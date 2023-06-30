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
                    ثبت سفارش
                </div>
            </div>
        </header>

        <div class="txtRegular mr-4" style="font-size: 19px; font-weight: 500; color: black">
            سفارش مورد نظر خود را انتخاب کنید.
        </div>

        <v-row class="mt-4 mx-auto text-center justify-center">
            <v-col cols="12" lg="4" md="6" sm="4">
                <v-card style="border: #BDBDBD 1px solid; border-radius: 20px" class="text-center mx-auto elevation-0">
                    <v-img src="../assets/stand.png" max-width="100px" max-height="100px" class="mx-auto mb-4 mt-4" >

                    </v-img>

                    <div class="txtRegular mb-3" style="font-size: 19px; font-weight: 500; color: black">
                        استند و بنر
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4" md="6" sm="4">
                <v-card style="border: #BDBDBD solid 1px; border-radius: 20px" class="mx-auto text-center elevation-0">
                    <v-img src="../assets/flower.png" max-height="100px" max-width="100px" class="mx-auto mb-4 mt-4">

                    </v-img>

                    <div class="txtRegular mb-3" style="font-size: 19px; font-weight: 500; color: black">
                        گل
                    </div>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: "choose-category"
}
</script>

<style scoped>

@font-face {
    font-family: 'My Iranian Sans';
    src: url('../fonts/IRANSansXBlack.ttf') format('truetype');
}

@font-face {
    font-family: regularIranSans;
    src: url("../fonts/IRANSansXLight.ttf") format('truetype');
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