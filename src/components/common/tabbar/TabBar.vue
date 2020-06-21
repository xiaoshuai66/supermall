<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
		name: 'TabBar'
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f3f3f3;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -5px 2px rgba(110, 110, 110, 0.1);
  }
</style>
