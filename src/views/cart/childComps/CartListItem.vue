<template>
  <div class="list-item"> 
    <div class="item-check" @click="checkClick">
      <check-click :is-checked="itemInfo.checked"/>
    </div>
    <div class="item-main">
      <div class="item-img">
        <img :src="itemInfo.img" alt="">
      </div>
      <div class="item-info">
        <div class="title">{{itemInfo.title}}</div>
        <div class="desc">{{itemInfo.desc}}</div>
        <div class="item-bottom">
          <div class="price">￥{{itemInfo.price}}</div>
          <div class="count">x{{itemInfo.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckClick from 'components/content/checkClick/CheckClick.vue'

  import {ADD_COUNTER, ADD_TO_CART, ALTER_CHECK} from '@/store/mutation-types.js';

  export default {
    name: 'CartListItem',
    components: {
      CheckClick
    },
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.$store.commit(ALTER_CHECK, this.itemInfo)
      }
    },
  }
</script>

<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100vw;
    border-bottom: 2px solid rgba(223, 222, 222, .5);
    overflow: hidden;
  }
  .item-img  img {
    width: 100px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid rgba(204, 204, 204, .5);
  }
  .item-check {
    margin-right: 5px;
  }
  .item-main {
    display: flex;
    overflow: hidden;
  }
  .item-info {
    font-size: 17px;
    padding: 5px 10px;
    
    color: #333;

    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .item-info div {
    flex: 1;
    line-height: 30px;
  }
  .item-info .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info .desc {
    margin-top: 15px;
    font-size: 14px;
    
    color: #666;
    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-bottom {
    /* display: flex;
    align-items: flex-end; */
    /* justify-content: space-between; */
    margin-top: 10px;
  }
  .item-bottom .price {
    color: orangered;
    float: left;
  }
  .item-bottom .count {
    align-self: flex-end;
    float: right;
  }
</style>