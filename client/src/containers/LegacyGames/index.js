import React, { Component } from 'react';
import KitchenSinkCard from '../../components/KitchenSinkCard';
import AddLegacyModal from './../AddLegacyModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './styles.css';

class LegacyGames extends Component {
  state = {
    legacyGameData: [],
    // authenticated: false,
    authenticated: true,
  }

  // API call to the backend
  async componentDidMount() {
    // check to see if the user has been authenticated
    if(localStorage.getItem('token') !== null){
      this.setState({ authenticated : true });
    } 
    
    try {
      // when "/api/legacygames/" is hit, you'll get a response from the database, which is then saved to the "response" variable.
      let response = await axios.get("/api/legacygames/");
      // set the "legacyGameData" state to be the data from the response
      this.setState({ legacyGameData: response.data });
      console.log(this.state.legacyGameData, "line 20");
    } catch (err) {
      console.log(err);
    }
  }

  render() {

  // ===== FUNCTIONS =====
  // MAP FUNCTION TO CREATE A CARD FOR EVERY GAME
  // for every game in the database, render a KitchenSinkCard with the information
  const allGames = this.state.legacyGameData.map(game => 
    <a href={`/LegacyGames/${game._id}`} target="_blank" rel="noopener noreferrer" className="LegacyGames-card">
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
        <Container fluid className="LegacyGames-container">
          { this.state.authenticated 
            ?
            <Row className="LegacyGames-container-header-row">   
              <h1 className="LegacyGames-container-header">Legacy Games</h1>
              <div className="LegacyGames-break"></div>
              <div className="LegacyGames-modal-div"><AddLegacyModal /></div>
            </Row>
            :
            <Row className="LegacyGames-container-header-row">
              <h1 className="LegacyGames-container-header">Legacy Games</h1>
            </Row>
          }     
          
          <Row className="LegacyGames-row">
            {/* ===== Game cards ===== */}
            {allGames}
          </Row>

        </Container>
        
        
      </div>
    );
  }
}

export default LegacyGames;

// ========== NOTES ==========
//  INFORMATION FOR THE KITCHENSINKCARD
  //     <KitchenSinkCard 
  //       src={game.src}
  //       name={game.name}
  //       description={game.description}
  //       players={game.players}
  //       time={game.time}
  //       realRulesLink={game.realRulesLink}
  //       drunkRulesLink={game.drunkRulesLink}
  //     /> 
  //   </a>
  // );