import express from 'express';
import cors from 'cors';
const app = express()
import subscribe from './routes/cf.js';
const port = 3000

// 配置中间件
app.use(cors())
app.use(express.json())

// 挂载路由
app.use('/sub', subscribe)

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`)
})