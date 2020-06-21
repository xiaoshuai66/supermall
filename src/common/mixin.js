import {debounce} from 'common/utils.js';
import BackTop from 'components/content/backTop/BackTop.vue';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {  //解决上拉有时会卡住的问题
      this.newRefresh();
    }
      this.$bus.$on('itemImageLoad', this.itemImgListener);
  },
}

export const listenBackTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    is_show(position) {
      this.isShowBackTop = (-position.y) > 400 ? true : false;
    }
  },
}