<template>
  <div class="bottom-bar">
    <div class="check-all" @click="selectAll">
      <check-click class="check-btn" :isChecked="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{totalPrice}}</div>
    <div class="calculate" @click="buyClick">去购买({{checkLength}})</div>
  </div>
</template>

<script>
  import CheckClick from 'components/content/checkClick/CheckClick.vue'

  import {SELECT_ALL} from '@/store/mutation-types.js'

  import {mapGetters} from 'vuex'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckClick
    },
    computed: {
      ...mapGetters({
        list: 'cartList'
      }),
      totalPrice() {
        
        return '￥' + this.list
        .filter(item => item.checked === true)
        .reduce((total, item) => {
          return total + item.count * item.price
        }, 0)
        .toFixed(2)
      },
      checkLength() {
        return this.list.filter(item => item.checked === true).length;
      },
      isSelectAll() {
        // if(this.list.length === 0) return false
        // return !this.list.some(item => item.checked === false)
        return this.list.length === 0 ? //为了使其在刚开始没有商品时，不是被选中状态
        false : !this.list.some(item => item.checked === false)
      }
    },
    methods: {
      selectAll() {
        
        if(this.isSelectAll) {
          this.$store.commit(SELECT_ALL, false);
        }else {
          this.$store.commit(SELECT_ALL, true);
        }
      },
      buyClick() {
        if(!this.list.some(item => item.checked === true)) {
          this.$toast.show('请先选中所需商品再进行购买!')
        }
      }
    },
  }
</script>

<style scoped>
  .bottom-bar {
    height: 44px;
    padding: 5px 0 5px;
    font-size: 14px;
    
    background-color: rgba(233, 233, 233, .5);
    
    display: flex;
    align-items: center;
  }
  .check-all {
    display: flex;
    
    width: 70px;
    margin-left: 5px;
  }
  .check-all span {
    margin-top: 2px;
  }
  .check-btn {
    margin-right: 5px;
  }
  .price {
    flex: 1;
  }
  .calculate {
    width: 90px;
    line-height: 44px;
    text-align: center;
    
    color: #fff;
    background-color: rgb(255, 116, 107);
  }
</style>