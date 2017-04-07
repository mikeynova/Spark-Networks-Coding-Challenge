import React, {Component} from 'react';
import ClassAlgo from '../helpers/classAlgo.js';

export default class AddClasses extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textbox: ''
		}
	}
	
	submit(e) {
		e.preventDefault();
		ClassAlgo(this.state.textbox)
	}

	render() {
		return(
			<div id='container'>
				<h1>Add Classes!</h1>
				<form onSubmit={this.submit.bind(this)}>
					<textarea id='textbox' type='text' value={this.state.textbox} onChange={
						(e) => {
							this.setState({
								textbox: e.target.value
							})
						}
					}/>
					<br />
					<input type="submit" value="Submit" className="btn"/>
				</form>
			</div>
		)
	}
}