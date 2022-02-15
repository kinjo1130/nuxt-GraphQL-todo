export const state = () => ({
  //ここでデータを定義する
  //stateの値はリロードすると、値が保存されない
  id: '',
  name: '',
  description: '',
  todos:[]
})

export const mutations = {
  changeState(state,todo) {
    state.name = todo.name;
    state.description = todo.description;
    state.todos.push(todo)
  },
}

export const actions = {
  changeStore(context,todo) {
    context.commit('changeState',todo)
  },
}
export const getters = {
  hoge(state) {
    console.log('getters', state.name)

  }
}
