<template>
    <van-nav-bar title="个人中心" left-text="返回" left-arrow @click="handle"/>
    <div class="pic-box">
        <van-image round class="pic" 
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" 
        @click="toUpdate"
        />
    </div>
    <div class="collection">我的收藏</div>
    <div class="loginout">退出登录</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
       const router=useRouter()
       const handle=()=>{
           router.push('/')
       }
       const toUpdate=()=>{
        router.push('/UpdatePerson')
       }
</script>

<style lang="less" scoped>
.pic-box {
    display: flex;
    align-items: center;
    justify-content: center;
    .pic {
        width: 3rem;
        height: 3rem;
    }
}
.collection{
    background-color: gray;
}
.loginout{
    background-color: gray;
}
</style>