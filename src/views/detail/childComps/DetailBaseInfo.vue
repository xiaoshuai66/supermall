<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="(item, index) in goods.columns" :key="item">{{item}}</span>
    </div>
    <div class="info-service">
      <span v-for="(item, index) in goods.services" :key="item">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
.base-info div {
  padding: 5px 3px;
}

.info-title {
  font-weight: bold;
}
.info-price .n-price {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 12px;
  color: rgb(167, 167, 167);
  text-decoration: line-through;
}
.info-price .discount {
  display: inline-block;
  font-size: 10px;
  /* font-weight: bold; */
  color: rgba(255, 255, 255, 0.979);
  background-color: var(--color-high-text);
  width: 60px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 13px;

  position: relative;
  bottom: 10px;
}

.info-other {
  display: flex;
  font-size: 12px;
  color: rgba(153, 153, 153, 0.973);
  justify-content: space-between;
  margin: 5px 8px;
  border-bottom: 2px solid #eee;
}
.info-service {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  margin: 8px;
}
</style>