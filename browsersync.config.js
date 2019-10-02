/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 */
module.exports = {
	cors: true,
	ghostMode: false,
	localOnly: true,
	open: 'local',
	port: 3000,
	server: true,
	ui: false,
	watch: true,
	watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
	watchOptions: {
		ignoreInitial: true,
	},
};
