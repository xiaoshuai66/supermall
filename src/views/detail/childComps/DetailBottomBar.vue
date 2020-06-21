<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="~assets/img/detail/kefu.svg" class="icon" alt="">
        <span class="text">客服</span>
      </div>
      <div>
        <img src="~assets/img/detail/dianpu.svg" class="icon shop" alt="">
        <span class="text">店铺</span>
      </div>
      <div>
        <img src="~assets/img/detail/shoucang.svg" class="icon" alt="">
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <span class="cart" @click="addToCart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() {
        this.$emit('addCart');
      }
    },
  }
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  height: 49px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  z-index: 10;
}
.bar-left {
  flex: 1;
}
.bar-right {
  flex: 1;
}
.bar-item {
  display: flex;
  justify-content: space-between;
}
.bar-item div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* border: 1px solid #000; */
  justify-content: center;
  align-items: center;
  flex: 1;
}
.bar-item .text {
  font-size: 13px;
}
.bar-item .icon {
  width: 26px;
  height: 26px;
}
.bar-item .shop {
  width: 30px;
  height: 30px;
}
.bar-right {
  display: flex;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}
.bar-right .cart {
  flex: 1;
  background-color: rgb(236, 255, 128);
}
.bar-right .buy {
  flex: 1;
  background-color: rgb(247, 141, 141);
  color: #fff;
}
</style>