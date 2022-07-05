<template>
    <div class="content"  v-html="state.detailList.body"></div>
       
    <div class="nav-box">
        <van-icon class="icon" name="arrow-left" @click="backHome"></van-icon>
        <van-icon class="icon" name="comment-o" badge="56"></van-icon>
        <van-icon class="icon" name="good-job-o" badge="1"></van-icon>
        <van-icon class="icon" name="star-o" color="#000"></van-icon>
    </div>
</template>

<script setup>
import { reactive,onBeforeMount } from 'vue';
import {queryNewsDetail,queryNewsExtra} from '@/api/index'
import {useRouter,useRoute} from 'vue-router'
const router=useRouter()
const route=useRoute()
let state = reactive({
    active: 0,
    detailList:{},

})
onBeforeMount(async ()=>{
     state.detailList=await queryNewsDetail('/news_info','get',{id:route.params.id})
     console.log(state.detailList);
    //   动态引入css
     let link=document.createElement("link")
     link.id="link"
     link.rel="stylesheet"
     link.href=state.detailList.css[0]
})
const backHome=()=>{
    router.back('-1')
}
</script>

<style lang="less" scoped>
.nav-box {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100vw;
    height: 100px;
    justify-content: center;
    background-color: gainsboro;
    .icon{
        flex:1
    }
}
</style>