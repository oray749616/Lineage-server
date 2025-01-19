module.exports = {
  preset: 'ts-jest', // 使用 ts-jest 处理 TypeScript
  testEnvironment: 'node', // 测试环境为 Node.js
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // 匹配测试文件
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // 支持的文件扩展名
  collectCoverage: true, // 启用覆盖率收集
  coverageDirectory: 'coverage', // 覆盖率报告输出目录
  coverageReporters: ['text', 'lcov'], // 覆盖率报告格式
};