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
        :value="infoCategotias.length"
        icon="fa fa-th-large"
        color="#d54d50"
      />

      <Info
        title="Produtos"
        :value="infoProdutos.length"
        icon="fas fa-archive"
        color="#3bc480"
      />

      <Info
        title="Clientes"
        :value="infoClientes.email"
        icon="fas fa-archive"
        color="#3282cd"
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
      infoCategotias: {},
      infoProdutos: {},
      infoClientes: {}
    }
  },
  methods: {
    getInfo() {
      api.get(`/categorias`).then(res => (this.infoCategotias = res.data))
      api.get(`/produtos`).then(res => (this.infoProdutos = res.data))
      api.get(`/clientes`).then(res => (this.infoClientes = res.data))
    }
  },
  mounted() {
    this.getInfo()
  }
}
</script>

<style>
  .info{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
