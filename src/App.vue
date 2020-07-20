<template>
  <div id="app">
      <header>
        <h1 class="center">
            Simple GitHub finder
        </h1>
      </header>

        <SearchInput
          @updateInfo = 'setInfo'
        />

        <UserInfo 
          v-if="info.id"
          :info = "info" 
        />

        <UserRepo
          v-if="info.repositories"
          :repos = "info.repositories"
        />

  </div>
</template>

<script>
import store from "@/store"

import SearchInput from "@/components/SearchInput"
import UserInfo from "@/components/UserInfo"
import UserRepo from "@/components/UserRepo"



export default {
  name: 'App',
  store,
  components: {
    SearchInput, UserInfo, UserRepo
  },

  data(){
    return {
      info: {}
    }
  },


  methods: {
    setInfo(info){
      this.info = info;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center{
  text-align: center;
}
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
