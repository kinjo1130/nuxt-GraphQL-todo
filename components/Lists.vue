<template>
  <div>
    <v-list v-for="(todoList, index) in todoLists" :key="todoList.id" flat outlined rounded class="mb-4">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ todoList.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ todoList.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div>
        <div v-if="todoList.isEdit === null" class="d-flex justify-end">
          <Dialogs :tasks="todoLists" :index="index" @delete="deletetodo" />
          <v-btn depressed color="primary" @click="todoList.isEdit = true"> 編集 </v-btn>
        </div>
        <div v-else-if="todoList.isEdit === true">
          <v-text-field v-model="todoList.name" type="text" />
          <v-text-field v-model="todoList.description" type="text" />
          <div class="d-flex justify-end">
            <v-btn
              depressed
              color="primary"
              @click="updatetodo(todoList.id, todoList.name, todoList.description), (editFlag = false)"
            >
              更新する
            </v-btn>
          </div>
        </div>
      </div>
    </v-list>
    <h2>storeから</h2>
    <v-list v-for="(todo, index) in todos" :key="todo.id" flat outlined>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{ todo.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ index }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    todoLists: {
      type: Array,
      default: ""
    },
    dialog: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editFlag: false,
      name: "",
      description: "",
      todos: this.$store.state.todos
    };
  },
  methods: {
    deletetodo(index, todoId) {
      this.$emit("delete", index, todoId);
      console.log(index);
      console.log(todoId);
    },
    updatetodo(todoId, name, description) {
      this.$emit("update", todoId, name, description);
    }
  }
};
</script>
