<template>
  <div class="item-box" v-for="item in data.newsList" :key="item.id">
    <router-link :to="`/detail/${item.id}`">
      <div class="item-left">
        <div class="title">{{ item.title }}</div>
        <span class="content">{{ item.hint }}</span>
      </div>
      <div class="item-right">
        <img :src="item.images.length === 1 ? item.images[0] : pic" alt="">
      </div>
    </router-link>
  </div>
  <div v-show="data.newsList.length !== 0" ref="loadmore">
    <van-loading size="24px">加载中...</van-loading>
  </div>
</template>

<script setup>
import { queryNewsLatest, queryNewsBefore } from '@/api/index.js';
import imgae from '@/assets/images/timg.jpg'
import { onBeforeMount, onMounted, reactive, ref } from "vue";
const data = reactive({
  pic: imgae,
  time: '',
  timeBefore: '',
  newsList: []
})
let loadmore = ref(null)
onBeforeMount(async () => {
  const { date, stories } = await queryNewsLatest('/news_latest', 'get')
  data.newsList = stories
  data.time = date
  data.timeBefore = (date.time - 1).toString()
  // console.log(date)
})
//加载更多
onMounted(() => {

})
</script>

<style lang="less" scoped>
.item-box {
  display: flex;
  margin-top: 20px;
  position: relative;
  height: 200px;
  align-items: center;
  .item-left {
    position: absolute;
    left: 20px;
    .title {
      width: 400px;
      height: 50px;
      overflow-wrap: break-word;
      font-size: 24px;
    }
    .content {
      font-size: 12px;
    }
  }
  .item-right {
    position: absolute;
    right: 20px;

  }
  img {
    width: 150px;
    height: 150px;
  }
}
</style>