<template>
  <v-app>
    <v-list
      flat
      outlined
      v-for="(todolist, index) in todolists"
      :key="todolist.id"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ todolist.name }}</v-list-item-title>
          <v-list-item-subtitle>{{
            todolist.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div v-if="editflag === false">
        <v-btn @click="editflag = true">編集</v-btn>
      </div>
      <div v-else>
        <v-text-field type="text" v-model="todolist.name" />
        <v-text-field type="text" v-model="todolist.description" />
        <v-btn
          @click="
            updatetodo(todolist.id, todolist.name, todolist.description),
              (editflag = false)
          "
          >更新する</v-btn
        >
      </div>
      <v-btn @click="deletetodo(index, todolist.id)">削除</v-btn>
    </v-list>
      <p>storeから</p>
    <v-list flat
      outlined v-for="todo in todos" :key="todo.id">
       <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{todo.name }}</v-list-item-title>
          <v-list-item-subtitle>{{
         todo.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      editflag: false,
      name: '',
      description: '',
      todos: this.$store.state.todos
    }
  },
  props: {
    todolists: {
      type: Array,
      default: '',
    },
  },
  methods: {
    deletetodo(index, todoId) {
      this.$emit('delete', index, todoId)
    },
    updatetodo(todoId, name, description) {
      this.$emit('update',todoId, name, description)
    },
  },
}
</script>

<style></style>
