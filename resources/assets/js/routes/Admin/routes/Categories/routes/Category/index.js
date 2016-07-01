module.exports = {
	path: ':categoryId',

	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Category'))
		})
	}
};
