import React, {Component} from 'react';
import ClassAlgo from '../helpers/classAlgo.js';

export default class AddClasses extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textbox: '',
			testCase: `Introduction to Paper Airplanes:
								 Advanced Throwing Techniques: Introduction to Paper Airplanes
								 History of Cubicle Siege Engines: Rubber Band Catapults 101
								 Advanced Office Warfare: History of Cubicle Siege Engines
								 Rubber Band Catapults 101:
								 Paper Jet Engines: Introduction to Paper Airplanes`,
			badTest:  `Intro to Arguing on the Internet: Godwin’s Law
								 Understanding Circular Logic: Intro to Arguing on the Internet
								 Godwin’s Law: Understanding Circular Logic`
		}
	}
	
	submit(e) {
		e.preventDefault();
		ClassAlgo(this.state.testCase)
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