<template>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="登录" left-text="返回" left-arrow @click="onClickLeft" />
    <!-- 表单 -->
    <van-cell-group inset>
        <van-field v-model="state.phone" label="手机号" placeholder="请输入手机号" />
        <van-field v-model="state.code"  
        :disabled="state.enable"
        center clearable label="短信验证码" 
        placeholder="请输入短信验证码">
            <template #button>
                <van-button size="small" type="primary" @click="sendCode">
                {{state.enable?state.time:'获取验证码'}}
                </van-button>
            </template>
        </van-field>
    </van-cell-group>
    <van-button type="primary" size="large" @click="handelLogin">登录/注册</van-button>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import {useStore} from'vuex'
import {phoneCode,login} from '@/api/index'
import {Toast} from 'vant'
const router = useRouter()
const store=useStore()
const state=reactive({
    phone:'',
    code:'',
    enable:false,
    time:10
})
const onClickLeft = () => {
    router.push('/')
}
// 发送验证码
const sendCode= async()=>{
      const {code} =await phoneCode('/phone_code','post',{phone:state.phone})
      state.enable=true
      const timer=setInterval(()=>{
          state.time--
          if(state.time===0){
            clearInterval(timer)
            state.enable=false
            state.time=10
          }
      },1000)

}
// 点击登录
const handelLogin=async ()=>{
    let {code,token}=await login('/login','post',{
        phone:state.phone,
        code:state.code})
     if(+code!==0){
       Toast("登录失败，请重试")
       state.code=""
       return
     }
    localStorage.setItem('token',token)
    store.commit("changeIsLogin",true)
    store.dispatch("changeInfoAsync");
    router.push(`/person`)

}
</script>

<style lang="less" scoped>
</style>