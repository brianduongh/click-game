import React from 'react';
import { Navbar } from 'react-bootstrap';
import './navbar.css';

const Navigationbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Clicky Game
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Text>
      Result 0 | 1
    </Navbar.Text>
    <Navbar.Text>
      Click An image to begin!
    </Navbar.Text>
  </Navbar>
);

export default Navigationbar;
