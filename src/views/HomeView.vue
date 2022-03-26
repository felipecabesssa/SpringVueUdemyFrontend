<template>
  <div class="home">
    <img src="./../assets/trade.png">
    <div class="items">
      <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Categorias</div>
        <div class="card-body">
          <h5 class="card-title">Categories</h5>
          <p class="card-text">lista as categorias</p>
        </div>
      </div>
      <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Produtos</div>
        <div class="card-body">
          <h5 class="card-title">Products</h5>
          <p class="card-text">lista dos produtos</p>
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
  .items{
    max-width: 50%;
  }
}
</style>
