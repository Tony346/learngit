<template>
    <van-nav-bar title="修改信息" left-text="返回" left-arrow @click="handle1" />
    <van-cell-group inset>
        <van-field v-model="db.name" label="用户名" placeholder="请输入用户名" />
    </van-cell-group>
    <div class="file-box">
    <van-uploader v-model="db.fileList" multiple />
    </div>
    <van-button type="primary" size="large">修改个人信息</van-button>
</template>

<script setup>
import { reactive,onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {userInfo} from '@/api/index'
const router = useRouter()
const store=useStore()
console.log(store.state);
const db = reactive({
    filelist: [],
    name: ''
})
const handle1 = () => {
    router.go('-1')
}
onBeforeMount(async()=>{
    let {code,data}=await userInfo('/user_info','get')
    db.name=data.name
    console.log(data.name);
})
</script>
<style lang="less" scoped>
.file-box {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>