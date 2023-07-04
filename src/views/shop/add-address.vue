<template>
  <v-container>
    <header class="mb-6 mt-3" style="display: flex; height: 3vh">

      <div class="txtBold mr-4" style="font-size: 20px">
        افزودن آدرس جدید
      </div>

      <v-icon class="mr-auto ml-2" color="black"
        @click="$router.push('/order-information')"
      >
        mdi-close
      </v-icon>
    </header>

    <v-form class="mx-2" style="height: 88vh">
      <v-row>
        <v-col>
          <div class="text-right">
            استان
          </div>
          <div>
            <v-select
                style="margin-top: 10px; direction: ltr; border-radius: 12px"
                :items="regions"
                item-text="name"
                label="انتخاب کنید"
                outlined
                v-model="region"
            >
              <template v-slot:item="slotProps">
                {{ slotProps.item.name }}
              </template>

            </v-select>
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
                item-text="name"
                v-model="city"
                label="انتخاب کنید"
                outlined
                :disabled="region === undefined"
            >
            </v-select>
          </div>
        </v-col>
      </v-row>

      <div class="text-right">
        منطقه
      </div>
      <div>
        <v-select
            style="margin-top: 10px; direction: ltr; border-radius: 12px"
            :items="zones"
            item-text="name"
            v-model="zone"
            label="انتخاب کنید"
            outlined
            :disabled="city === undefined"
        >
        </v-select>
      </div>

      <div>
        <div class="text-right">
          آدرس دقیق
        </div>
        <v-textarea
            outlined
            class="mt-5"
            style="border-radius: 20px"
        >
        </v-textarea>
      </div>

      <div>
        <v-btn
            class="txtRegular"
            style="width: 90%; height: 3rem; border-radius: 12px; font-size: 20px !important;
                   position: absolute; bottom: 0px"
            color="primary"
            @click="addNewAddress"
        >
          افزودن آدرس
        </v-btn>
      </div>
    </v-form>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "add-address",
  data() {
    return {
      region: undefined,
      city: undefined,
      zone: undefined,
      regions: [
        {
          id: 1,
          name: "آذربایجان شرقی",
          cities: []
        },
        {
          id: 2,
          name: "آذربایجان غربی",
          cities: []
        },
        {
          id: 3,
          name: "اردبیل",
          cities: []
        }
      ],
      cities: [
        {
          id: 1,
          name: "تبریز"
        },
        {
          id: 2,
          name: "میانه"
        }, {
          id: 3,
          name: "مرند"
        }, {
          id: 4,
          name: "مراغه"
        }, {
          id: 5,
          name: "شبستر"
        }, {
          id: 6,
          name: "جلفا"
        },
      ],
      zones: [
        {
          id: 1,
          name: 'منطقه 1'
        },
        {
          id: 2,
          name: 'منطقه 2'
        }
      ]
    }
  },
  mounted() {
    axios.get(`${this.$store.getters.getServerAddress}/provinces`, {headers: {'Authorization': `Bearer ${this.$store.getters.getToken}`}})
        .then(response => {
      this.regions = response.data.content
    })
    axios.get(`${this.$store.getters.getServerAddress}/provinces/id/cities`, {headers: {'Authorization': `Bearer ${this.$store.getters.getToken}`}})
        .then(response => {
      this.cities = response.data.content
    })
    axios.get(`${this.$store.getters.getServerAddress}/provinces/id/cities/id/zones`, {headers: {'Authorization': `Bearer ${this.$store.getters.getToken}`}})
  },

  methods: {
    addNewAddress() {
      axios.post(`${this.$store.getters.getServerAddress}/addresses`, {address: this.address})
          .then(response => {
            console.log(response)
            this.$router.push('/order-information')
          })
    }
  },

  // watch: {
  //   region(newVal) {
  //     const selectedRegion = this.regions.filter(item => item.name === newVal)[0]
  //     console.log(selectedRegion.id)
  //     axios.get(`${this.$store.getters.getServerAddress}/provinces/${selectedRegion.id}/cities`)
  //         .then(response => {
  //           this.cities = response.data.content
  //         })
  //   },
  // }
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