import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { getMe } from '../utils/API';
// import { deleteBook } from '../utils/API';
import { MemoryCard } from '../components/MemoryCard';
// import { getMemory } from '../utils/API';
import Auth from '../utils/auth';
// import { removeBookId } from '../utils/localStorage';

const SavedMemories = () => {

    // useState returns state and update function */
    const [userData, setUserData] = useState({"test": 1});

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

    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    // const handleDeleteBook = async (bookId) => {
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //     return false;
    //     }

    //     try {
    //     const response = await deleteBook(bookId, token);

    //     if (!response.ok) {
    //         throw new Error('something went wrong!');
    //     }

    //     const updatedUser = await response.json();
    //     setUserData(updatedUser);
    //     // upon success, remove book's id from localStorage
    //     removeBookId(bookId);
    //     } catch (err) {
    //     console.error(err);
    //     }
    // };

    // if data isn't here yet, say so
    if (!userDataLength) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            {/* Jumbotron showcasing the memories page */}
            <Jumbotron fluid className='text-light bg-dark'>
                <Container>
                <h1>Viewing saved books!</h1>
                </Container>
            </Jumbotron>

            {/* Will display the amount of memories */}
        <Container >
            <h2>
            Memories
            </h2>

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

