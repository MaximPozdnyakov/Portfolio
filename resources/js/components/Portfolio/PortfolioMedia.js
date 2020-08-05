import React, { useState, useEffect } from "react";

import { Media, Button, Row, Col } from "react-bootstrap";

function PortfolioMedia(props) {
    const { img, title, body, technologies, link, githubLink } = props;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    const technologiesRow = (
        <Row className=" px-2">
            {technologies.map((name, i) => (
                <Col
                    key={name}
                    className="px-2 mt-2"
                    xl={windowWidth >= 1500 ? "" : i >= 3 ? "" : 4}
                >
                    <div className="bg-secondary br-20 d-flex justify-content-center align-items-center py-1 fs-18 fw-500">
                        {name}
                    </div>
                </Col>
            ))}
        </Row>
    );

    return (
        <Row className="my-4">
            <Col xs={9} className="bg-white mx-auto pl-0">
                <Media bg="white">
                    <img height={350} alt="..," src={img} />
                    <Media.Body
                        className="d-flex flex-column justify-content-between p-4"
                        style={{ height: 350 }}
                    >
                        <div className="fw-600 fs-30 lh-75">{title}</div>
                        <div className=" fs-18">{body}</div>
                        {technologiesRow}
                        <div className=" d-flex">
                            <Button
                                href={link}
                                variant="primary"
                                className="text-white fw-600 br-4 fs-18 visit-btn-p mr-4"
                            >
                                Visit
                            </Button>
                            <Button
                                href={githubLink}
                                variant="outline-primary"
                                className="d-flex align-items-center br-4 fs-18 visit-btn-p github-btn"
                            >
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        d="M13.0609 3.65765C12.435 2.58515 11.5859 1.73605 10.5135 1.11016C9.44092 0.484238 8.26999 0.171356 6.99989 0.171356C5.72994 0.171356 4.55864 0.484334 3.4863 1.11016C2.4138 1.73602 1.56476 2.58515 0.938805 3.65765C0.312946 4.73012 0 5.90127 0 7.17105C0 8.69636 0.445013 10.0679 1.33526 11.2862C2.22542 12.5045 3.37536 13.3475 4.78501 13.8154C4.94909 13.8458 5.07056 13.8244 5.14954 13.7517C5.22855 13.6788 5.26801 13.5876 5.26801 13.4783C5.26801 13.4601 5.26644 13.2961 5.26341 12.9862C5.26028 12.6762 5.25881 12.4058 5.25881 12.1751L5.04917 12.2114C4.91551 12.2359 4.74689 12.2462 4.54331 12.2433C4.33983 12.2405 4.1286 12.2191 3.90989 12.1795C3.69109 12.1402 3.48757 12.0491 3.29919 11.9063C3.11091 11.7635 2.97725 11.5766 2.89823 11.3458L2.80709 11.1361C2.74634 10.9964 2.6507 10.8413 2.52004 10.6713C2.38937 10.5011 2.25724 10.3857 2.12358 10.325L2.05977 10.2793C2.01724 10.249 1.97779 10.2123 1.9413 10.1698C1.90484 10.1274 1.87755 10.0848 1.85932 10.0422C1.84106 9.99963 1.85619 9.96468 1.90487 9.93725C1.95356 9.90983 2.04154 9.89652 2.1692 9.89652L2.35142 9.92375C2.47295 9.94811 2.62328 10.0209 2.80259 10.1425C2.98181 10.264 3.12914 10.4219 3.2446 10.6163C3.38443 10.8655 3.55289 11.0553 3.75046 11.186C3.94788 11.3167 4.14692 11.3819 4.3474 11.3819C4.54788 11.3819 4.72103 11.3667 4.86692 11.3365C5.01265 11.3061 5.14938 11.2604 5.27704 11.1997C5.33173 10.7924 5.48062 10.4795 5.72359 10.2608C5.37728 10.2244 5.06593 10.1696 4.78938 10.0967C4.51299 10.0237 4.22737 9.9053 3.93271 9.74108C3.6379 9.57709 3.39334 9.37345 3.19895 9.13052C3.00454 8.88745 2.84499 8.56834 2.72052 8.17348C2.59598 7.77846 2.5337 7.32279 2.5337 6.80633C2.5337 6.07097 2.77377 5.44521 3.2538 4.92869C3.02893 4.37584 3.05016 3.75607 3.31755 3.06946C3.49377 3.01471 3.75509 3.0558 4.1014 3.19246C4.44777 3.32919 4.70137 3.44632 4.86245 3.54343C5.02354 3.64051 5.15261 3.72278 5.24984 3.7895C5.81505 3.63157 6.39832 3.55259 6.99982 3.55259C7.60133 3.55259 8.18473 3.63157 8.74996 3.7895L9.0963 3.57085C9.33314 3.42496 9.61282 3.29127 9.93467 3.16974C10.2567 3.04827 10.503 3.01481 10.6732 3.06956C10.9465 3.7562 10.9709 4.37593 10.7459 4.92878C11.2259 5.4453 11.4661 6.07123 11.4661 6.80642C11.4661 7.32288 11.4036 7.77999 11.2793 8.17805C11.1548 8.57616 10.9938 8.89495 10.7964 9.13508C10.5988 9.37518 10.3526 9.57722 10.058 9.74118C9.76328 9.90527 9.47756 10.0237 9.20117 10.0967C8.92465 10.1697 8.6133 10.2245 8.26699 10.261C8.58284 10.5343 8.7408 10.9657 8.7408 11.5551V13.4781C8.7408 13.5873 8.77879 13.6785 8.85483 13.7514C8.93078 13.8242 9.05071 13.8456 9.2148 13.8151C10.6246 13.3473 11.7746 12.5043 12.6647 11.2859C13.5547 10.0677 13.9999 8.6961 13.9999 7.1708C13.9996 5.90117 13.6865 4.73012 13.0609 3.65765Z"
                                        fill="black"
                                    />
                                </svg>
                                <div>Github</div>
                            </Button>
                        </div>
                    </Media.Body>
                </Media>
            </Col>
        </Row>
    );
}

export default PortfolioMedia;
