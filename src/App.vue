<template>
  <v-app app
         :style="{'background-color': $vuetify.theme.currentTheme.background}"
         style="direction: rtl" lang="fa"
  >
    <v-locate-provider rtl>
      <v-main>
        <router-view/>
      </v-main>
    </v-locate-provider>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {},

  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
