import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, CardColumns, Card, } from 'react-bootstrap';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';
// import { removeBookId } from '../utils/localStorage';


const SavedMemories = () => {
    const [userData, setUserData] = useState({});

    // use this to determine if `useEffect()` hook needs to run again
    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
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
        <Jumbotron fluid className='text-light bg-dark'>
            <Container>
            <h1>Viewing your memories!</h1>
            </Container>
        </Jumbotron>
        <Container>
            <CardColumns>
                {userData.savedBooks.map((book) => {
                    return (
                        <Card border='dark'>
                            <Card.Title>
                                {book.title}
                            </Card.Title>
                            <Card.Img src="../../public/logo192.png"/>
                            <Card.Body>
                                Description
                            </Card.Body>
                        </Card>
                    );
                })}
            </CardColumns>
        </Container>
    </>
    ) 
};
  
export default SavedMemories;


  