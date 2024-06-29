import { config } from './config';
import { send, randomDelay, log, sleep } from './utils';

const safeExecute = async (command: () => Promise<void>, delay: number, label: string) => {
    try {
        await command();
        setTimeout(() => safeExecute(command, delay, label), randomDelay(delay));
    } catch (error) {
        log(`Error executing ${label}: ${error}`);
        setTimeout(() => safeExecute(command, delay, label), randomDelay(delay));
    }
};

const createCommand = (enabled: boolean, command: string, interval: number, label: string) => {
    if (enabled) {
        safeExecute(async () => {
            await send(command);
            log(`Executed ${label}`);
        }, interval, label);
    }
};

export const executeHunt = () => createCommand(config.huntEnabled, "hunt", config.huntInterval, "hunt");
export const executeBattle = () => createCommand(config.battleEnabled, "battle", config.battleInterval, "battle");
export const executePray = () => createCommand(config.prayEnabled, `pray <@${config.mentionUser}>`, config.prayInterval, "pray");
export const executeCurse = () => createCommand(config.curseEnabled, `curse <@${config.mentionUser}>`, config.curseInterval, "curse");
export const executePause = () => createCommand(config.pauseEnabled, "pause", config.pauseDuration, "pause");
export const executePup = () => createCommand(config.pupEnabled, "pup", config.pupInterval, "pup");
export const executePiku = () => createCommand(config.pikuEnabled, "piku", config.pikuInterval, "piku");
export const executeRun = () => createCommand(config.runEnabled, "run", config.runInterval, "run");
export const useGems = () => createCommand(config.gemUsageEnabled, "use gem1", config.gemInterval, "gem");