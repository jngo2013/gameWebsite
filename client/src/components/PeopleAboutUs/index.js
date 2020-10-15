import React from 'react';
import Image from 'react-bootstrap/Image';
import Spongebob from "./images/Spongebob.png"


function People(){
  return(
    <div>
    <Image 
      className="border"
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
      className="border"
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