<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          削除する
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          本当に削除しますか？
        </v-card-title>
        <v-card-text>
          {{ tasks[index].name }}
        </v-card-text>
        <v-divider />

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">
            いいえ、削除しない
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialogDelete(index, tasks[index].id), (dialog = false)"
          >
            はい、削除する
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <pre>{{ tasks }}</pre>
    <pre>{{ index }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    dialogDelete(index, todoId) {
      this.$emit('delete', index, todoId)
    },
  },
}
</script>
