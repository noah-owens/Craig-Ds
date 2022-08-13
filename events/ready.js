const { refreshActivity } = require('../activity');
const { ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		// set random activity on ready
		const act = refreshActivity();
		const activityCode = act[1];

		if (activityCode == 0) {
			client.user.setActivity(act[0]);
		}
		else if (activityCode == 1) {
			client.user.setActivity(act[0], { type: ActivityType.Watching });
		}
		else if (activityCode == 2) {
			client.user.setActivity(act[0], { type: ActivityType.Listening });
		}
		else if (activityCode == 3) {
			client.user.setActivity(act[0], { type: ActivityType.Competing });
		}
		else {
			console.log('still no worky');
		}
	},
};