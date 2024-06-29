# Discord OwO Bot

A selfbot for Discord to automate OwO commands.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/discord-owo-bot.git
   cd discord-owo-bot Install dependencies:npm install Build the project:npm run buildConfigurationCreate a config.json file in the root directory with the following structure:{
    "token": "YOUR_DISCORD_BOT_TOKEN",
    "serverId": "YOUR_SERVER_ID",
    "channelId": "YOUR_CHANNEL_ID",
    "huntEnabled": true,
    "battleEnabled": true,
    "prayEnabled": true,
    "curseEnabled": true,
    "pauseEnabled": true,
    "mentionUser": "USER_ID_TO_MENTION",
    "huntInterval": 15000,
    "battleInterval": 15000,
    "prayInterval": 60000,
    "curseInterval": 60000,
    "pauseDuration": 60000,
    "pupEnabled": true,
    "pikuEnabled": true,
    "runEnabled": true,
    "pupInterval": 30000,
    "pikuInterval": 30000,
    "runInterval": 30000,
    "gemUsageEnabled": true,
    "gemInterval": 60000
}token: Your Discord bot token.serverId: The ID of the server where the bot will operate.channelId: The ID of the channel where the bot will send commands.mentionUser: The user ID to mention for pray and curse commands (optional).UsageStart the bot:npm run startCommands and Featureshunt: Automatically sends the hunt command.battle: Automatically sends the battle command.pray: Automatically sends the pray command, optionally mentioning a user.curse: Automatically sends the curse command, optionally mentioning a user.pause: Pauses the bot for a specified duration.pup: Automatically sends the pup command.piku: Automatically sends the piku command.run: Automatically sends the run command.use gems: Automatically sends the use gem1 command.TimingsThe bot uses randomized intervals for each command to avoid detection. Intervals are configurable in config.json.ContributingFeel free to fork this repository and submit pull requests. Any improvements or bug fixes are welcome.LicenseThis project is licensed under the MIT License.### Final Thoughts

The provided structure keeps everything modular and organized. The `init.ts` handles the initialization, `commands.ts` manages the execution of commands, `config.ts` loads the configuration, and `utils.ts` contains utility functions. The `README.md` provides a comprehensive guide for setting up and using the bot. If you have any further requirements or adjustments, let me know!
