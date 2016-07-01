module.exports = {
	path: 'categories',

	getChildRoutes(partialNextState, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./routes/Category')
			])
		})
	},

	getComponents(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/index'))
		})
	}
};
