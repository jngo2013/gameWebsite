import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import "./style.css"

export default (props) => (
  <div>
<Jumbotron>
  <h1 className="jumbotronText">Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>
</div>
);