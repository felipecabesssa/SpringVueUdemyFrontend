<template>
  <div class="principal">
    <div class="principal">
      <h1>Products</h1>

      <div>
        <ul>
          <li>
            <div class="dados" id="id"><strong>Id</strong></div>
            <div class="dados" id="descricao"><strong>Nome</strong></div>
            <div class="dados" id="amount"><strong>Estoque</strong></div>
            <div class="dados" id="price"><strong>Preço</strong></div>
          </li>
        </ul>
      </div>

      <div v-for="producto in products" :key="producto.id">
        <ul>
          <li>
            <div class="dados" id="id">{{ producto.id }}</div>
            <div class="dados" id="name">{{ producto.name }}</div>
            <div class="dados" id="amount">{{ producto.amount }}</div>
            <div class="dados" id="price">{{ dinheiro(producto.price) }}</div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      products:{}
    }
  },
  methods:{

    getProducts(){
      axios
        .get('http://localhost:8081/products')
        .then((resp) => {
        this.products = (resp.data)
      })
    },

    dinheiro(valor){
      return 'R$ ' + valor.toFixed(2)
    }
  },

  created(){
    this.getProducts()
  }

}
</script>

<style lang="scss" scoped>
  .principal{
    padding: 1%;
    padding-top: 0.1%;
    margin-top: -1%;
    ul{
      list-style: none;
      li{
        display: flex;
        justify-content: space-between;
        border: solid 1px grey;
        padding: 1%;
      }
      .dados{
        padding: 0.7%;
        border-left: solid 1px grey;
        border-right: solid 1px grey;
      }
      #id{
        min-width: 10%;
      }
      #name{
        min-width: 35%;
        color: #42b983;
      }
      #descricao{
        min-width: 35%;
      }
      #amount{
        min-width: 10%;
      }
      #price{
        min-width: 14%;
      }
    }
  }

</style>
