import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('请确保在 .env 文件中配置了 MONGODB_URI');
}

// 定义 MongoDB 客户端和数据库实例
let client: MongoClient;
let db: Db;

/**
 * 连接到 MongoDB
 */
export async function connectToDatabase(): Promise<Db> {
  if (db) {
    console.log('使用已存在的数据库连接');
    return db;
  }

  try {
    // 创建 MongoDB 客户端
    client = new MongoClient(MONGODB_URI!);

    // 连接到 MongoDB
    await client.connect();
    console.log('成功连接到 MongoDB');

    // 获取数据库实例
    db = client.db();
    return db;
  } catch (error) {
    console.error('连接 MongoDB 失败:', error);
    throw error;
  }
}

/**
 * 关闭 MongoDB 连接
 */
export async function closeDatabaseConnection(): Promise<void> {
  if (client) {
    await client.close();
    console.log('MongoDB 连接已关闭');
  }
}

/**
 * 获取数据库实例
 */
export function getDatabase(): Db {
  if (!db) {
    throw new Error('数据库未连接，请先调用 connectToDatabase');
  }
  return db;
}