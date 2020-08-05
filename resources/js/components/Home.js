import React from "react";

import { Button, Col, Row } from "react-bootstrap";

function Home() {
    return (
        <section id="home" className="section-height">
            <Row className="h-100">
                <Col
                    xl={7}
                    lg={5}
                    className="position-relative home-left home-top "
                >
                    <div className="home-title fw-500 text-primary lh-1">
                        I build amazing websites
                    </div>
                    <div className="home-subtitle text-primary mb-4 mt-4 ">
                        Full Stack Web Developer
                    </div>
                    <div className="d-flex d-lg-block justify-content-center">
                        <Button
                            variant="primary"
                            className="mr-xl-5 mr-3 btn-home-size fw-500 br-10"
                            href="#portfolio"
                        >
                            See my work
                        </Button>
                        <Button
                            variant="outline-primary"
                            className="btn-home-size fw-500 br-10"
                            href="#skills"
                        >
                            Look at my skills
                        </Button>
                    </div>
                </Col>

                <Col
                    xl={5}
                    lg={7}
                    className="d-flex align-items-end justify-content-lg-end justify-content-center"
                >
                    <img
                        className="home-img"
                        src="https://i.ibb.co/WyXv60c/Group-1-2.png"
                        alt="..."
                    />
                </Col>
            </Row>
        </section>
    );
}

export default Home;
