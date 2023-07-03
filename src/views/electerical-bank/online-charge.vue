<template>
    <v-container fluid>
        <header class="mb-8">
            <div class="txtBold" style="display: flex;">
                <v-icon x-large style="color: black;"
                        @click="$router.push('/electrical-bank')"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                <div class="">
                    ثبت درخواست
                </div>
            </div>
        </header>
        <v-row>
            <v-col cols="12" md="6" lg="6">
                <div class="txtRegular text-right mr-4"> مبلغ حمایت</div>
                <v-text-field
                    v-model="amount"
                        outlined
                        class="mt-4 mx-3"
                        style="border-radius: 15px"
                        :style="{'width': inputWidth}"
                        type="number"
                >
                </v-text-field>
            </v-col>

            <v-col cols="12" md="4" lg="6" class="text-center">
                <v-btn style="border-radius: 12px; color: white; position: fixed; bottom: 5%; left: 3%"
                       :style="{'background-color': $vuetify.theme.currentTheme.primary, 'width': inputWidthBtn}"
                       @click="donate"
                >
                    پرداخت
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "online-charge",
    data() {
        return {
            amount : undefined
        }
    },
    computed: {
        inputWidth() {
            if (this.$vuetify.breakpoint.xs)
                return "95%"
            else
                return "97%"
        },
        inputWidthBtn() {
            if (this.$vuetify.breakpoint.xs)
                return "95%"
            else
                return "150px"
        },
        inputHeight() {
            if (this.$vuetify.breakpoint.xs)
                return "48px"
            else
                return "70px"
        },
    },
    methods: {
        donate(){
            axios.post(`${this.$store.getters.getServerAddress}/transactions/digital-coin-box`, {amount : this.amount})
                .then(response => {
                    console.log(response)
                    this.$router.push("/electrical-bank")
                })
                .catch(err => console.log(err))
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

</style>