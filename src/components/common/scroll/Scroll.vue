<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'Scroll',
    props: {
      probeType: {  //是否实时监听滚动的属性设置
        type: Number,
        default: 0
      },
      pullUpLoad: { //是否需要上拉加载更多
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,  //保存BScroll的实例
        moveState: 0
      }
    },
    mounted() {
      setTimeout(this._initScroll, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
     if(this.probeType === 2 || this.probeType === 3) {
       this.scroll.on('scroll', (position) => {  //监听滚动位置，并发射至父组件
        this.$emit('scroll', position)
      });
     }

     //为什么这里的if语句无效？
     if(this.pullUpLoad) {
       
      this.scroll.on('pullingUp', () => {
        if(this.moveState !== 1) {
        this.$emit('pullingUp');
        }
      });
     }
      },
      scrollTo(x, y, time=300) {  //回到顶部的实现
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      finishPullUp() {  //上拉加载更多的实现
        this.scroll && this.scroll.finishPullUp &&this.scroll.finishPullUp();
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      }
    },
  }
</script>

<style scoped>

</style>