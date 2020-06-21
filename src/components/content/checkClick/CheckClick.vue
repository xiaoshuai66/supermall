<template>
  <div class="check-click" :class="{check: isChecked}"> 
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckClick',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
.check-click {
  border-radius: 50%;
  border: 2px solid #aaa;
  background-color: #fff;
  line-height: 15px;
}
.check {
  border: 2px solid red;
  background-color: rgb(238, 135, 135);
}
</style>