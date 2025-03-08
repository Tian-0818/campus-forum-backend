require('dotenv').config(); // 加载 .env 文件

const express = require('express');
const connectDB = require('./db'); // 导入数据库连接函数

const mongoose = require('mongoose');
const User = require('./models/User'); // 确保 User 模型已定义

const createTestData = async () => {
  const user = new User({
    email: 'test@bipt.edu.cn',
    password: 'hashedpassword',
    role: 'student'
  });
  await user.save();
  console.log('Test user created');
};

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');
    createTestData(); // 插入测试数据
  })
  .catch(err => console.error('Connection Failed:', err.message));

const app = express();

// 连接数据库
connectDB();

// 示例路由
app.get('/', (req, res) => {
  res.send('Hello, Campus Forum!');
});

// 启动服务器
const PORT = process.env.PORT || 3001; // 默认端口 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // 调试输出

require('dotenv').config();
console.log(process.env.MONGODB_URI); // 检查是否加载成功
console.log(process.env.JWT_SECRET);  // 检查是否加载成功