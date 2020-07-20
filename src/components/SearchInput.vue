<template>
  <div class="container">
    <div class="wrapper__search">
      <div class="search">
        <div class="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
      <input type="text" placeholder="Type username..." v-model="username" />
    </div>

    <button class="btn btnPrimary" @click="getInfo">{{again ? 'Search again' : 'Search'}}</button>
  </div>
</template>


<script>
import {mapActions} from 'vuex'

export default {
    name: 'SearchInput',
    data() {
        return {
            username: '',
            again: false
        }
    },

    methods: {
        ...mapActions(["getUserInfo"]),
        async getInfo() {
            if(this.username){
                try{
                    const info = await this.getUserInfo(this.username);
                    this.$emit('updateInfo', info);
                    this.again = true;
                    this.username = '';
                }catch(e){
                    console.log(e);                    
                }
            }
          
        }
    },
}
</script>

<style scoped>
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  min-width: 400px;
  height: auto;
  border: 1px solid grey;
  outline: none;
}
.wrapper__search {
  position: relative;
}
svg {
  color: #e4e4e4;
}
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: flex;
}
.search {
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}

.btn.btnPrimary {
  color: #fff;
  border: 1px solid #494ce8;
  background-color: #494ce8;
}

.btn {
  display: inline-block;
  padding: 0.8em 2em;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 40px;
  outline: none;
}
</style>