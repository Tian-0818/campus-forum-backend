// server.js
require('dotenv').config(); // 加载环境变量
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 初始化 Express 应用
const app = express();

// 中间件
app.use(cors()); // 启用 CORS
app.use(express.json()); // 解析 JSON 请求体

// 连接 MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// 示例路由
app.get('/', (req, res) => {
  res.send('Welcome to Campus Forum Backend!');
});

// 用户路由
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// 课程路由
const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);

// 评价路由
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/reviews', reviewRoutes);

// 启动服务器
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});