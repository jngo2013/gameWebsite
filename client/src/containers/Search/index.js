import React, { Component } from 'react';
import KitchenSinkCard from '../../components/KitchenSinkCard';
import { Container, Row } from 'react-bootstrap';
import searchInput from '../SearchBar';
import axios from 'axios';

class Search extends Component {
  state = {
    searchGameData: [],
    
  }

  async componentDidMount() {
    try{
      let res = await axios.get(`/api/shorttermgames/search/${searchInput}`);
      this.setState ({ searchGameData : res.data })
    } catch (err){
      console.log(err, 'line 16')
    }
  };

  render(){
    const allGames = this.state.searchGameData.map(game => 
      <a href={`/search/${searchInput}`} target="_blank" rel="noopener noreferrer">
        <KitchenSinkCard 
          src={game.src}
          name={game.title}
          description={game.description}
          players={game.players}
          time={game.time}
          realRulesLink={game.realRulesLink}
          drunkRulesLink={game.drunkRulesLink}
        />
      </a>
    );

    return (
      <div>
        <Row>
          {/* ===== Game cards ===== */}
          {allGames.reverse()}
        </Row>
      </div>
    )
  }
}

export default Search;