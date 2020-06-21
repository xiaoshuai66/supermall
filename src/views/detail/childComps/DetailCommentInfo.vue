<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {formatDate} from 'common/utils.js';
 
  export default {
    name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object
      }
    },
    filters: {
      showDate(value) {
        let time = value.valueOf()
        return formatDate(new Date(time), 'yyyy-MM-dd HH:mm:ss');
      }
    }
  }
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-header {
  display: flex;
  justify-content: space-between;
  /* padding: 10px 5px;
  margin: 20px 10px; */
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid rgba(204, 204, 204, .5);
}
.header-title {
  font-size: 15px;
  /* font-weight: 500; */
}

.header-more {
  font-size: 13px;
}

.info-user {
  display: flex;
  align-items: center;
  padding: 10px 0 5px;
  font-size: 15px;
}


.info-user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.info-detail {
    padding: 0 5px 15px;
  }

.info-detail p {
  margin: 10px 0;
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  font-size: 12px;
  color: #999;
}
.date {
  margin-right: 8px;
}
</style>