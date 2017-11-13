import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/summonerActions.js';

class MostPlayedChamp extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="mostPlayedChampContainer">
				<h1 className="mostPlayedChampHeader">Most Played Champ</h1>
				<img className="mostPlayedChampPic" src={this.props.summonerMostPlayedChampPic} alt=""/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		summonerInfo: state.summonerInfo,
		summonerProfilePic: state.summonerProfilePic,
		summonerRank: state.summonerRank,
		summonerMostPlayedChamps: state.summonerMostPlayedChamps,
		summonerMostPlayedChampPic: state.summonerMostPlayedChampPic
	}
}

export default connect(mapStateToProps, actions)(MostPlayedChamp);