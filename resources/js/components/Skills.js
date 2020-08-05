import React from "react";

import { Row, Col } from "react-bootstrap";

function Skills() {
    return (
        <section id="skills" className="w-100 mt-5">
            <div className="text-center text-primary fw-500 display-4 mb-4">
                Skills
            </div>
            <Row>
                <Col md={11} lg={9} className="mx-auto bg-info text-white">
                    <Row className="mx-0">
                        <Col
                            xl={6}
                            className="px-sm-5 px-3 pb-xl-5 pb-0 pt-4 skills-separator"
                        >
                            <div className="w-100 text-center fs-36 fw-600">
                                Front-end
                            </div>

                            <div className="fs-20 fw-500 mt-4">
                                Languages, I speak:
                            </div>
                            <Row>
                                <Col xs={4} className="pr-2 pl-3 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        HTML
                                    </div>
                                </Col>
                                <Col xs={4} className="px-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        CSS
                                    </div>
                                </Col>
                                <Col xs={4} className="pl-2 pr-3 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        JavaScript
                                    </div>
                                </Col>
                            </Row>

                            <div className="fs-20 fw-500 mt-5">
                                CSS frameworks and preprocessers:
                            </div>
                            <Row>
                                <Col xs={4} className="pl-3 pr-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Bootstrap
                                    </div>
                                </Col>
                                <Col xs={4} className="px-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Materialize
                                    </div>
                                </Col>
                                <Col xs={4} className="pr-3 pl-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Bulma
                                    </div>
                                </Col>
                                <Col className="px-3 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Sass
                                    </div>
                                </Col>
                            </Row>

                            <div className="fs-20 fw-500 mt-5">
                                Javascript frameworks and libraries:
                            </div>
                            <Row>
                                <Col xs={4} className="pl-3 pr-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        React
                                    </div>
                                </Col>
                                <Col xs={4} className="px-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Redux
                                    </div>
                                </Col>
                                <Col xs={4} className="pr-3 pl-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Vue
                                    </div>
                                </Col>
                                <Col className="px-3 mt-3 mb-5">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        jQuery
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} className="px-sm-5 px-3 pb-5 pt-4">
                            <div className="w-100 text-center fs-36 fw-600">
                                Back-end
                            </div>

                            <div className="fs-20 fw-500 mt-4">
                                Languages, I speak:
                            </div>
                            <Row>
                                <Col xs={4} className="pl-3 pr-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        PHP
                                    </div>
                                </Col>
                                <Col xs={4} className="px-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        NodeJs
                                    </div>
                                </Col>
                                <Col xs={4} className="pr-3 pl-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Python
                                    </div>
                                </Col>
                            </Row>

                            <div className="fs-20 fw-500 mt-5">Frameworks:</div>
                            <Row>
                                <Col xs={4} xl={6} className="pl-3 pr-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Laravel
                                    </div>
                                </Col>
                                <Col
                                    xs={4}
                                    xl={6}
                                    className="px-2 pr-xl-3 mt-3"
                                >
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Express
                                    </div>
                                </Col>
                                <Col
                                    xl={12}
                                    xs={4}
                                    className="pr-3 pl-2 px-xl-3 mt-3"
                                >
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        Django
                                    </div>
                                </Col>
                            </Row>

                            <div className="fs-20 fw-500 mt-5">Databases:</div>
                            <Row>
                                <Col xs={4} xl={6} className="pl-3 pr-2 mt-3">
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        MySql
                                    </div>
                                </Col>
                                <Col
                                    xs={4}
                                    xl={6}
                                    className="px-2 pr-xl-3 mt-3"
                                >
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        MongoDB
                                    </div>
                                </Col>
                                <Col
                                    xl={12}
                                    xs={4}
                                    className="pr-3 pl-2 px-xl-3 mt-3"
                                >
                                    <div className="bg-primary text-white br-20 d-flex justify-content-center align-items-center py-1 fs-18">
                                        PostgreSQL
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default Skills;
