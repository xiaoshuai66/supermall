<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll"
    :probe-type="3"
    @scroll="contentScroll">
      <detail-swiper :topImages="topImage" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info ref="params" :goodsImage="goodsImage" @imgLoad="imgLoad" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="goods" :goods="goodsList" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
    <!-- <toast :message="message" :show="show" /> -->
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue';
  import DetailSwiper from './childComps/DetailSwiper.vue';
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
  import DetailShopInfo from './childComps/DetailShopInfo.vue';
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
  import DetailBottomBar from './childComps/DetailBottomBar.vue';

  import Scroll from 'components/common/scroll/Scroll.vue';
  import GoodsList from 'components/content/goods/GoodsList.vue';
  // import Toast from 'components/common/toast/Toast.vue';

  import {getDetail, detail_shop, Goods, Shop} from 'network/detail.js';
  import {getHomeGoods} from 'network/home.js';
  import {itemListenerMixin, listenBackTop} from 'common/mixin.js';
  import {debounce} from 'common/utils.js';

  import { mapActions } from 'vuex';

  export default {
    name: 'Detail',
    data() {
      return {
        id: 0,
        topImage: [],
        goods: {},
        shop: {},
        goodsImage: [],
        commentInfo: {},
        goodsList: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        // message: '',
        // show: false
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    mixins: [itemListenerMixin, listenBackTop],
    created() {
      // this.id = this.$route.query.id;
      this.id = this.$route.params.id;

      getDetail(this.id)
      .then(res => {
        this.topImage = res.topImage;
        this.goodsImage = res.topImage;
        this.goods = new Goods(res.content.itemInfo,res.content.columns, res.content.services);
      });
      detail_shop()
      .then(res => {
        this.commentInfo = res.commentInfo;
        this.shop = new Shop(res.shopInfo);
      })
      getHomeGoods('pop', 2)
      .then(res => {
        this.goodsList = res.list;
      })

      this.getThemeTopY = debounce(() => {  //获取组件高度的防抖
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.goods.$el.offsetTop - 44);
        this.themeTopYs.push(Number.MAX_VALUE);

      }, 100)
    },
    destroyed() {
      //取消该事件的监听
      this.$bus.$off('itemImageLoad', this.itemImgListener);
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoad() {
        // debounce(this.$refs.scroll.refresh, 50);
        this.newRefresh();
        // this.$refs.scroll.refresh()

        this.getThemeTopY();
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 400)
      },
      contentScroll(position) {
        
        let positionY = -position.y;
        let length = this.themeTopYs.length;

        for(let i = 0; i < length - 1; i++) {
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
        this.is_show(position);
      },
      addToCart() {
        const product = {};
        product.img = 'http://127.0.0.1:5000/public/cw2.webp';
        product.title = '我的青春恋爱物语果然有问题第二季';
        product.iid = parseInt(Math.random()*10) > 5 ? 1 : 2;
        product.price = 998;
        product.desc = '只要998，把她带回家';
        
        // this.$store.dispatch('addCart', product);
        this.addCart(product).then(res => {
          
          this.$toast.show(res);
          // this.message = res,
          // this.show = true;

          // setTimeout(() => {
          //   this.message = '',
          //   this.show = false;
          // }, 1500)
        })
      }
    },
  }
</script>

<style scoped>
.detail {
  position: relative;
  background-color: #fff;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>