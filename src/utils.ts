import { Client } from 'discord.js-selfbot-v13';
import { config } from './config';

export const client = new Client();

export const login = async () => {
    await client.login(config.token);
    console.log(`Logged in as ${client.user?.tag}`);
};

export const getChannel = () => {
    const guild = client.guilds.cache.get(config.serverId);
    if (!guild) throw new Error(`Guild with ID ${config.serverId} not found`);

    const channel = guild.channels.cache.get(config.channelId);
    if (!channel || !channel.isText()) throw new Error(`Channel with ID ${config.channelId} not found or is not a text channel`);

    return channel;
};

export const send = async (command: string) => {
    const channel = getChannel();
    await channel.send(command);
    console.log(`Sent command: ${command}`);
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const randomDelay = (interval: number) => {
    const min = interval - 5000;
    const max = interval + 5000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const log = (message: string) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
};