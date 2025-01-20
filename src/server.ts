import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectToDatabase, closeDatabaseConnection } from '@utils/mongooseUtils';

const PORT = process.env.PORT || 3000;

// 启动服务器
async function startServer() {
  // 连接到 MongoDB
  await connectToDatabase();

  // 启动 Express 服务器
  app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
  });
}

// 处理进程退出
process.on('SIGINT', async () => {
  await closeDatabaseConnection();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closeDatabaseConnection();
  process.exit(0);
});

// 启动服务器
startServer().catch((error) => {
  console.error('服务器启动失败:', error);
  process.exit(1);
});