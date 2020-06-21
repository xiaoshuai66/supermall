<template>
  <div class="goods" v-if="goods.length !== 0">
    <goods-list-item v-for="(item, index) in goods" :goods-item="item" :key="index">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue';

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* padding-bottom: 55px; */
  }
</style>