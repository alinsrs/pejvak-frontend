<template>
    <v-container fluid>
        <header class="mb-8">
            <div class="txtBold" style="display: flex;">
                <v-icon x-large style="color: black;"
                        to="/khadamat"
                        class="ml-3"
                >
                    mdi-arrow-right
                </v-icon>
                <div class="">
                    ثبت درخواست
                </div>
            </div>
        </header>

        <v-row class="mr-2 ml-2 txtRegular">
            <v-col cols="12" md="6" xl="6"
            >
                <div> عنوان قلک</div>
                <v-text-field
                        class="mt-4"
                        height="50px"
                        outlined
                        style="border-radius: 15px"
                        hide-details
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md="6" xl="6"
            >
                <div> نوع قلک</div>
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
            <v-col cols="12" md="6" xl="6"
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
            <v-col cols="12" md="6" xl="6"
            >
                <div> ساعت تحویل</div>
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
            <v-col cols="12" md="6" xl="6"
            >
                <div> آدرس </div>
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

            <v-col cols="12" md="4" lg="6" class="text-center">
                <v-btn style="border-radius: 12px; color: white; position: fixed; bottom: 5%; left: 5%; width: 90%"
                       :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                       height="50px"
                >
                    ثبت درخواست
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import vuetify from "@/plugins/vuetify";

export default {
    name: "physical-bank-req",
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