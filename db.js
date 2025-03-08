const mongoose = require('mongoose');
require('dotenv').config(); // 加载 .env 文件

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection Failed:', err.message);
    process.exit(1); // 退出进程
  }
};

module.exports = connectDB;