// 提供api服务，依据请求接口返回响应数据
import express from 'express'
import { DataStore } from './data'

const app = express()

app.get('/',(req,res)=>{
  res.json(DataStore.list)
})

app.listen(8080,()=>{
  console.log("服务已经开启了");
})