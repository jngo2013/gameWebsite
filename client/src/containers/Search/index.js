import React, { Component } from 'react';
import KitchenSinkCard from '../../components/KitchenSinkCard';
import GameNotFound from './../../components/GameNotFound';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';

class Search extends Component {
  state = {
    allResults: [],
    isLoaded: false,
  }

  async componentDidMount() {
    // get input from url using react router
    let { searchinput } = this.props.match.params;

    // array to hold all results
    const allResults = [];
    
    try {
      // search legacy games database
      // send the inquiry to the backend (GET request to "/api/legacygames/search/:id")
      let legRes = await axios.get(`/api/legacygames/search/${searchinput}`);
      console.log(searchinput, "line 24")

      // for each result, push the data into "searchResults"
      for(let searchResult of legRes.data) {
        allResults.push(searchResult);
      }

      // search shortterm games database
      // send the inquiry to the backend (GET request to "/api/shorttermgames/search/:id")
      let shortRes = await axios.get(`/api/shorttermgames/search/${searchinput}`);

      // for each result, push the data into "searchResults"
      for(let searchResult of shortRes.data) {
        allResults.push(searchResult);
      }

      // set searchResults state to be allResults
      this.setState({ allResults: allResults, isLoaded: true });
      // console.log(this.state.allResults, "line 39000")
    } catch (err) {
      console.log(err);
    }
  }


  render(){

    // for every result make a KitchenSinkCard
    const allSearchResults = this.state.allResults.map(result => 
      <KitchenSinkCard 
          src={result.src}
          name={result.title}
          description={result.description}
          players={result.players}
          time={result.time}
          realRulesLink={result.realRulesLink}
          drunkRulesLink={result.drunkRulesLink}
        />
    );

    return (
      <div>
        <Container>
          <Row>
            {/* if results are found, show 'allSearchResults'; else show GameNotFound component */}
            {/* {

              this.state.allResults.length !== 0
              ?
              allSearchResults
              :
              <GameNotFound 
                notFound={`Sorry!  We couldn't find any games with "${this.props.match.params.searchinput}".`}
              />
            } */}
            {
              this.state.isLoaded
              ?
                this.state.allResults.length !== 0
                ?
                allSearchResults
                :
                <GameNotFound 
                  notFound={`Sorry!  We couldn't find any games with "${this.props.match.params.searchinput}".`}
                />
              :
              <h1>loading....</h1>
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;

// let jimmy know of a loading screen!!