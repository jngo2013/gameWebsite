import React, { Component } from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import EditModal from '../EditModal';
import axios from 'axios';
import './styles.css';

class LegacyDetails extends Component {
  state = {
    gameData: "",
    redirect: false,
    authenticated: false,
    // authenticated: true,
  }

  async componentDidMount() {
    // check to see if the user has been authenticated
    if(localStorage.getItem('token') !== null){
      this.setState({ authenticated : true });
    } 

    // get game id from url (using react router)
    let gameId = this.props.match.params.id;
    // pass the game id to axios to make the api call
    try {
      // get a response and use response data
      let response = await axios.get(`/api/legacygames/${gameId}`);
      // set gameData state to be 'response.data'
      this.setState({ gameData: response.data });
      console.log(this.state.gameData, "response data line 21!!");
    } catch (err) {
      console.log(err);
    }
  }

  // function for the child component to pass data to this component so it can rerender
  passDataToParent = (childData) => {
    this.setState({ gameData: childData });
  }

  // function for the child component to get the new route so the parent can redirect
  redirect = (childData) => {
    this.setState({ redirect: childData });
  }

  render() {
    // get data from the state
    const { _id, src, title, description, players, time, realRules, drunkRules } = this.state.gameData;
    
    return (

      <div>
        {
          // if this.state.redirect is "true"...
          this.state.redirect
          ? 
          // ...then go to "/LegacyGames/" route...
          this.props.history.push("/LegacyGames/")
          :
          // otherwise, display the game info
          <Container>
            <Card className="LegacyGames-details text-center">
              <Card.Header className="LegacyGames-header">{title}</Card.Header>
              <Row className="LegacyGames-row1">
                
                <Col className="LegacyGames-col1" lg>
                  <div className="LegacyGames-col1-div">
                    <div>
                      <Card.Title className="LegacyGames-title">Number of Players</Card.Title>
                      <Card.Text>
                        {players} player(s)
                      </Card.Text>
                    </div>
                  </div>
                  
                  <hr />

                  <div className="LegacyGames-col1-div">
                    <div>
                      <Card.Title className="LegacyGames-title">Time</Card.Title>
                      <Card.Text>
                        {time} min.
                      </Card.Text>
                    </div>
                    
                  </div>  
                </Col>
                
                <Col id="LegacyGames-col2" lg>
                  <Card.Img 
                    variant="top" 
                    src={src}
                    alt="board game" 
                    className="LegacyGames-details-img"
                  />
                </Col>
              </Row>
              
              <Card.Body>
                <Card.Title className="LegacyGames-title">Description</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                
                <hr className="LegacyGames-hr" />

                <Card.Title className="LegacyGames-title">Drunk Rules</Card.Title>
                <Card.Text>
                  {drunkRules}
                </Card.Text>

                <hr className="LegacyGames-hr" />
                
                <a href={realRules} target="_blank" rel="noopener noreferrer"><Button className="LegacyGames-real">Real Rules</Button></a>
                
                { this.state.authenticated
                  ?
                  <EditModal
                    id={_id}
                    passDataToParent={this.passDataToParent}
                    redirect={this.redirect}
                    apiRoute="/api/legacygames/"
                  />
                  :
                  null
                }   
              </Card.Body>
            </Card>
          </Container>
        }  
      </div>
    );
  }
}

export default LegacyDetails;
