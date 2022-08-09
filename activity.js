const fs = require('node:fs');

function refreshActivity() {
	const activityFile = fs.readFileSync('activities/activities.json');
	const keys = Object.keys(activityFile);

	const randIndex = Math.floor(Math.random() * keys.length);
	const randKey = keys[randIndex];

	const activity = activityFile[randKey];

	return activity;
}

module.exports = { refreshActivity };