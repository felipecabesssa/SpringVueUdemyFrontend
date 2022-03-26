<template>
  <div class="home">
    <img src="./../assets/trade.png">
    <div class="items">
      <div class="card text-white bg-info mb-3" style="max-width: 90%;">
        <div class="card-header">Categorias</div>
        <div class="card-body">
          <h5 class="card-title">Categories</h5>
          <p class="card-text">Os diversos tipos de Produto são divididos em categorias especificas</p>
        </div>
      </div>
      <div class="card bg-light mb-3" style="max-width: 90%;">
        <div class="card-header">Produtos</div>
        <div class="card-body">
          <h5 class="card-title">Products</h5>
          <p class="card-text">Você pode acrescentar no tipo de produto, ou acrescentar, atualizar e deletar produto já existente.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  justify-content: space-around;
  img{
    padding-left: 15px;
    max-width: 45%;
    height: 350px;
  }
  .items{
    max-width: 50%;
  }
}
</style>
