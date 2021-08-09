import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Game</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Discover">Discover</Nav.Link>
          <Nav.Link href="#Vault">Vault</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default AppNavbar;

