import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TransactionNewForm() {
    const navigate = useNavigate()

    const [contacts, setContacts] = useState([]);
    const [contactData, setContactData] = useState({ name: "", email: "", cell: "" });
    const [profilePic, setProfilePic] = useState("");
    const [profilePicPaths, setProfilePicPaths] = useState([]);

    useEffect(() => {
        props.isAuthenticated !== true && (
            navigate('/')
        )
    }, []);

    return (
        < Container >
            <Row className="px-4 my-5">
                <Col><h1>Transaction</h1></Col>
            </Row>
            
            <Row className="px-4 my-5">
                <Col sm={3}>
                    <h2>Add New Transaction</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Contact name"
                                value={contactData.name}
                                onChange={evt => setContactData({ ...contactData, name: evt.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Contact email"
                                value={contactData.email}
                                onChange={evt => setContactData({ ...contactData, email: evt.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Cell</Form.Label>
                            <Form.Control type="text" placeholder="nnn-nnn-nnnn"
                                value={contactData.cell}
                                onChange={evt => setContactData({ ...contactData, cell: evt.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Profile Pic</Form.Label>
                            <Form.Control type="file" accept="image/png"
                                onChange={evt => setProfilePic(evt.target.files[0])} />
                        </Form.Group>
                        {/* <Button variant="primary" type="button" onClick={addNewContact}>Add Contact &gt;&gt;</Button>&nbsp; */}
                        <Button variant="primary" type="button" >Add Contact &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default TransactionNewForm