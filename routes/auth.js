// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const User = require('../models/User');

// 发送验证邮件
router.post('/send-verification', async (req, res) => {
  const { email } = req.body;
  if (!email.endsWith('@bipt.edu.cn')) {
    return res.status(400).json({ error: 'Invalid school email' });
  }

  // 生成验证令牌
  const token = crypto.randomBytes(20).toString('hex');
  const verificationLink = `http://yourdomain.com/verify?token=${token}`;

  // 配置邮件服务（示例使用Gmail）
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    to: email,
    subject: '校园论坛邮箱验证',
    html: `点击链接完成注册：<a href="${verificationLink}">${verificationLink}</a>`
  });

  res.status(200).json({ message: 'Verification email sent' });
});

// 验证令牌并创建账号
router.get('/verify', async (req, res) => {
  const { token } = req.query;
  // 此处应校验token有效性（实际需存储到数据库并设置过期时间）
  
  // 提取学号（假设学号为邮箱前缀）
  const email = 'extracted_from_token@bipt.edu.cn'; // 实际需从token解析
  const studentId = email.split('@')[0];
  
  // 创建用户
  const hashedPassword = await bcrypt.hash(studentId, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  res.redirect('http://yourdomain.com/login'); // 跳转至登录页
});