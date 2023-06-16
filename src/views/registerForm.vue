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
            ثبت اطلاعات هویتی
        </div>

        <div class="registerTXT2" style="margin-top: 20px">
            حساب کاربری شما ایجاد شد، برای امکان فعالیت در پژواک اطلاعات زیر را با دقت تکمیل کنید.
        </div>

        <div style="overflow-y: auto; overflow-x: hidden; font-family: 'My Iranian Sans', sans-serif" class="mt-8 mx-auto"
             :style="{'width': inputWidth}">
            <div class="text-right">
                نام
            </div>
            <div>
                <v-text-field
                        class="mx-auto"
                        style="margin-top: 10px; border-radius: 12px"
                        color="primary"
                        placeholder="فقط حروف فارسی"
                        outlined
                ></v-text-field>
            </div>

            <div class="text-right">
                نام خانوادگی
            </div>
            <div>
                <v-text-field
                        class="mx-auto"
                        style="margin-top: 10px; border-radius: 12px"
                        color="primary"
                        placeholder="فقط حروف فارسی"
                        outlined
                ></v-text-field>
            </div>

            <div class="text-right">
                تاریخ تولد
            </div>
            <v-row>
                <v-col>
                    <v-select
                            style="margin-top: 10px; direction: ltr; border-radius: 12px"
                            :items="years"
                            label="سال"
                            outlined
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                            style="margin-top: 10px; direction: ltr; border-radius: 12px"
                            :items="months"
                            label="ماه"
                            outlined
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                            style="margin-top: 10px; direction: ltr; border-radius: 12px"
                            :items="days"
                            label="روز"
                            outlined
                    ></v-select>
                </v-col>
            </v-row>

            <div class="text-right">
                ایمیل (اختیاری)
            </div>
            <div>
                <v-text-field
                        class="mx-auto"
                        style="margin-top: 10px; border-radius: 12px"
                        color="primary"
                        placeholder="فقط حروف فارسی"
                        outlined
                ></v-text-field>
            </div>

            <v-row>
                <v-col>
                    <div class="text-right">
                        استان
                    </div>
                    <div>
                        <v-select
                                style="margin-top: 10px; direction: ltr; border-radius: 12px"
                                :items="regions"
                                label="انتخاب کنید"
                                outlined
                        ></v-select>
                    </div>
                </v-col>

                <v-col>
                    <div class="text-right">
                        شهر
                    </div>
                    <div>
                        <v-select
                                style="margin-top: 10px; direction: ltr; border-radius: 12px"
                                :items="cities"
                                label="انتخاب کنید"
                                outlined
                        ></v-select>
                    </div>
                </v-col>
            </v-row>

            <v-row class="" style="height: 80px;">
                <v-col class="text-center">
                    <v-btn
                            class="registerTXT2"
                            style="width: 100%; height: 100%; border-radius: 12px; font-size: 20px !important;"
                            color="primary"
                            to="/khadamat"
                    >
                        ثبت
                    </v-btn>
                </v-col>
                <v-col class="mx-auto text-center">
                    <v-btn
                            class="registerTXT2"
                            style="width: 100%; height: 100%; border-radius: 12px; font-size: 20px !important;"
                            elevation="2"
                            outlined
                            color="primary"
                    >
                        فعلا نه
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "registerForm",
    data() {
        return {
            regions: ['آذربایجان شرقی', 'آذربایجان غربی', 'تهران', 'اصفهان'],
            cities: ['تبریز', 'مراغه', 'میانه', 'اسکو'],
            years: ['1378', '1379', '1380', '1381', '1282'],
            months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            days: ['1', '1', '3', '4', '5', '6', '7', '8', '9', '10']
        }
    },
    computed: {
        inputWidth() {
            if (this.$vuetify.breakpoint.xs) {
                return "90%"
            } else {
                return "300px"
            }
        }
    }
}
</script>

<style scoped>

@font-face {
    font-family: 'IranSansX';
    src: url('../fonts/IRANSansXRegular.ttf') format('truetype');
}

@font-face {
    font-family: 'My Iranian Sans';
    src: url('../fonts/IRANSansXRegular.ttf') format('truetype');
}

* {
    direction: rtl;
}

.registerTXT2 {

    /* RTL/Desktop/Body 3 */

    font-family: 'My Iranian Sans', 'IranSansX', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    /* identical to box height, or 200% */

    text-align: center;


    color: #5B5C5F;
}


</style>