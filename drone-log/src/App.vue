<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.flyasylon.com/wp-content/themes/asylon/img/logo.svg"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <MaintainenceActionTable />
    </v-main>
  </v-app>
</template>

<script>
import MaintainenceActionTable from "./components/MaintenanceActionTable";

export default {
  name: "App",

  components: {
    MaintainenceActionTable,
  },

  data: () => ({
    //
  }),
};
</script>
