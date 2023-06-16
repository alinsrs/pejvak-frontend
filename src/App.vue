<template>
  <v-app app
         :style="{'background-color': $vuetify.theme.currentTheme.background}">

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
    methods: {

    },

  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar{
    width: 0;
}
</style>
