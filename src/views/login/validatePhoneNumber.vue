<template>
    <v-container fluid>
        <v-img
                src="../../assets/pejvak-logo.png"
                width="112.88px"
                height="112px"
                class="mx-auto mt-5"
        >
        </v-img>

        <div style="font-family: 'My Iranian Sans', sans-serif; text-align: center;
            font-weight: 700; font-size: 16px; margin-top: 30px">
            تایید شماره موبایل
        </div>
        <div style="">
            <v-img
                class="text-center mx-auto"
                style="width: 80px; height: 80px;"
              src="../../assets/sms.jpg"
            >

            </v-img>
        </div>

        <div :style="{'width': inputWidth}" class="text-center mx-auto" style="margin-top: 20px">
          <div class="registerTXT2">
            کد ارسال شده به شماره
            {{phoneNumber}}
            را وارد کنید.
          </div>
            <div class="position-relative mt-8 mx-auto"
                 :style="{'width': inputWidth, 'max-width': inputWidth}"
            >
                <v-otp-input
                        v-model="otp"
                        :disabled="loading"
                        length="4"
                ></v-otp-input>
                <v-overlay absolute :value="loading">
                    <v-progress-circular
                            indeterminate
                            color="primary"
                    ></v-progress-circular>
                </v-overlay>
            </div>

            <v-snackbar
                    v-model="snackbar"
                    :color="snackbarColor"
                    :timeout="2000"
            >
                {{ text }}
            </v-snackbar>

            <div>
                <v-btn
                        class="registerTXT2"
                        style="margin-top: 15px; height: 50px;
                        font-family: 'IranianSansBlack', sans-serif"
                        :style="{'width' : inputWidth}"
                        color="primary"
                        @click="validateOTP"
                >
                    تایید کد
                </v-btn>
            </div>
        </div>

    </v-container>
</template>

<script>


import axios from "axios";
import {mapMutations} from "vuex";

export default {
    name: "validatePhoneNumber",
    data() {
        return {
            loading: false,
            snackbar: false,
            snackbarColor: 'default',
            otp: '',
            text: '',
        }
    },
    computed: {
        inputWidth() {
            if (this.$vuetify.breakpoint.xs) {
                return '90%';
            } else {
                return '300px'
            }
        },
        phoneNumber() {
            return this.$store.getters.getPhoneNumber
        }
    },
    methods: {
        ...mapMutations(['setUserID', "setToken"]),
        validateOTP(){
            this.loading= true
            axios.post(`${this.$store.getters.getServerAddress}/login`, {phone_number : this.phoneNumber , otp : this.otp})
                .then(response => {
                    this.setUserID(response.data.userId)
                    this.setToken(response.data.token)
                    console.log(response)
                })
                .catch(err => console.log(err))
        }
    },

}
</script>

<style scoped>
.position-relative {
    position: relative;
}
@font-face {
  font-family: IranianSansBlack;
  src: url('../../fonts/IRANSansXBold.ttf') format('truetype');
}

*{
  direction: rtl;
}

.registerTXT2{

    /* RTL/Desktop/Body 3 */

    font-family: 'My Iranian Sans', 'IranSansX', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */

    text-align: center;



    color: #5B5C5F;
}
</style>
