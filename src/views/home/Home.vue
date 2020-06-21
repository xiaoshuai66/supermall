<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行', '精品', '时尚']" 
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
      ></tab-control>
    <scroll class="content" ref="scroll"
     :probe-type="3"
     @scroll="contentScroll"
     :pull-up-load="true"
     @pullingUp="loadMore"
     >
     <div v-for="item in arr">{{item}}</div>
      <home-swiper :banner="banner" ref="hSwiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行', '精品', '时尚']" 
      @tabClick="tabClick"
      ref="tabControl2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendView from './childComps/RecommendView.vue';
  import FeatureView from './childComps/FeatureView.vue';

  import NavBar from 'components/common/navbar/NavBar.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';

  import TabControl from 'components/content/TabControl/TabControl.vue';
  import GoodsList from 'components/content/goods/GoodsList.vue';
  import BackTop from 'components/content/backTop/BackTop.vue';

  import {getHomeMultidata, getHomeGoods} from 'network/home.js'
  import {itemListenerMixin, debounce} from 'common/mixin.js';

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop
    },
    data() {
      return {
        banner: [], //保存轮播图的数据
        recommend: [],  //保存轮播图下面的那个啥的数据
        goods: {      //保存商品列表数据
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',   //设置商品列表默认展示
        isShowBackTop: false,  //保存回到顶部按钮的状态
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
        arr: [],
        reqCount: 1
      }
    },
    mixins: [itemListenerMixin],
    created() {
      this.getHomeMultidata();  //不直接把代码逻辑写在这里，是为了让其逻辑更清晰
     
      this.getHomeGoods('pop');  //获取pop的商品数据
      this.getHomeGoods('new');   //获取new的商品数据
    },
    activated: function () {
      // this.$refs.hSwiper.startTimer();
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      
    },
    deactivated: function () {
      // this.$refs.hSwiper.stopTimer();
      this.saveY = this.$refs.scroll.getScrollY();
      this.$bus.$off('itemImageLoad', this.itemImgListener);
    },
    methods: {
      /**
       *  事件监听相关
       */
      tabClick(index) {   //监听首页商品列表的切换
        if(index === 1) {
          this.currentType = 'new';
        }else 
        this.currentType = 'pop';
        //确保两个组件的一致性
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
        // this.$refs.scroll.moveState = 0;
      },
      backClick() {   //监听回到顶部按钮的点击
        this.$refs.scroll.scrollTo(0, 0);
      },
      contentScroll(position) {   //监听何时显示回到顶部按钮
        this.isShowBackTop = (-position.y) > 400 ? true : false;
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
        // console.log(position);
        
      },
      loadMore() {  //实现上拉加载更多的功能
          this.getHomeGoods(this.currentType);
          this.reqCount++;
      },
      swiperImageLoad() {   //获取分类的高度并保存
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      /**
       * 网络请求相关
       */
      getHomeMultidata() {  //获取首页轮播图等资源
        getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
      },
      getHomeGoods(type) {    //获取首页商品列表
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.list);
          this.goods[type].page += 1;
          //完成上拉加载更多
          // if(this.goods[type].page > 1)
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log('已经加载完了没有数据了哦');
          this.$refs.scroll.finishPullUp();
        })
      }
    },
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control {
    position: relative;
    z-index: 8;
  }

  /* 除了这种方法来固定其高度外，还可以使用css3的某个函数来计算其高度 */

  .content {    
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
