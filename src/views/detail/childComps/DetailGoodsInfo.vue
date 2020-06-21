<template>
  <div class="goods-info">
    <div class="goods-text">
      <div class="start"></div>
      <div class="text">只要998把她带回家，既可么么哒，又能XXX！！！</div>
      <div class="end"></div>
    </div>
    <div class="goods-img">
      <div v-for="item in goodsImage">
        <img :src="item.src" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailGoodsInfo',
    data() {
      return {
        imageLength: 0,
        counter: 0
      }
    },
    props: {
      goodsImage: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        // if(++this.counter === this.imageLength)
        // this.$emit('imgLoad');
        this.$emit('imgLoad')
      }
    },
    watch: {
      goodsImage() {
        this.imageLength = this.goodsImage.length;
      }
    },
  }
</script>

<style scoped>
.goods-info {
  margin: 10px 0;
}
.goods-img {
  display: flex;
  flex-wrap: wrap;
}
.goods-img img {
  width: 100vw;
  padding: 0 5px;
}

.goods-text {
  /* height: 40px; */
  margin: 15px 0;
  padding: 0 15px;
}

.text {
  font-size: 13px;
  padding: 20px 5px;
}

.start, .end {
  height: 1px;
  width: 100px;
  background-color: #000;
  position: relative;
}

.start {
  float: left;
}

.end {
  float: right;
}

.start::before, .end::after {
  content: '';
  background: #000;
  width: 5px;
  height: 5px;
  position: absolute;
}

.end::after {
  right: 0;
  bottom: 0;
}

</style>