import React, { Component } from 'react';
import Loader from './../../components/Loader';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import EditModal from './../EditModal/';
import axios from 'axios';
import './styles.css';

class ShortTermDetails extends Component {
  state = {
    gameData: "",
    redirect: false,
    authenticated: false,
    isLoaded: false,
  }

  // for componentDidMount():
  // when the page loads perform an API call to the backend (shortTermGames)
  // the route we would like to hit is "/api/shorttermgames/:id/"
  async componentDidMount() {
    // check to see if the user has been authenticated
    if(localStorage.getItem('token') !== null){
      this.setState({ authenticated : true });
    } 

    // get the id from the url (using react router)
    let gameId = this.props.match.params.id;

    // pass the game id to axios to make the api all
    try {
      // get a response and use the response data
      let { data } = await axios.get(`/api/shorttermgames/${gameId}`);
      
      // check to see if the game doesn't exist...
      if(data !== null) {
        // ...if it does set gameData state to be 'response.data'
        this.setState({ gameData: data, isLoaded: true });
        
      } else {
        // ...else push to the '/notfound' route
        this.props.history.push("/notfound");
      }
    } catch(err) {
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
    // get info from gameData state
    const { _id, description, drunkRules, title, players, realRules, src, time, drunkRating } = this.state.gameData;

    return (

      <div>
        {
          // if this.state.isLoaded is true (after data has been retrieved), run the next ternary; otherwise show the loader
          this.state.isLoaded
          ?
            // ===== FOR DELETING A GAME =====
            // if this.state.redirect is "true"...
            this.state.redirect
            ?
            // ...then go to "/ShortTermGames/" route...
            this.props.history.push("/ShortTermGames")
            :
            // ...otherwise, display the game info
            <Container>
              <Card className="ShortTermGames-details text-center">
                <Card.Header className="ShortTermGames-header">{title}</Card.Header>
                
                <Row className="ShortTermGames-row1">
                  <Col className="ShortTermGames-col1" lg>
                    <div className="ShortTermGames-col1-div">
                      <div>
                        <Card.Title className="ShortTermGames-title">Number of Players</Card.Title>
                        
                        <Card.Text >
                          {players} player(s)
                        </Card.Text>
                      </div> 
                    </div>

                    <hr/>

                    <div className="ShortTermGames-col1-div">
                      <div className="ShortTermGames-col1-div-box">
                        <Card.Title className="ShortTermGames-title">Time</Card.Title>
                        <Card.Text>
                          {time} min.
                        </Card.Text>
                      </div>

                      <div className="divider"></div>

                      <div className="ShortTermGames-col1-div-box">
                        <Card.Title className="ShortTermGames-title">Drunk Rating</Card.Title>
                        <Card.Text>
                          {drunkRating}
                        </Card.Text>
                      </div>

                    </div>
                  </Col>

                  {/* ===== IMAGE =====  */}
                  <Col id="ShortTermGames-col2" lg>
                    <div className="ShortTermGames-col2-div">
                      <Card.Img 
                        variant="top" 
                        src={src}
                        alt="board game"
                        className="ShortTermGames-details-img"
                      />
                    </div>
                    
                  </Col>
                  
                </Row>
                
                {/* ===== DESCRIPTION ===== */}
                <Card.Body>
                  <Card.Title className="ShortTermGames-title">Description</Card.Title>
                  <Card.Text className="ShortTermGame-description">
                    {description}
                  </Card.Text>
                  
                  <hr className="ShortTermGames-hr" />

                  <Card.Title className="ShortTermGames-title">Drunk Rules</Card.Title>
                  <Card.Text className="ShortTermGames-drunk">
                    <div className="ShortTermGames-drunkRules">{drunkRules}</div>
                  </Card.Text>

                  <hr className="ShortTermGames-hr" />
                  
                  <a href={realRules} target="_blank" rel="noopener noreferrer"><Button variant="primary" className="ShortTermGames-real">Real Rules</Button></a>
                  
                  { this.state.authenticated
                    ?
                    <EditModal
                      id={_id}
                      passDataToParent={this.passDataToParent}
                      redirect={this.redirect}
                      apiRoute="/api/shorttermgames/"
                    />
                    :
                    null
                  }
                </Card.Body>
              </Card>
            </Container>
          :
          // loader
          <Loader />
        }
      </div>  
    );
  }
}

export default ShortTermDetails;
