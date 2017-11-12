import React, { Component } from 'react';

export default class Medlemmar extends Component {
  constructor() {
    super();
    this.state = {
      members: null,
      focusedCard: '',
    }
  }
  componentDidMount() {
    const url = 'https://spreadsheets.google.com/feeds/list/1lmwOu2XdlVgrvclsZs1P4MZf5I8JTEiY6UfTUrgz3M4/od6/public/values?alt=json';
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        this.setState({ members: data.feed.entry})
    })
  }

  renderGames(games, key) {
    const sortGames = games.split(',')
    const li = () => {
      return sortGames.map((game) => {
        if(game !== '') return <li key={game + key}>{game}</li>
      })
    }
    return <ul className="card-list" key={key}>{li()}</ul>
  }

  openGames = (focusedCard) => {
    this.setState({focusedCard})
  }
  renderTitle(games) {
    const sortGames = games.split(',')
    const gameLength = sortGames.length;
    if (gameLength > 0 && gameLength < 3) {
      return 'Novis'
    }
    if (gameLength > 2 && gameLength < 6) {
      return 'The Gamer'
    }
    if (gameLength > 5 && gameLength < 11) {
      return 'The Collector'
    }
    if (gameLength > 10 && gameLength < 16) {
      return 'The Insane'
    }
    if (gameLength > 15 && gameLength < 21) {
      return 'The Hoarder'
    }
    if (gameLength > 20 && gameLength < 26) {
      return 'The Maniac'
    }
    if (gameLength > 25 && gameLength < 31) {
      return 'The Defender of the Dragons Lair'
    }
    if (gameLength > 31 && gameLength < 50) {
      return 'The Lost Cause'
    }
    if (gameLength > 50) {
      return 'What a Long, Strange Trip Its Been'
    }
  }

  showGamesInCard(id) {
    if (id === this.state.focusedCard) {
      return 'block';
    }
    return 'none';
  }

  renderMembers() {
    return this.state.members.map((member) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-12 member-card-container" key={member.id.$t}>
          <div className="member-card">
            <div className="row">
              <div className="col">
                <div className="medlemsnummer">
                  <div className="sword" />
                </div>
              </div>
              <div className="co-8">
                {this.renderTitle(member.gsx$spel.$t, member.id.$t)}
              </div>
              <div className="col" style={{textAlign: 'right'}}>
                <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '4px', marginTop: '2px'}}>
                  <b>{member.gsx$medlemsnummer.$t}</b>
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span>
                <b>{member.gsx$namn.$t}</b>
              </span>
              <br />
              <span>
                <div>{member.gsx$befattning.$t} {member.gsx$befattning.$t !== 'Medlem' ? 'och Medlem' : null}</div>
              </span>
            </div>
            <div>{member.gsx$om.$t ? 'Om: ' : ''}</div>
            <div><span style={{ cursor: 'pointer', fontSize: '50px' }} onClick={()=>this.openGames(member.id.$t)}>+</span></div>
            <div className="game-card" style={{ display: this.showGamesInCard(member.id.$t)}}>{this.renderGames(member.gsx$spel.$t, member.id.$t)}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.state.members !== null ? this.renderMembers() : null}
      </div>
    );
  }
}