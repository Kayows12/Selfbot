import { login } from './utils';
import { executeHunt, executeBattle, executePray, executeCurse, executePause, executePup, executePiku, executeRun, useGems } from './commands';
import { log } from './utils';

const init = async () => {
    await login();

    executeHunt();
    executeBattle();
    executePray();
    executeCurse();
    executePause();
    executePup();
    executePiku();
    executeRun();
    useGems();

    log("All commands initialized.");
};

init();