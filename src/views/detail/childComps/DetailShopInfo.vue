<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td><span class="score" :class="{'high-score': item.isBetter}">{{item.score}}</span></td>
            <td><span class="better" :class="{'high-better': item.isBetter}">{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter(value) {
        if(value < 10000) return value;
        return (value/10000).toFixed(1) + '万';
      }
    }
  }
</script>

<style scoped>
.shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

.shop-top {
  /* text-align: center; */
  display: flex;
  padding: 5px;
  align-items: center;
  line-height: 45px;
  margin-bottom: 15px;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(0,0,0,.1);
}

.shop-top span {
  font-size: 20px;
  /* vertical-align: center; */
}

.shop-middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shop-middle-left {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
}

.info-sells {
  text-align: center;
  font-weight: bold;
}

.info-sells .sells-count {
  padding-bottom: 5px;
  font-size: 17px;
}

.info-sells .sells-text {
  font-size: 11px;
  font-weight: bold;
}

.info-goods {
  text-align: center;
  font-weight: bold;
}

.info-goods .goods-count {
  padding-bottom: 5px;
  font-size: 17px;
}

.info-goods .goods-text {
  font-size: 11px;
  font-weight: bold;
}

.shop-middle-right {
  padding-left: 20px;
  border-left: 2px solid rgba(187, 187, 187, .5);
  justify-content: flex-end;
  font-size: 12px;
}
.shop-middle-right td {
  padding: 3px;
}
.shop-middle-right .score {
  color: rgb(45, 194, 95);
}

.shop-middle-right .better {
  color: #fff;
  background-color:  rgb(45, 194, 95);
  padding: 1px;
}

.shop-middle-right .high-score {
  color: #e65d5d;
}

.shop-middle-right .high-better {
  background-color: #e65d5d;
}

.shop-bottom {
  text-align: center;
  padding: 20px;
  margin-bottom: -20px;
}

.shop-bottom .enter-shop {
  background-color: #ebebeb;
  padding: 5px 30px;
  display: inline-block;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid rgba(194, 194, 194, 0.5);
  letter-spacing: 3px;
}

</style>