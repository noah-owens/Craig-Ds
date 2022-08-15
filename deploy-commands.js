const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

// Create array of command.js files using a platform agnostic filepath
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Push JSON to commands [] (again, platform agnostic filepath)
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

// Register slash commands with guild scope
(async () => {
	try {
		console.log('Started refreshing (/) commands.');

		await rest.put(
			Routes.applicationGuildCommand(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded (/) commands');
	}
	catch (error) {
		console.error(error);
	}
});