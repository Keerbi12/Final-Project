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