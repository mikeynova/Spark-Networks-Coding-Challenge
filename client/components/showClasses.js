import React, {Component} from 'react';
import ClassAlgo from '../helpers/classAlgo.js';
import { actions } from '../actions/addClassListAction.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class ShowClasses extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	classes() {
		return(
			<div>
				<h4>{this.props.showClasses}</h4>
			</div>
		)
	}

	goHome() {
		browserHistory.push('/')
	}

	render() {
		return (
			<div id='classesContainer'>
				{this.classes()}
				<button onClick={this.goHome.bind(this)} className="btn"><span>Try Again</span></button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		showClasses: state.showClasses,
	}
}

export default connect(mapStateToProps, actions)(ShowClasses);