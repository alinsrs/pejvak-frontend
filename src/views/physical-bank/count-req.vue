<template>
  <v-container fluid>
    <header class="mb-6">
      <div class="txtBold" style="display: flex;">
        <v-icon x-large style="color: black;"
                @click="$router.push('/bank-details')"
                class="ml-3"
        >
          mdi-arrow-right
        </v-icon>
        <div class="">
          درخواست شمارش
        </div>
      </div>
    </header>

    <div class="txtRegular mr-4" style="font-size: 15px; font-weight: 800; color: black">
      روز و ساعت مورد نظر خود را مشخص کنید.
    </div>


    <form>
      <v-row class="mt-4 mx-4">
        <v-col>
          <date-picker mode="single">
            <template #icon>
              <v-icon>
                mdi-calendar-blank
              </v-icon>
            </template>
          </date-picker>
        </v-col>

        <v-col cols="12" sm="12">
          <v-row class="mx-0">
            <v-col cols="12" sm="6">
              <div> از ساعت</div>
              <v-combobox
                  class="mt-3"
                  style="border-radius: 15px;"
                  height="50px"
                  clearable
                  dense
                  hide-selected
                  outlined
                  persistent-hint
                  v-model="from"
                  :items="Array.from({length: 13}, (value, index) => 8 + index)"
                  hide-details
              ></v-combobox>
            </v-col>
            <v-col cols="12" sm="6">
              <div> تا ساعت</div>
              <v-combobox
                  class="mt-3"
                  style="border-radius: 15px;"
                  height="50px"
                  clearable
                  dense
                  hide-selected
                  outlined
                  persistent-hint
                  v-model="to"
                  :items="Array.from({length: 13}, (value, index) => 8 + index)"
                  hide-details
              ></v-combobox>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12">
          <v-btn style="border-radius: 12px; color: white; width: 100%; margin-top: auto; margin-bottom: 0;
                     bottom: 3%; top: 100%; font-size: 18px"
                 :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                 height="50px"
                 @click="dialog=true"
                 class="txtRegular"
          >
            ثبت درخواست
          </v-btn>
        </v-col>

      </v-row>
    </form>

    <v-dialog
        v-model="dialog"
        width="500"
        style="background-color: #F6EBFF;
            border-radius: 30px;
"
    >
      <v-card
          style="border-radius: 30px"
      >
        <v-card-title class="justify-end">
          <v-icon @click="dialog=false">
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text class="mt-6 mb-8 text-center">
          <v-icon color="#1EA362" size="100" class="mb-6">
            mdi-check-circle
          </v-icon>

          <div class="txtRegular black--text" style="font-size: 20px">
            درخواست شما با موفقیت ثبت شد.
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
              class="mx-auto mb-6 py-8 px-10 txtRegular white--text"
              color="#0072FF"
              @click="dialog = false"
              style="font-size: 16px"
          >
            متوجه شدم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import datePicker from "@alireza-ab/vue-persian-datepicker";

export default {
  name: "count-req",
  components: {
    datePicker
  },
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    from: undefined,
    to: undefined,
    amount: 20000000,
    dialog: false,
  }),
}
</script>

<style scoped>

.rtl {
  direction: ltr;
}

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