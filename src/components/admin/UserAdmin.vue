<template>
  <div class="user-admin">
      <h1>Usuário componente</h1>
  </div>
</template>

<script>

import api from '@/api'

export default {
    name: 'UserAdmin',
    data: function(){
      return{
        mode: 'save',
        user: {},
        users: []
      }
    },
    methods:{
      loadUsers(){
        api.get('/clientes').then(res =>{
          this.users = res.data
          console.log(this.users)
        })
      }
    },
    mounted(){
      this.loadUsers()
    }
}
</script>

<style>

</style>