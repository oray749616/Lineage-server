import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Race from '@models/Race';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

const race = {
  name: '人类',
  attributes: {
    hp: 100,
    mp: 50,
    physicalAttack: 30,
    magicAttack: 20,
    defense: 15,
    magicResistance: 10,
    attackSpeed: 1.2,
    castSpeed: 1.1,
  },
  dimensions: {
    strength: 12,
    intelligence: 10,
    agility: 12,
    constitution: 10,
    wisdom: 12,
    spirit: 10,
  },
  traits: [],
  skills: [],
};

async function saveRace() {
  try {
    await mongoose.connect(MONGO_URI!);
    console.log('MongoDB Connected.');

    await Race.create(race);
    console.log('Race Insert Successfully.');
  } catch (e) {
    console.error('Race Insert Failed: ', e);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB Disconnected.');
  }
}

// ts-node saveRace.ts
saveRace();