const stylelint = require('stylelint');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');

module.exports = {
	plugins: [
		stylelint(),
		postcssPresetEnv(),
		postcssReporter({ clearReportedMessages: true }),
	],
};
