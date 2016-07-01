module.exports = {
	paths:      {
		styles:       './resources/assets/styles',
		stylesBlocks: './resources/assets/styles/blocks.scss',
		entry:        './resources/assets/js/index.js',
		js:           './resources/assets/js/**/*.js',
		vendor:       [
			'./resources/assets/vendor/jquery-2.2.3.min.js',
			'./resources/assets/vendor/lodash.core.min.js',
			'./resources/assets/vendor/**/*.js'
		],
		dist:         './',
		images:       './resources/assets/images/**/*',
		sprite:       './resources/assets/images/sprite/*',
		fonts:        './resources/assets/fonts/**/*'
	},
	build:      {
		js:           'public/assets/js',
		vendor:       'public/assets/vendor',
		styles:       'public/assets/css',
		stylesBlocks: 'public/src/assets/styles',
		images:       'public/assets/images',
		sprite:       'public/assets/images/sprite',
		fonts:        'public/assets/fonts'
	},
	clean:      './public/assets/',
	production: false
};
