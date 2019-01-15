import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './jumbotron.css';

const JumbotronPart = () => (
  <Jumbotron>
  <div className="container">
    <h1>Street Fighter!</h1>
    <p>
      Pick an opponent to fight but don't click on the same one twice!
    </p>
    </div>
  </Jumbotron>
);

export default JumbotronPart;
