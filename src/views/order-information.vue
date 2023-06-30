<template>
    <v-container fluid>
        <header class="mb-6">
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

        <div class="txtRegular mr-4" style="font-size: 15px; font-weight: 800; color: black">
            نوع محصول مورد نظر خود را انتخاب فرمایید.
        </div>


        <form>
            <v-row class="mt-4 mx-4">
                <v-col cols="12" sm="12"
                >
                    <div class="mb-3"> تاریخ تحویل</div>
                    <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    outlined
                                    style="border-radius: 15px;"
                                    height="50px"
                                    v-model="date"
                                    append-icon="mdi-calendar"
                                    v-bind="attrs"
                                    v-on="on"
                                    hide-details
                            ></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="date"
                                no-title
                                scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
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
                                    v-model="select"
                                    :items="items"
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
                                    v-model="select"
                                    :items="items"
                                    hide-details
                            ></v-combobox>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="12">
                    <div> آدرس محل ارسال </div>
                    <v-combobox
                            class="mt-3"
                            style="border-radius: 15px;"
                            height="50px"
                            clearable
                            dense
                            hide-selected
                            outlined
                            persistent-hint
                            v-model="select"
                            :items="items"
                            hide-details
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="12">
                    <div class="mb-4">  متن مورد نظر </div>
                    <v-textarea
                        outlined
                        height="100px"
                    style="border-radius: 20px">
                    </v-textarea>
                </v-col>

                <v-col cols="12" sm="12" style="display: flex" class="my-5">
                    <div class="mr-4">  مبلغ قابل پرداخت :</div>
                    <div class="mr-auto ml-4"> {{amount}} تومن</div>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-btn style="border-radius: 12px; color: white; width: 100%;"
                           :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                           height="50px"
                    >
                        ثبت سفارش
                    </v-btn>
                </v-col>

            </v-row>
        </form>

    </v-container>
</template>

<script>
export default {
    name: "order-information",
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        select: [],
        items: [
            'Programming',
            'Design',
            'Vue',
            'Vuetify',
        ],
        amount: 20000000,
    }),
}
</script>

<style scoped>

@font-face {
    font-family: 'My Iranian Sans';
    src: url('../fonts/IRANSansXBlack.ttf') format('truetype');
}

@font-face {
    font-family: regularIranSans;
    src: url("../fonts/IRANSansXMedium.ttf") format('truetype');
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