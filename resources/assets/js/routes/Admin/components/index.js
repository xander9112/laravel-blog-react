import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {Row, Col} from 'react-flexbox-grid';

class AdminIndex extends Component {
	render () {
		return (
			<Row>
				<Col xs={12}>
					AdminIndex{this.props.children}
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

module.exports  = AdminIndex;

// export default connect(mapStateToProps, mapDispatchToProps)(AdminIndex);
