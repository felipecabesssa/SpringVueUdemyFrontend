<template>
  <div class="conteudo">
      <ul>
        <router-link to="/">
            <li><img src="./../assets/fullstack.png" width="100"></li>
          </router-link>
          <router-link class="routerlink" to="/">
            <li>Home</li>
          </router-link>
          <router-link class="routerlink" to="about">
            <li>Sobre nós</li>
          </router-link>
          <router-link class="routerlink" to="/categories">
            <li>Categories</li>
          </router-link>
          <router-link class="routerlink" to="/products">
            <li>Products</li>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conteudo{
  ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    li{
      margin-left: 1%;
      width: 100px;
      list-style: none;
    }
  }
  .routerlink{
    text-decoration: none;
  }
  .routerlink:hover{
    color: #42b983;
  }

}
</style>
