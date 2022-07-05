<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue">
    <van-swipe-item v-for="item in state.bannerList" :key="item.key">
      <router-link :to="`/detail/${item.id}`" class="mark">
        <img :src="item.image" alt="" class="box-img">
        <div class="content">
          <span>{{ item.title }}</span>
          <span>{{ item.hint }}</span>
        </div>
      </router-link>
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import {queryNewsLatest} from '@/api/index.js';
import {onBeforeMount, reactive} from "vue";

let state = reactive({
  time: '',
  newsList: [],
  bannerList: []
})
//请求数据
onBeforeMount(async () => {
  let {date, stories, top_stories} = await queryNewsLatest('/news_latest', 'get')
  state.time = date
  state.newsList = stories
  state.bannerList = top_stories
})


</script>

<style lang="less" scoped>
.my-swipe {
  height: 600px;
  van-swipe-item {
    height: 100%;
    .mark {
      position: absolute;
      width: 100%;
      .box-img{
        position: relative;
        z-index: -1;
      }
      .content {
        position: absolute;
        z-index: 1;
        left: 0;
        bottom: 0;
        width: 10px;
        height: 200px;
        color: black;
      }
    }
  }

}
</style>