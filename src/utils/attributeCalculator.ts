export class AttributeCalculator {
  // 常量定义
  private static readonly HP_PER_LEVEL = 50;
  private static readonly MP_PER_LEVEL = 20;
  private static readonly PHYSICAL_ATTACK_PER_LEVEL = 20;
  private static readonly MAGIC_ATTACK_PER_LEVEL = 20;
  private static readonly DEFENSE_PER_LEVEL = 20;
  private static readonly MAGIC_RESISTANCE_PER_LEVEL = 5;

  // 计算血量
  static calculateHP(baseHP: number, constitution: number, level: number): number {
    const constitutionMultiplier = this.calculateMultiplier(constitution, 40, 0.05, 0.04);
    return (baseHP + level * this.HP_PER_LEVEL) * (1 + constitutionMultiplier);
  }

  // 计算魔法值
  static calculateMP(baseMP: number, spirit: number, level: number): number {
    const spiritMultiplier = this.calculateMultiplier(spirit, 40, 0.05, 0.04);
    return (baseMP + level * this.MP_PER_LEVEL) * (1 + spiritMultiplier);
  }

  // 计算物理攻击力
  static calculatePhysicalAttack(basePhysicalAttack: number, strength: number, level: number): number {
    const physicalAttackMultiplier = this.calculateMultiplier(strength, 40, 0.04, 0.03);
    return (basePhysicalAttack + level * this.PHYSICAL_ATTACK_PER_LEVEL) * (1 + physicalAttackMultiplier);
  }

  // 计算魔法攻击力
  static calculateMagicAttack(baseMagicAttack: number, intelligence: number, level: number): number {
    const magicAttackMultiplier = this.calculateMultiplier(intelligence, 40, 0.04, 0.03);
    return (baseMagicAttack + level * this.MAGIC_ATTACK_PER_LEVEL) * (1 + magicAttackMultiplier);
  }

  // 计算防御力
  static calculateDefense(baseDefense: number, constitution: number, level: number): number {
    const defenseMultiplier = this.calculateMultiplier(constitution, 40, 0.02, 0.01);
    return (baseDefense + level * this.DEFENSE_PER_LEVEL) * (1 + defenseMultiplier);
  }

  // 计算魔法抗性
  static calculateMagicResistance(baseMagicResistance: number, spirit: number, level: number): number {
    const magicResistanceMultiplier = this.calculateMultiplier(spirit, 40, 0.02, 0.01);
    return (baseMagicResistance + level * this.MAGIC_RESISTANCE_PER_LEVEL) * (1 + magicResistanceMultiplier);
  }

  // 计算攻击速度
  static calculateAttackSpeed(baseAttackSpeed: number, agility: number): number {
    const attackSpeedMultiplier = (agility / 4) * 15;
    return baseAttackSpeed + attackSpeedMultiplier;
  }

  // 计算施法速度
  static calculateCastSpeed(baseCastSpeed: number, wisdom: number): number {
    const castSpeedMultiplier = wisdom * 0.05;
    return baseCastSpeed + castSpeedMultiplier;
  }

  // 私有方法：计算属性值的分段乘数
  private static calculateMultiplier(
    attributeValue: number,
    threshold: number,
    highMultiplier: number,
    lowMultiplier: number
  ): number {
    return attributeValue * (attributeValue >= threshold ? highMultiplier : lowMultiplier);
  }
}