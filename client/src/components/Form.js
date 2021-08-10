<<<<<<< HEAD
import React from 'react';
import { Container, Form, Group, Label, Control } from 'react-bootstrap';

const Forminput = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Input Gaming Memory</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Forminput
=======
import React, { useState } from 'react';
<<<<<<<< HEAD:client/src/components/Form.js
import { Container, Form, Group, Label, Control, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { Buttonstyled } from './Buttonstyled.style';
========
import { Form, Alert, Button } from 'react-bootstrap';
>>>>>>>> parent of c969c9b (Created new page for saved memories in client.):client/src/components/MemoryForm.js

// import { createMemory } from '../utils/API'
import Auth from '../utils/auth';

<<<<<<<< HEAD:client/src/components/Form.js
    return (
        <Container>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Memory Title</Form.Label>
                <Form.Control type="text" placeholder="Your title" />
            </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Cool Screenshot</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Memory Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your description"/>
            </Form.Group>
        </Container>
    )
========
const createMemory = () => {
    console.log("Hi");
>>>>>>>> parent of c969c9b (Created new page for saved memories in client.):client/src/components/MemoryForm.js
}

const MemoryForm = () => {
    // Set the initial form state
    const [postFormData, setPostFormData] = useState({title:'', selectedFile:'', description:''});
    // Set the state for form validation
    const [validated] = useState(false);
    // Set the state for alert
    const [showPostAlert, setShowPostAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostFormData({ ...postFormData, [name]: value })
    }

    // prevent refresh
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await createMemory(postFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowPostAlert(true);
        }

        setPostFormData({
            title: '',
            selectedFile: '',
            description: '',
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowPostAlert(false)} show={showPostAlert} variant='danger'>
                Something went wrong with your memory creation!
                </Alert>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Memory Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your title"
                        name='title'
                        onChange={handleInputChange}
                        value={postFormData.title}
                        required/>
                </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Cool Screenshot</Form.Label>
                    <Form.Control 
                        type="file" 
                        name='selectedFile'
                        onChange={handleInputChange}
                        value={postFormData.selectedFile}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Memory Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Your description"
                        name='description'
                        onChange={handleInputChange}
                        value={postFormData.description}
                        required/>
                </Form.Group>
                <Button
                    disabled={!(postFormData.title && postFormData.description)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default MemoryForm;
>>>>>>> parent of c969c9b (Created new page for saved memories in client.)
