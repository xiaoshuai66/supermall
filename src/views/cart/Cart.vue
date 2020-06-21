<template>
  <div class="cart">
    <nav-bar class="nav-bar"> 
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
      <cart-list :cart-list="list" class="cart-list"/>
      <cart-bottom-bar />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  .cart {
    width: 100vw;
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
  .cart-list {
    height: calc(100% - 44px - 49px - 44px);
    overflow: hidden;
  }
</style>
