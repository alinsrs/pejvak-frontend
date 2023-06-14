<template>
    <v-container fluid>
        <v-img
                src="../assets/pejvak-logo.png"
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
            photo will come here
        </div>

        <div :style="{'width': inputWidth}" class="text-center mx-auto" style="margin-top: 20px">
            <div class="ma-auto position-relative" style="max-width: 300px">
                <v-otp-input
                        v-model="otp"
                        :disabled="loading"
                        @finish="onFinish"
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
                        style="margin-top: 15px"
                        :style="{'width' : inputWidth}"
                        color="primary"
                >
                    تایید کد
                </v-btn>
            </div>
        </div>

    </v-container>
</template>

<script>
export default {
    name: "validatePhoneNumber",
    data() {
        return {
            loading: false,
            snackbar: false,
            snackbarColor: 'default',
            otp: '',
            text: '',
            expectedOtp: '133707',
        }
    },
    computed: {
        inputWidth() {
            if (this.$vuetify.breakpoint.xs) {
                return '90%';
            } else {
                return '300px'
            }
        }
    },
    methods: {
        onFinish(rsp) {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
                this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`
                this.snackbar = true
            }, 3500)
        }
    },

}
</script>

<style scoped>
.position-relative {
    position: relative;
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