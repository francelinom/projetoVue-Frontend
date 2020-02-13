<template>
  <div>
    <div class="home">
      <PageTitle
        icon="fa fa-home"
        main="Dashboard"
        sub="Base de Conhecimento"
      />
    </div>
    <div class="info">
      <Info
        title="Categorias"
        :value="info"
        icon="fa fa-th-large"
        color="#d54d50"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Info from './Info'
import api from '@/api'

export default {
  name: 'Home',
  components: { PageTitle, Info },
  data: function() {
    return {
      info: {}
    }
  },
  methods: {
    getInfo() {
      api.get(`/categorias`).then(res => (this.info = res.data))
    }
  },
  mounted() {
    this.getInfo()
  }
}
</script>

<style></style>
