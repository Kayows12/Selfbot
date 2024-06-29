import fs from 'fs';

export interface BotConfig {
    token: string;
    serverId: string;
    channelId: string;
    huntEnabled: boolean;
    battleEnabled: boolean;
    prayEnabled: boolean;
    curseEnabled: boolean;
    pauseEnabled: boolean;
    mentionUser: string;
    huntInterval: number;
    battleInterval: number;
    prayInterval: number;
    curseInterval: number;
    pauseDuration: number;
    pupEnabled: boolean;
    pikuEnabled: boolean;
    runEnabled: boolean;
    pupInterval: number;
    pikuInterval: number;
    runInterval: number;
    gemUsageEnabled: boolean;
    gemInterval: number;
}

const configPath = './config.json';

const defaultConfig: BotConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export const config: BotConfig = {
    token: process.env.BOT_TOKEN || defaultConfig.token,
    serverId: process.env.SERVER_ID || defaultConfig.serverId,
    channelId: process.env.CHANNEL_ID || defaultConfig.channelId,
    huntEnabled: process.env.HUNT_ENABLED ? process.env.HUNT_ENABLED === 'true' : defaultConfig.huntEnabled,
    battleEnabled: process.env.BATTLE_ENABLED ? process.env.BATTLE_ENABLED === 'true' : defaultConfig.battleEnabled,
    prayEnabled: process.env.PRAY_ENABLED ? process.env.PRAY_ENABLED === 'true' : defaultConfig.prayEnabled,
    curseEnabled: process.env.CURSE_ENABLED ? process.env.CURSE_ENABLED === 'true' : defaultConfig.curseEnabled,
    pauseEnabled: process.env.PAUSE_ENABLED ? process.env.PAUSE_ENABLED === 'true' : defaultConfig.pauseEnabled,
    mentionUser: process.env.MENTION_USER || defaultConfig.mentionUser,
    huntInterval: process.env.HUNT_INTERVAL ? parseInt(process.env.HUNT_INTERVAL) : defaultConfig.huntInterval,
    battleInterval: process.env.BATTLE_INTERVAL ? parseInt(process.env.BATTLE_INTERVAL) : defaultConfig.battleInterval,
    prayInterval: process.env.PRAY_INTERVAL ? parseInt(process.env.PRAY_INTERVAL) : defaultConfig.prayInterval,
    curseInterval: process.env.CURSE_INTERVAL ? parseInt(process.env.CURSE_INTERVAL) : defaultConfig.curseInterval,
    pauseDuration: process.env.PAUSE_DURATION ? parseInt(process.env.PAUSE_DURATION) : defaultConfig.pauseDuration,
    pupEnabled: process.env.PUP_ENABLED ? process.env.PUP_ENABLED === 'true' : defaultConfig.pupEnabled,
    pikuEnabled: process.env.PIKU_ENABLED ? process.env.PIKU_ENABLED === 'true' : defaultConfig.pikuEnabled,
    runEnabled: process.env.RUN_ENABLED ? process.env.RUN_ENABLED === 'true' : defaultConfig.runEnabled,
    pupInterval: process.env.PUP_INTERVAL ? parseInt(process.env.PUP_INTERVAL) : defaultConfig.pupInterval,
    pikuInterval: process.env.PIKU_INTERVAL ? parseInt(process.env.PIKU_INTERVAL) : defaultConfig.pikuInterval,
    runInterval: process.env.RUN_INTERVAL ? parseInt(process.env.RUN_INTERVAL) : defaultConfig.runInterval,
    gemUsageEnabled: process.env.GEM_USAGE_ENABLED ? process.env.GEM_USAGE_ENABLED === 'true' : defaultConfig.gemUsageEnabled,
    gemInterval: process.env.GEM_INTERVAL ? parseInt(process.env.GEM_INTERVAL) : defaultConfig.gemInterval,
};