<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main="Administração do Sistema"
      sub="Cadastro & Cia"
    />

    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Categorias" active>
            <CategoriaAdmin/>  
          </b-tab>  

          <b-tab title="Produtos" active>
            <ProdutoAdmin/> 
          </b-tab>

          <b-tab title="Clientes" active>
            <ClienteAdmin/>  
          </b-tab>        
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import CategoriaAdmin from './CategoriaAdmin'
import ClienteAdmin from './ClienteAdmin'
import ProdutoAdmin from './ProdutoAdmin'

export default {
  name: 'AdminPages',
  components: { PageTitle, CategoriaAdmin, ClienteAdmin, ProdutoAdmin }
}
</script>

<style></style>
