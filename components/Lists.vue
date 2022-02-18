<template>
  <v-app>
    <v-list
      flat
      outlined
      rounded
      v-for="(todoList, index) in todoLists"
      :key="todoList.id"
      class="mb-4"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ todoList.name }}</v-list-item-title>
          <v-list-item-subtitle>{{
            todoList.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex justify-end">
        <v-btn depressed @click="deletetodo(index, todoList.id)" color="primary"
          >削除</v-btn
        >
        <div v-if="editFlag === false">
          <v-btn depressed @click="editFlag = true" color="primary">編集</v-btn>
        </div>

        <div v-else>
          <v-text-field type="text" v-model="todoLists[index].name" />
          <v-text-field type="text" v-model="todoLists[index].description" />
          <v-btn
            depressed
            color="primary"
            @click="
              updatetodo(todoList.id, todoList.name, todoList.description),
                (editFlag = false)
            "
            >更新する</v-btn
          >
        </div>
      </div>
      <Dialogs
        :tasks="todoLists"
        :index="index"
        @delete="deletetodo"
      ></Dialogs>
    </v-list>

    <h2>storeから</h2>
    <v-list flat outlined v-for="(todo, index) in todos" :key="todo.id">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ todo.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ index }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      editFlag: false,
      name: '',
      description: '',
      todos: this.$store.state.todos,
    }
  },
  props: {
    todoLists: {
      type: Array,
      default: '',
    },
    dialog: {
      type: String,
      default: '',
    },
  },
  mounted() {
    console.log(this.todoLists)
  },
  methods: {
    hoge() {
      console.log('金城')
    },
    deletetodo(index, todoId) {
      this.$emit('delete', index, todoId)
      console.log(index)
      console.log(todoId)
    },
    updatetodo(todoId, name, description) {
      this.$emit('update', todoId, name, description)
    },
    editTodo(index) {
      console.log(index)
      if (index === 1) {
        this.editFlag = true
      }
    },
  },
}
</script>
