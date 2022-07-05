import http from './http.js';

//获取今日信息
export const queryNewsLatest=(url,method,submitData)=>{
    return http (url,method,submitData)
}
//获取往日新闻
export  const queryNewsBefore=(url,method,submitData)=>{
    return http (url,method,submitData)
}
// 获取新闻详细信息
export const queryNewsDetail=(url,method,submitData)=>{
    return http (url,method,submitData)
}
// 获取点赞信息
export const queryNewsExtra=(url,method,submitData)=>{
    return http (url,method,submitData)
}
// 登录
export const login=(url,method,submitData)=>{
    return http (url,method,submitData)
}
//获取验证码
export  const phoneCode=(url,method,submitData)=>{
    return http (url,method,submitData)
}
// --------
// 检测是否登录
export const checkIsLogin=(url,method,submitData)=>{
    return http (url,method,submitData)
}
// 获取登录者信息
export const userInfo=(url,method,submitData)=>{
    return http (url,method,submitData)
}