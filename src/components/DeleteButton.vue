<template>
  <v-dialog v-model="dialog" persistent max-width="60vw" max-height="20vh">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="close-button" fab x-small dark v-bind="attrs" v-on="on">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
    <v-card min-height="257px" height="20vh">
      <h5 class="text-h5">¿Seguro que quieres eliminar este video?</h5>
      <v-card-actions class="action-buttons">
        <v-spacer></v-spacer>
        <v-btn
          class="cancel-button"
          text
          color="var(--primary-color)"
          @click="close"
        >
          Cancelar
        </v-btn>
        <v-btn
          class="agree-button"
          color="var(--primary-color)"
          @click="confirmDeletion"
        >
          Eliminar
        </v-btn>
      </v-card-actions>
      <v-btn @click="close" class="close-button" fab small text>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    close() {
      this.dialog = false;
    },
    confirmDeletion() {
      this.$emit("confirmed-deletion", true);
      this.close();
    },
  },
};
</script>
