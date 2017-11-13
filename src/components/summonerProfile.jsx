import React, {Component} from 'react'
import * as actions from '../actions/summonerActions.js'
import { connect } from 'react-redux'
import MostPlayedChamp from './mostPlayedChampion.jsx'
import NavBar from './navBar.jsx'

class SummonerProfile extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    return(
      <div>
      <NavBar/>
        <div className="summonerProfileContainer">
          <h1 className="summonerProfileHeader">Summoner Profile</h1>
          <img className="summonerProfilePic"src={this.props.summonerProfilePic} alt=""/>
          <div className="summonerProfileNameAndRank">
            <h3>{this.props.summonerInfo.name}</h3>
            <h3>wins: {this.props.summonerRank.wins}</h3>
            <h3>losses: {this.props.summonerRank.losses}</h3>
            <h3>rank: {this.props.summonerRank.tier} {this.props.summonerRank.rank}</h3>
          </div>
        </div>
        <MostPlayedChamp/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  summonerInfo: state.summonerInfo,
  summonerProfilePic: state.summonerProfilePic,
  summonerRank: state.summonerRank,
  summonerMostPlayedChamps: state.summonerMostPlayedChamps,
})

export default connect(mapStateToProps, actions)(SummonerProfile)
