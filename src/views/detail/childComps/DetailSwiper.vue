<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImages" class="item">
        <img :src="item.src" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js';

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .item {
    height: 200px;
  }
  .item img{
    height: 200px;
  }
</style >