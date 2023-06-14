<template>
  <v-container fluid>
      <v-img
        src="../assets/pejvak-logo.png"
        width="112.88px"
        height="112px"
        class="mx-auto mt-5"
      >
      </v-img>

      <div>
          <div
            class="registerTXT text-center"
          >
              ورود یا ثبت نام
          </div>
          <div
            class="text-center registerTXT2"
          >
              شماره موبایل خود را برای ورود یا ثبت نام وارد کنید
          </div>
      </div>

      <div class="mx-auto text-center" :style="{'width': inputWidth}">
      <div style="color: #5B5C5F; margin-top: 30px;
        font-family: 'My Iranian Sans', sans-serif; font-style: normal; font-size: 14px;
         font-weight: 400; width: 90%" class="text-right mx-auto"
      >
          شماره موبایل
      </div>
          <div>
              <v-text-field
                  class="mx-auto"
                  style="margin-top: 15px"
                  color="primary"
                  :style="{'width' : inputWidth}"
                  outlined
              ></v-text-field>
          </div>
          <div class="text-center">
              <v-btn
                  class="registerTXT2"
                style="margin-top: 15px"
                :style="{'width' : inputWidth}"
                color="primary"
              >
                    ثبت و ادامه
              </v-btn>
          </div>
          <div class="text-center registerTXT2" style="margin-top: 15px">
              ورود شما به معنای پذیرش
              <a href="#" class="registerTXT2"> قوانین پژواک </a>
              است.
          </div>
      </div>

  </v-container>
</template>

<script>

export default {
    name: "loginPage",
    computed:{
        inputWidth(){
            if(this.$vuetify.breakpoint.xs)
                return "90%"
            else
                return '300px'
        },

    }
}
</script>

<style scoped>
*{
direction: rtl;
}

::-webkit-scrollbar{
    width: 0;
}

@font-face {
    font-family: 'My Iranian Sans';
    src: url('../fonts/IRANSansXRegular.ttf') format('truetype');
}

.registerTXT{
    height: 32px;
    left: 113px;

    /* RTL/Mobile/Title 3-a */

    font-family: 'My Iranian Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    /* identical to box height, or 200% */

    text-align: center;

    /* Theme/Text/Bit24/Primary */

    color: #1C1D1F;

    margin-top: 16px;
    margin-bottom: 8px;
}

.registerTXT2{

    /* RTL/Desktop/Body 3 */

    font-family: 'My Iranian Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */

    text-align: center;



    color: #5B5C5F;
}


</style>