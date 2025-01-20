import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('请确保在 .env 文件中配置了 MONGODB_URI');
}

/**
 * 连接到 MongoDB
 */
export async function connectToDatabase(): Promise<void> {
  if (mongoose.connection.readyState === 1) {
    console.log('使用已存在的数据库连接');
    return;
  }

  try {
    // 连接到 MongoDB
    // @ts-ignore
    await mongoose.connect(MONGODB_URI);
    console.log('成功连接到 MongoDB');
  } catch (error) {
    console.error('连接 MongoDB 失败:', error);
    throw error;
  }
}

/**
 * 关闭 MongoDB 连接
 */
export async function closeDatabaseConnection(): Promise<void> {
  if (mongoose.connection.readyState === 1) {
    await mongoose.disconnect();
    console.log('MongoDB 连接已关闭');
  }
}