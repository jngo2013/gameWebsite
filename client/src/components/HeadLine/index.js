import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import "./style.css"

export default (props) => (
  <div>
    
<Jumbotron className='jumbotron'>
  <div>
  <h1 className="jumbotronText">Our Story</h1>
  <p className="jumbotronText">
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  </div>
</Jumbotron>
</div>
);