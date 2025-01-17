# 项目架构

## 技术选型

### 前端

- Vite + Vue3 + Pinia

### 后端

- NodeJS + Express5.x

### 数据库

- MongoDB

## 原型设计

### 角色系统 (Character)

- 角色名称 (Character Name)

- 角色种族 (Character Race)

    - 种族潜力值 (力量、智力、敏捷、体力等)

- 角色职业 (Character Occupation)

    - 基础属性 (Level、Exp、HP、MP、物理攻击、魔法攻击、防御力等)

- 角色技能 (Skill)

    - 种族技能 (Racial Skills)

    - 职业技能 (Professional Skills)

    - 核心字段

        - 技能名称 (Skill Name)

        - 技能等级 (Skill Level)

        - 技能效果 (Skill Effect）

            - 伤害 (Damage)

            - 治疗 (Healing)

            - 正面状态 (Buff)

            - 负面状态 (DeBuff)

        - 冷却时间 (Skill Cooldown)

### 战斗系统

### 经济系统

- 货币系统

- 背包系统

- 商店系统

### 任务系统 (Task)

- 任务列表 (Task List)

- 任务进度 (Task Progress)

- 任务奖励 (Task Rewards)

### 成就系统 (Achievements)

- 成就列表 (Achievement List)

- 成就进度 (Achievement Progress)

- 成就奖励 (Achievement Rewards)

## 界面设计

### 游戏入口

- 登录注册

- 存档/角色选择

- 创建/删除角色

### 游戏主界面

- 角色界面

    - 角色属性

    - 角色装备

    - 角色技能

- 战斗界面

    - 战斗过程

    - 技能按钮

    - 战斗结果

- 任务界面

    - 任务列表

    - 任务进度

    - 任务详情

    - 任务奖励

- 成就界面

- 商店界面

