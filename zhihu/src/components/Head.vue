<template>
  <div class="head-box">
    <div class="time">
      <div>{{timeNow.day}}</div>
      <div>{{timeNow.month}}</div>
    </div>
    <h1>知乎日报</h1>
    <div class="head-pic">
      <img :src="state.pic" @click="toHome"/>
    </div>
  </div>
</template>
<script setup>
import {computed, reactive} from "vue";
import image from '../assets/images/timg.jpg'
import {formatTime} from "@/assets/utils";
import { useRouter } from "vue-router";
const router=useRouter()
const props = defineProps({
  time: {
    type: String,
    default: "",
  }
})
let state = reactive({
  pic: image,
})
const toHome=()=>{
      router.push('/person')
}
let timeNow = computed(() => {
  let time = props.time || null
  let [month, day] = formatTime(time, "{1}-{2}").split("-")
  let monthArr=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
  return {
    month:monthArr[month-1],
    day
  }
})

</script>

<style lang="less" scoped>
.head-box {
  display: flex;
  width: 100%;
  height: 100px;

  .time {
    display: flex;
    flex-direction: column;
    width: 120px;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }

  h1 {
    font-size: 40px;
    line-height: 100%;
    flex: 1
  }

  img {
    width: 100px;
    height: 100%;
    border-radius: 100%;
  }
}
</style>