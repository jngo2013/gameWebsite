import React, { Component } from 'react';
import KitchenSinkCard from '../../components/KitchenSinkCard';
import PageNotFound from './../../components/PageNotFound';
import Loader from './../../components/Loader';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

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

      // set searchResults state to be allResults; after getting data from the database set "isLoaded" to be "true"
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
        {/* <Container fluid> */}
          {/* <Row className="Search-row"> */}
            {
              // if this.state.isLoaded is true (after checking the database), run the next ternary; otherwise show the loader
              this.state.isLoaded
              ?
                // if there are results...
                this.state.allResults.length !== 0
                ?
                // ...show all the results...
                <Container fluid>
                  <div>
                    <h1 className="Search-h1">{`Search Results for "${this.props.match.params.searchinput}"`}</h1>
                    <hr className="Search-hr" />
                  </div>
                <Row className="Search-row">
                  
                  {allSearchResults}
                </Row>
                </Container>
                
                :
                // ...else show PageNotFound
                <PageNotFound message={`Sorry!  We couldn't find any games with "${this.props.match.params.searchinput}".`}/>
              :
              // loader
              <Loader />
            }
          {/* </Row> */}
        {/* </Container> */}
      </div>
    );
  }
}

export default Search;
