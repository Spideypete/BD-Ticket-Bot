/* eslint-disable no-console */
const { colours } = require('leeks.js');
const link = require('terminal-link');

module.exports = version => {
	console.log(colours.cyan('==='));
	console.log(colours.cyan('  Discord'));
	console.log(colours.cyan('  Tickets'));
	console.log(colours.cyan('==='));
	console.log('');
	console.log(colours.cyanBright(`${link('Discord Tickets', 'https://discordtickets.app')} bot v${version} by eartharoid`));
	console.log(colours.cyanBright('Sponsor this project at https://discordtickets.app/sponsor'));
	console.log('\n');
};
