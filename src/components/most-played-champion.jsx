import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/summoner-actions'

const MostPlayedChamp = () => (
  <div className="mostPlayedChampContainer">
    <h1 className="mostPlayedChampHeader">Most Played Champ</h1>
    <img className="mostPlayedChampPic" src={this.props.summonerMostPlayedChampPic} alt=""/>
  </div>
)

const mapStateToProps = state => ({
  summonerInfo: state.summonerInfo,
  summonerProfilePic: state.summonerProfilePic,
  summonerRank: state.summonerRank,
  summonerMostPlayedChamps: state.summonerMostPlayedChamps,
  summonerMostPlayedChampPic: state.summonerMostPlayedChampPic,
})

export default connect(mapStateToProps, actions)(MostPlayedChamp)
