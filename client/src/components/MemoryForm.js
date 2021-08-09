import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Buttonstyled } from './Buttonstyled.style';

const Forminput = () => {

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
            <Buttonstyled>Submit</Buttonstyled>
        </Container>
    )
}

export default Forminput