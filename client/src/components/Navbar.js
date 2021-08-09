import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import MemoryForm from './MemoryForm';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';
import { Buttonstyled } from './Buttonstyled.style';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Game Chat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Buttonstyled as={Link} to='/' >Search</Buttonstyled>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Buttonstyled onClick={() => setShowModal2(true)}>New memory</Buttonstyled>
                  <Buttonstyled as={Link} to='/saved'>
                    See your gaming memories
                  </Buttonstyled>
                  <Buttonstyled onClick={Auth.logout}>Logout</Buttonstyled>
                </>
              ) : (
                <Buttonstyled onClick={() => setShowModal(true)}>Login/Sign Up</Buttonstyled>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      {/*Second Modal */}
      <Modal
        size='lg'
        show={showModal2}
        onHide={() => setShowModal2(false)}
        aria-labelledby='signup-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Create a new gaming memory!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MemoryForm/>
          </Modal.Body>
      </Modal>
    </>
  );
};

export default AppNavbar;
