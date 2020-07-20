import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async getUserInfo( state , username){
      try {     
        const userInfo = await fetch(` https://api.github.com/users/${username} `);
        const userRepo = await fetch(` https://api.github.com/users/${username}/repos `);
        return {
          ...await userInfo.json(), 
          repositories: {...await userRepo.json()}
        }
      }catch(e){
        console.log(e);
      }
      
    }
  },
})
