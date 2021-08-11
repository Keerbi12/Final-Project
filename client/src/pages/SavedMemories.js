import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col, Card, CardColumns, Button } from 'react-bootstrap';
import { getMe } from '../utils/API';
import { MemoryCard } from '../components/MemoryCard';
import Auth from '../utils/auth';

const SavedMemories = () => {

    // useState returns state and update function */
    const [userData, setUserData] = useState({1:"1"});

    // use this to determine if `useEffect()` hook needs to run again
    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        // Checks to see if the user is logged in
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const response = await getMe(token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, [userDataLength]);

    // if data isn't here yet, say so
    if (!userDataLength) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            {/* Jumbotron showcasing the memories page */}
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                <h1>Viewing saved memories!</h1>
                </Container>
            </Jumbotron>

            {/* Will display the amount of memories */}
        <Container >
            <h2>
            Memories
            </h2>
            <CardColumns>
                <Card border='dark'>
                    <Card.Img src="../../../public/logo192.png" alt={`A gaming memory for`} variant='top' />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <p className='small'>User</p>
                        <Card.Text>Description</Card.Text>
                        <Button className='btn-block btn-danger'>
                            Delete Memory
                        </Button>
                    </Card.Body>
                </Card>
            </CardColumns>
            {/* Card columns for Memories */}
            <Row>
                <Col md="auto"><MemoryCard /></Col>
                <Col md="auto"><MemoryCard /></Col>
                <Col md="auto"><MemoryCard /></Col>
                <Col md="auto"><MemoryCard /></Col>
            </Row>
        </Container>
      </>
    ) 
};
  
export default SavedMemories;
