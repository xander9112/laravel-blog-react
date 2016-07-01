import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {Row, Col} from 'react-flexbox-grid';

class CategoryCreate extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<Row>
				<Col xs={12}>
					CategoryIndex
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
