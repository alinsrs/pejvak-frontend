<template>
  <v-container fluid>
    <header>
      <v-row class="mt-1">
        <v-col>
          <v-btn style="background: transparent;"
                 class="elevation-0"
          >
            <v-icon x-large> mdi-menu </v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-left">
          <v-btn style=" background: transparent;"
                 class="elevation-0"
          >
            <v-icon
                x-large
            >
              mdi-account-outline
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </header>

    <v-row class="mt-10 mx-3">
      <v-col cols="12" md="6" lg="4" class="mb-7">
        <v-img src="../../assets/online-donate.png" @click="$router.push('/electrical-bank')" style="cursor: pointer"></v-img>
      </v-col>

      <v-col cols="12" md="6" lg="4" class="mb-7">
        <v-img src="../../assets/physical-donate.png" @click="$router.push('/physical-bank')" style="cursor: pointer"></v-img>
      </v-col>

      <v-col cols="12" md="6" lg="4" class="mb-7">
        <v-img src="../../assets/buy-flower.png" @click="$router.push('/order-flower')" style="cursor: pointer"></v-img>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "khadamat",
  data() {
    return {}
  },

}
</script>

<style scoped>

</style>