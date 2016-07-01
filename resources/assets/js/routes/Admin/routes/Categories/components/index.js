import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {Row, Col} from 'react-flexbox-grid';

class CategoriesIndex extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<Row>
				<Col xs={12}>
					CategoriesIndex
				</Col>
			</Row>
		);
	}
}

function mapStateToProps (state) {
	"use strict";

	return {}
}

function mapDispatchToProps (dispatch) {
	"use strict";
	return {
		// userActions: bindActionCreators(userActions, dispatch)
	}
}

// export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);
module.exports = connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);
