<template>
  <v-container p-20>
    <v-card>
      <v-card-title dark>
        Maintainence Actions
      </v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        dark
        :headers="headers"
        :items="actions"
        :items-per-page="10"
        class="elevation-1"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Actions",
          align: "start",
          sortable: false,
          value: "action",
        },
        { text: "Last Action Date", value: "lastActionDate" },
        { text: "Complete", value: "complete" },
        { text: "Next Action Date", value: "nextActionDate" },
      ],
      actions: [
        {
          action: "Battery Replacement",
          lastActionDate: new Date(2020, 10, 24, 10, 0, 0, 0),
          complete: true,
          nextActionDate: new Date(2020, 11, 24, 10, 0, 0, 0),
        },
        {
          action: "Motor Replacement",
          lastActionDate: new Date(2020, 10, 24, 10, 0, 0, 0),
          complete: true,
          nextActionDate: new Date(2018, 11, 24, 10, 0, 0, 0),
        },
        {
          action: "Propeller Replacement",
          lastActionDate: new Date(2020, 10, 24, 10, 0, 0, 0),
          complete: true,
          nextActionDate: new Date(2018, 11, 24, 10, 0, 0, 0),
        },
      ],
    };
  },
};
</script>
