const fs = require('node:fs');

function refreshActivity() {
	const activityFileString = fs.readFileSync('activities/activities.json').toString();
	const activityFile = JSON.parse(activityFileString);
	const keys = Object.keys(activityFile);

	const randIndex = Math.floor(Math.random() * keys.length);
	const randKey = keys[randIndex];

	const activity = activityFile[randKey];
	// splits the value into an array where actArray[0] is the status
	// and actArray[1] denotes the status type. (0 = playing, 1 = watching
	// 2 = listening, 3 = competing)
	const actArray = activity.split('|');

	return actArray;
}

module.exports = { refreshActivity };