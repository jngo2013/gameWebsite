import React from 'react';
import Image from 'react-bootstrap/Image';
import Spongebob from "./images/Spongebob.png";
import "./style.css"


function People(){
  return(
    <div>
      <h1 className="titleCenter">The Crew</h1>
      <hr></hr>
      <br></br>
      <br></br>
    <Image 
      className="borderPeople"
      src={Spongebob}
      roundedCircle
    />
    <h1>Spongebob</h1>
    <hr></hr>
    <p>
      Hi my name is spongebob and I live in a pineapple under the sea with my pet name Gary!
    </p>
    <br></br>
    
    <Image 
      className="borderPeople"
      src={Spongebob}
      roundedCircle
    />
    <h1>Spongebob</h1>
    <hr></hr>
    <p>
      Hi my name is spongebob and I live in a pineapple under the sea with my pet name Gary!
    </p>
    <br></br>
    </div>
  )
}

export default People;