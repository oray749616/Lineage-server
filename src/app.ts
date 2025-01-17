import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase, getDatabase } from './utils/mongodbUtil';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 启动服务器并连接数据库
async function startServer() {
  try {
    // 连接 MongoDB
    await connectToDatabase();

    // 添加测试路由
    app.get('/test', async (req, res) => {
      try {
        const db = getDatabase();
        const collection = db.collection('test'); // 假设你有一个名为 "test" 的集合

        // 插入一条测试数据
        const result = await collection.insertOne({ message: 'Hello, MongoDB!' });

        // 返回插入结果
        res.json({
          success: true,
          message: '测试成功！',
          insertedId: result.insertedId,
        });
      } catch (error) {
        console.error('测试路由出错:', error);
        res.status(500).json({
          success: false,
          message: '测试失败，请检查服务器日志。',
        });
      }
    });

    // 启动 Express 服务器
    app.listen(PORT, () => {
      console.log(`服务器正在运行：http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('启动服务器失败:', error);
  }
}

startServer();