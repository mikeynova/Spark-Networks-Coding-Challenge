import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../actions/summoner-actions'

class Summoner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: '',
    }
    this.handleSummonerID = this.handleSummonerID.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSummonerID(e) {
    e.preventDefault()
    axios.get('/summonerInfo', {
      headers: { summonerName: this.state.summonerName },
    })
    .then(response => console.log(response))
  }

  // Most Played
  // getMostPlayedChamp() {
  //   axios.post('/getMostPlayedChamp', [this.props.summonerInfo.id])
  //   .then((response) => {
  //     this.props.setSummonerMostPlayedChamps(response.data)
  //     this.getMostPlayedChampPic();
  //   })
  //   .catch((err) => {
  //     console.log('error in getMostPlayedChamp: ', err);
  //   })
  // }

  // Most played Pic
  // getMostPlayedChampPic() {
  //   let spinner = document.getElementsByClassName("spinner")[0];
  //   spinner.classList.remove('active');
  //   axios.post('/getMostPlayedChampPic', [this.props.summonerMostPlayedChamps[0].championId])
  //   .then((response) => {
  //     this.props.setSummonerMostPlayedChampPic('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + response.data.name + '_0.jpg');
  //     browserHistory.push('/summonerProfile');
  //   })
  //   .catch((err) => {
  //     console.log('error in getMostPlayedChampPic: ', err);
  //   })
  // }

  handleChange(e) {
    this.setState({
      summonerName: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <div className="summonerInputContainer">
          <h1 className="summonerInputHeader">POOP Name</h1>
          <form onSubmit={this.handleSummonerID}>
            <input className="summonerNameInput" onChange={this.handleChange} value={this.state.summonerName} type="text"/>
          </form>
        </div>
        <img className="spinner" src="http://www.shopfashionisland.com/images/spinner.gif" alt=""/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  summonerInfo: state.summonerInfo,
  summonerProfilePic: state.summonerProfilePic,
  summonerRank: state.summonerRank,
  summonerMostPlayedChamps: state.summonerMostPlayedChamps,
  summonerMostPlayedChampPic: state.summonerMostPlayedChampPic,
})

export default connect(mapStateToProps, actions)(Summoner)
