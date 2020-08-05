import React from "react";

import { Row, Col, Button } from "react-bootstrap";

function About() {
    return (
        <section id="about" className="w-100 mt-5">
            <div className="text-center text-primary fw-500 display-4 mt-5 mb-4">
                About me
            </div>
            <Row className="mt-3 mx-0 w-100">
                <Col
                    md={11}
                    lg={9}
                    className="mx-md-auto bg-info text-white p-sm-5 p-3"
                >
                    <Row>
                        <Col
                            xl={6}
                            className="d-flex flex-column justify-content-between px-3"
                        >
                            <div className="fw-600 fs-24 about-title">
                                Hello, my name is Maxim Pozdnyakow
                            </div>
                            <p className="fs-18 lh-160 my-4 about-text ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam tincidunt lorem vitae neque
                                auctor consequat. Phasellus sit amet nibh
                                turpis. Proin maximus neque quis ante. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Nam tincidunt lorenibh turpis. Proin
                                maximus neque quis ante.
                            </p>
                            <Button
                                href="#contact"
                                variant="primary"
                                className="text-white fw-500 br-4 fs-24 btn-about"
                            >
                                Contact me
                            </Button>
                        </Col>
                        <Col
                            xl={6}
                            className="d-none d-xl-flex justify-content-end align-items-center"
                        >
                            <img
                                className="about-img"
                                src="https://i.ibb.co/zsksPGM/Pngtree-flat-cartoon-illustration-man-doing-5316320-removebg-1.png"
                                alt="..."
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default About;
