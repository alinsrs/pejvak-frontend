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
      ثبت اطلاعات هویتی
    </div>

    <div class="registerTXT2" style="margin-top: 20px">
      حساب کاربری شما ایجاد شد، برای امکان فعالیت در پژواک اطلاعات زیر را با دقت تکمیل کنید.
    </div>

    <div style="font-family: 'My Iranian Sans', sans-serif" class="mt-8 mx-auto"
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
            v-model="firstName"
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
            v-model="lastName"
        ></v-text-field>
      </div>

      <div class="text-right">
        تاریخ تولد
      </div>
      <v-row>
        <v-col>
          <v-select
              style="margin-top: 10px; direction: ltr; border-radius: 12px"
              :items="Array.from({length: 113}, (value, index) => 1290 + index).reverse()"
              label="سال"
              outlined
              v-model="birthYear"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
              style="margin-top: 10px; direction: ltr; border-radius: 12px"
              :items="Array.from({length: 12}, (value, index) => 1 + index)"
              label="ماه"
              outlined
              v-model="birthMonth"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
              style="margin-top: 10px; direction: ltr; border-radius: 12px"
              :items="Array.from({length: 31}, (value, index) => 1 + index)"
              label="روز"
              outlined
              v-model="birthDay"
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
            outlined
            v-model="eMail"
        ></v-text-field>
      </div>


      <v-row class="" style="height: 80px;">
        <v-col class="text-center">
          <v-btn
              class="registerTXT2"
              style="width: 100%; height: 100%; border-radius: 12px; font-size: 20px !important;"
              color="primary"
              @click="signUp"
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
import axios from "axios";

export default {
  name: "registerForm",
  mounted() {
    axios.get(`${this.$store.getters.getServerAddress}/provinces`).then(response => {
      this.regions = response.data.content
    })
  },
  data() {
    return {
      region: undefined,
      city: undefined,
      firstName: undefined,
      lastName: undefined,
      birthDay: undefined,
      birthMonth: undefined,
      birthYear: undefined,
      eMail: undefined,
    }
  },
  computed: {
    inputWidth() {
      if (this.$vuetify.breakpoint.xs) {
        return "90%"
      } else {
        return "300px"
      }
    },
    birthDate() {
      return this.birthYear + '-' + this.birthMonth + '-' + this.birthDay
    }
  },

  methods: {
    signUp() {
      axios.patch(`${this.$store.getters.getServerAddress}/users/${this.$store.getters.getUserId}`, {
        firstName: this.firstName,
        lastName: this.lastName,
        birthDate: this.birthDate,
        email: this.eMail,
        provinceId: this.regions.filter(item => item.name === this.region)[0].id,
        cityId: this.cities.filter(item => item.name === this.city)[0].id,
        phoneNumber: this.$store.getters.getPhoneNumber,
      }, {
        headers: {
          'Authorization': `Bearer ${this.$store.getters.getToken}`,
          'Content-Type': 'application/json'
        }
      }).then(response => console.log(response)).catch(err => console.log(err))
    },
  },
}
</script>

<style scoped>

@font-face {
  font-family: 'IranSansX';
  src: url('../../fonts/IRANSansXRegular.ttf') format('truetype');
}

@font-face {
  font-family: 'My Iranian Sans';
  src: url('../../fonts/IRANSansXRegular.ttf') format('truetype');
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