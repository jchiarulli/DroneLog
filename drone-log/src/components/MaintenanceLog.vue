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
        { text: "Replacement Date", value: "replacementDate" },
        { text: "Replacement Complete", value: "complete" },
      ],
      actions: [
        {
          action: "Battery Replacement",
          lastActionDate: new Date(2020, 10, 24, 10, 0, 0, 0),
          replacementDate: new Date(2020, 11, 24, 10, 0, 0, 0),
          complete: false,
        },
        {
          action: "Motor Replacement",
          lastActionDate: new Date(2020, 10, 24, 10, 0, 0, 0),
          replacementDate: new Date(2018, 11, 24, 10, 0, 0, 0),
          complete: false,
        },
        {
          action: "Propeller Replacement",
          lastActionDate: new Date(2020, 10, 24, 10, 0, 0, 0),
          replacementDate: new Date(2018, 11, 24, 10, 0, 0, 0),
          complete: false,
        },
      ],
    };
  },
};
</script>
