export  const  state = () => ({
  token: null,
  login: 'User',
  password: 'e4sm1$Vo3Csj',
  error:false,
  page:false,
})
export  const  mutations = {
  setToken(state, payload) {
    if(payload.login === state.login && payload.password === state.password){
      state.error = false
      state.page= true
      state.token = 'trueToken'
      const date = new Date();
      date.setTime(date.getTime() + (7*24*60*60*1000));
      let expires = date.toUTCString();
      document.cookie = `token = ${state.token}; expires = ${expires}; path=/`;
      this.$router.push('/category');
    }else {
      state.error = true
    }
  },
  clearToken(state) {
    state.token = null
  },
  message(state, payload){
    payload.error = payload
  }
}
export const actions = {
  logIn({commit}, payload){
        commit('setToken', payload)
  },
  logout({commit}){
    commit('clearToken')
  }
}
export const getters = {
  errorMessage: state => state.error,
  getPage: state => state.page
}
