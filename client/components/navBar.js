import React, {Component} from 'react';
import { browserHistory } from 'react-router'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<div className='navBar'>
				<button className='navBarHomeButton' onClick={() => {browserHistory.push('/')}}>Home</button>
			</div>
		)
	}
}