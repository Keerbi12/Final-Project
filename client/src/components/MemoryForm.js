import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { createMemory } from '../utils/API';

const Forminput = () => {
    // set initial form state
    const [postFormData, setPostFormData] = useState({ postTitle: '', postFileInput: '', postDescription: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
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
       
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setPostFormData({
            postTitle: '',
            postInputFile: '',
            postDescription: '',
        });
    };
    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your memory creation!
                </Alert>
                
                {/* The title of the memory modal, required field */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Memory Title</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Your title'
                        name='postTitle'
                        onChange={handleInputChange}
                        value={postFormData.postTitle}
                        required 
                    />
                </Form.Group>
                {/* Image of the gaming moment, not required, will have stock image as default */}
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Cool Screenshot</Form.Label>
                    <Form.Control 
                        type='file' 
                        name='fileInput'
                        onChange={handleInputChange}
                        value={postFormData.fileInput}
                    />
                </Form.Group>

                {/* The description of the gaming moment, required */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Memory Description</Form.Label>
                    <Form.Control 
                        as='textarea' rows={3} 
                        placeholder='Your description'
                        name='postDescription'
                        onChange={handleInputChange}
                        value={postFormData.postDescription}
                        required
                    />
                </Form.Group>

                {/* Button will be disabled until both the postTitlae and postDesription have text. */}
                <Button
                    disabled={!(postFormData.postTitle && postFormData.postDescription)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Forminput