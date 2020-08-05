import React, { useState } from "react";

import { Row, Col, Button, Form, Alert } from "react-bootstrap";

import { If, Then, Else } from "react-if";

import axios from "axios";

function Contact() {
    const [showAlert, setShowAlert] = useState(false);
    const openAlert = () => setShowAlert(true);
    const closeAlert = () => setShowAlert(false);

    const [name, setName] = useState("");
    const [isInvalidName, setIsInvalidName] = useState(false);
    const onNameChange = e => {
        setName(e.target.value);
        setIsInvalidName(false);
    };

    const [email, setEmail] = useState("");
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const onEmailChange = e => {
        setEmail(e.target.value);
        if (!e.target.value) {
            setIsInvalidEmail(false);
        } else {
            setIsInvalidEmail(
                !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    e.target.value.toLowerCase()
                )
            );
        }
    };

    const [message, setMessage] = useState("");
    const [isInvalidMessage, setIsInvalidMessage] = useState(false);
    const onMessageChange = e => {
        setMessage(e.target.value);
        setIsInvalidMessage(false);
    };

    const isValidForm = () => name && email && message;

    const sendEmail = () => {
        if (isValidForm()) {
            axios({
                method: "post",
                url: "mail/send",
                data: { name, email, message },
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => openAlert());
        } else {
            if (!name) {
                setIsInvalidName(true);
            }
            if (!email) {
                setIsInvalidEmail(true);
            }
            if (!message) {
                setIsInvalidMessage(true);
            }
        }
    };

    return (
        <section id="contact" className="w-100 mt-5">
            <div className="text-center text-primary fw-500 display-4 mb-4">
                Contact me
            </div>
            <Row className="mt-3 w-100 mx-0">
                <Col xl={6} lg={7} md={9} className="mx-auto">
                    <If condition={showAlert}>
                        <Alert
                            variant="success"
                            onClose={closeAlert}
                            dismissible
                        >
                            <div className="fs-18">
                                Thank you, I will contact you soon!
                            </div>
                        </Alert>
                    </If>
                    <Form
                        noValidate
                        className="d-flex flex-column justify-content-between h-100"
                    >
                        <Form.Row>
                            <Col xs={12} sm={6} className="px-0">
                                <Form.Group
                                    as={Col}
                                    controlId="name"
                                    className="pl-1 pr-1 pr-sm-2"
                                >
                                    <Form.Label className="fs-24 text-primary fw-700">
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        placeholder="Enter your name"
                                        className="bg-info text-white fw-500"
                                        value={name}
                                        onChange={onNameChange}
                                        isInvalid={isInvalidName}
                                    />
                                    <Form.Control.Feedback
                                        className="fs-14"
                                        type="invalid"
                                    >
                                        This field is required
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} className="px-0">
                                <Form.Group
                                    as={Col}
                                    controlId="email"
                                    className="pr-1 pl-1 pl-sm-2"
                                >
                                    <Form.Label className="fs-24 text-primary fw-700">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        size="lg"
                                        className="bg-info text-white fw-500"
                                        value={email}
                                        onChange={onEmailChange}
                                        isInvalid={isInvalidEmail}
                                    />
                                    <If condition={!email}>
                                        <Then>
                                            <Form.Control.Feedback
                                                className="fs-14"
                                                type="invalid"
                                            >
                                                This field is required
                                            </Form.Control.Feedback>
                                        </Then>
                                        <Else>
                                            <Form.Control.Feedback
                                                className="fs-14"
                                                type="invalid"
                                            >
                                                Email format is invalid
                                            </Form.Control.Feedback>
                                        </Else>
                                    </If>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Group controlId="message">
                            <Form.Label className="fs-24 text-primary fw-700">
                                Message
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                size="lg"
                                rows={5}
                                placeholder="Enter your message"
                                className="bg-info text-white fw-500"
                                value={message}
                                onChange={onMessageChange}
                                isInvalid={isInvalidMessage}
                            />
                            <Form.Control.Feedback
                                className="fs-14"
                                type="invalid"
                            >
                                This field is required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            href="#contact"
                            variant="primary"
                            className="text-white fw-500 br-4 fs-24 "
                            onClick={sendEmail}
                        >
                            Send message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </section>
    );
}

export default Contact;
