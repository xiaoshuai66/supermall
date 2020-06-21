<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="goodsItem.src" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'GoodListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad');
      },
      itemClick() {
        // this.$router.push({
        //   path: '/detail',
        //   query: {
        //     id: 10
        //   }
        // });
        // this.$router.push('/detail/' + this.goodsItem._id)
        let id = parseInt(Math.random() * 10) > 5 ? 1 : 2;
        this.$router.push('/detail/' + id);
      }
    },
  }
</script>

<style scoped>
.goods-item {
  position: relative;
  padding-bottom: 10px;
  width: 45%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-item p {
  overflow: hidden;
  text-align: center;
  font-size: 14px;
}

</style>