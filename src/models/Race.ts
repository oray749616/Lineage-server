import { Schema, Document, model } from 'mongoose';

// 定义种族接口
interface IRace extends Document {
  name: string; // 种族名称
  attributes: {
    hp: number; // 血量
    mp: number; // 魔法值
    physicalAttack: number; // 物理攻击力
    magicAttack: number; // 魔法攻击力
    defense: number; // 防御力
    magicResistance: number; // 魔法抗性
    attackSpeed: number; // 攻击速度
    castSpeed: number; // 施法速度
  };
  dimensions: {
    strength: number; // 力量
    intelligence: number; // 智力
    agility: number; // 敏捷
    constitution: number; // 体质
    wisdom: number; // 智慧
    spirit: number; // 精神
  };
  traits: string[]; // 种族特质
  skills: string[]; // 基础技能
}

// 定义种族 Schema
const RaceSchema = new Schema<IRace>({
  name: { type: String, required: true, unique: true },
  attributes: {
    hp: { type: Number, required: true },
    mp: { type: Number, required: true },
    physicalAttack: { type: Number, required: true },
    magicAttack: { type: Number, required: true },
    defense: { type: Number, required: true },
    magicResistance: { type: Number, required: true },
    attackSpeed: { type: Number, required: true },
    castSpeed: { type: Number, required: true },
  },
  dimensions: {
    strength: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    agility: { type: Number, required: true },
    constitution: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    spirit: { type: Number, required: true },
  },
  traits: { type: [String], default: [] },
  skills: { type: [String], default: [] },
}, {collection: 'races' });

// 创建种族模型
const Race = model<IRace>('Race', RaceSchema);

export default Race;