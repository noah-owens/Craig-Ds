const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays audio from a youtube video')
		.addStringOption(option =>
			option.setName('query')
				.setDescription('Youtube track to play')
				.setRequired(true),
		),
	async execute(interaction) {
		// Implement PLAY function
		await interaction.reply('coming soon');
	},
};