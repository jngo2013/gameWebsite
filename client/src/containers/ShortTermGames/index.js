import React, { Component } from 'react';
import KitchenSinkCard from '../../components/KitchenSinkCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './styles.css';

class ShortTermGames extends Component {
  // ===== DEFAULT DATA FOR TESTING =====
  static defaultProps = {
    shortTermGames: [
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Charterstone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-4",
        time: "60min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "SeaFall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-2",
        time: "30min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Charterstone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-4",
        time: "60min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "SeaFall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-2",
        time: "30min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Charterstone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-4",
        time: "60min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "SeaFall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-2",
        time: "30min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Charterstone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-4",
        time: "60min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "SeaFall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-2",
        time: "30min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
      {
        src: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        name: "Gloomhaven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        players: "1-20",
        time: "90min",
        realRulesLink: "https://www.facebook.com/DrunkOnGamesChannel",
        drunkRulesLink: "https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg",
      },
    ]
  }


  render() {

  // ===== FUNCTIONS =====

  // MAP FUNCTION TO CREATE A CARD FOR EVERY GAME
  // for every game in the data, render a kitchen sink card with the information
  const allGames = this.props.shortTermGames.map(game => 
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="ShortTermGames-card">
      <KitchenSinkCard 
        src={game.src}
        name={game.name}
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
        <Container fluid className="ShortTermGames-container">
          <h1>Short Term Games</h1>
          <Row className="ShortTermGames-row">
            {/* ===== Game cards ===== */}
            {allGames}
          </Row>
          
        </Container>
        
        
      </div>
    );
  }
}

export default ShortTermGames;
