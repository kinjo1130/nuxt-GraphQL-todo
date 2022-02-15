<template>
  <div>
    <h1>TodoApp</h1>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="description" label="Description"></v-text-field>
    <v-btn @click="createTodo">タスク生成する</v-btn>
    <div>
      <Lists
        :todolists="todos"
        @delete="deleteTodo"
        @update="updateTodo"
      ></Lists>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { createTodo, deleteTodo, updateTodo } from '~/src/graphql/mutations'
import { listTodos } from '~/src/graphql/queries'
export default {
  data() {
    return {
      name: '',
      description: '',
      todos: [],
    }
  },
  async mounted() {
    await this.getTodos()
    //  this.$store.dispatch('changeStore','hoge');
  },
  methods: {
    async createTodo() {
      const { name, description } = this
      if (!name || !description) return false //空追加を防ぐためである
      const todo = { name, description }
      await API.graphql({
        query: createTodo,
        variables: { input: todo },
      }).then(() => {
        this.$store.dispatch('changeStore', todo)
        //console.log('pagesのdes',result.data.createTodo.description)
        console.log(todo)
      })
      //初期化している
      this.name = ''
      this.description = ''
      this.getTodos()
    },
    async deleteTodo(...data) {
      let [index, todoId] = data
      // console.log('todoId検証',todoId)
      // console.log('index検証',index)
      //todoIdはtodo.idと同じである
      await API.graphql({
        query: deleteTodo,
        variables: { input: { id: todoId } }, //ここがあまり何をしているかが理解できない
      })
        .then((result) => {
          //成功したらというやつやね
          //console.log(result);
          this.todos.splice(index, 1)
          //console.log(todoId);
          // console.log(result.data.deleteTodo.name)
          // console.log(result.data.deleteTodo.description)
          this.getTodos() //こいつをかますことで、しっかりと再初期化できる
        })
        //失敗したらというやつやね
        .catch((error) => {
          console.log(error)
        })
    },
    async updateTodo(...data) {
      let [todoId, name, description] = data
      // const { name, description } = this
      //console.log(this)
      await API.graphql({
        query: updateTodo,
        variables: {
          input: {
            id: todoId,
            name: name,
            description: description,
          },
        },
        //ここがあまり何をしているかが理解できない
      })
        .then((result) => {
          //成功したらというやつやね
          console.log(result)
          this.getTodos()
        })
        //失敗したらというやつやね
        .catch((error) => {
          console.log(error)
        })
    },
    async getTodos() {
      const todos = await API.graphql({
        query: listTodos,
      })
      this.todos = todos.data.listTodos.items
    },
  },
}
</script>
