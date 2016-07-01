import AdminIndex from './components/index'

module.exports = {
	path: 'admin',

	getChildRoutes(partialNextState, cb) {
		require.ensure([], (require) => {
			cb(null, [
				// require('./routes/Articles'),
				require('./routes/Categories'),
				// require('./routes/Comments')
			])
		})
	},

	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/index'))
		});
	}
};

