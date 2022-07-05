import { createStore } from 'vuex'
import {userInfo,checkIsLogin} from '@/api/index.js';
export default createStore({
  state: {
    isLogin: null,
    info: null,
  },
  getters: {
  },
  mutations: {
    changeIsLogin(state, bool) {
      state.isLogin = bool;
    },
    changeInfo(state, payload) {
      state.info = payload;
    },
  },
  actions: {
    async changeIsLoginAsync({commit}){
      let bool=false
      let {code}=await checkIsLogin('/check_login','get') 
      if(+code===0) bool=true
      commit('changeInfo',data)
    },
    async changeInfoAsync({commit}){
        let {code,data}=await userInfo('/user_info')
        console.log('11');
        if(+code===0) {
          commit('changeInfo',data)
        }
    }
  },
  modules: {
  }
})
