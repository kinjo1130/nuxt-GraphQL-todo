<template>
<<<<<<< HEAD
  <v-container>
    <v-flex>
      <div>
        <h1>TodoApp</h1>
        <v-text-field v-model="name" label="やること" outlined />
        <v-text-field v-model="description" outlined label="説明" />
        <div>
          <v-container>
            <v-flex class="d-flex justify-end">
              <v-btn depressed color="primary" @click="createTodo"> タスク生成する </v-btn>
            </v-flex>
          </v-container>
        </div>
        <div>
          <Lists :todo-lists="todos" @delete="deleteTodo" @update="updateTodo" />
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import { API } from "aws-amplify";
import { createTodo, deleteTodo, updateTodo } from "~/src/graphql/mutations";
import { listTodos } from "~/src/graphql/queries";
export default {
  data() {
    return {
      name: "",
      description: "",
      todos: []
    };
  },
  async mounted() {
    await this.getTodos();
    //  this.$store.dispatch('changeStore','hoge');
  },
  methods: {
    async createTodo() {
      const { name, description } = this;
      if (!name || !description) return false; //空追加を防ぐためである
      const todo = { name, description };
      await API.graphql({
        query: createTodo,
        variables: { input: todo }
      }).then(() => {
        this.$store.dispatch("changeStore", todo);
        //console.log('pagesのdes',result.data.createTodo.description)
        console.log(todo);
      });
      //初期化している
      this.name = "";
      this.description = "";
      this.getTodos();
    },
    async deleteTodo(index,todoId) {
      await API.graphql({
        query: deleteTodo,
        variables: { input: { id: todoId } }
      });
      this.todos.splice(index, 1);
      this.getTodos()
      .catch((error) => {
        console.log(error);
      });
    },
    async updateTodo(...data) {
      let [todoId, name, description] = data;
      await API.graphql({
        query: updateTodo,
        variables: {
          input: {
            id: todoId,
            name: name,
            description: description
          }
        }
      })
        .then((result) => {
          console.log(result);
          this.getTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getTodos() {
      const todos = await API.graphql({
        query: listTodos
      });
      this.todos = todos.data.listTodos.items;
    }
  }
};
=======
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
>>>>>>> refs/remotes/origin/main
</script>
