import React from 'react'
import { CardColumns, Card, Button } from 'react-bootstrap';

export const MemoryCard = () => {
    return (
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
    )
}