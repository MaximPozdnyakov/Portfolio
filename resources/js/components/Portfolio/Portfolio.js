import React, { useEffect, useState } from "react";

const projects = [
    {
        img:
            "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Budget Keeper",
        body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lorem vitae neque auctor consequat. Phasellus sit amet nibh turpis.",
        technologies: ["React", "Redux", "Laravel", "Bootstrap", "MySQL"],
        link: "http://moneykeeeper.herokuapp.com",
        githubLink: "https://github.com/MaximPozdnyakov/BudgetApp"
    },
    {
        img:
            "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Lexa Blog",
        body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lorem vitae neque auctor consequat. Phasellus sit amet nibh turpis.",
        technologies: ["Vue", "Vuex", "Django", "Custom CSS", "MySQL"],
        link: "http://moneykeeeper.herokuapp.com",
        githubLink: "https://github.com/MaximPozdnyakov/LexaBlog"
    },
    {
        img:
            "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Sweet Shop",
        body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lorem vitae neque auctor consequat. Phasellus sit amet nibh turpis.",
        technologies: [
            "React",
            "Context",
            "NodeJs",
            "Express",
            "Bootstrap",
            "MongoDB"
        ],
        link: "https://frozen-oasis-60575.herokuapp.com",
        githubLink: "https://github.com/MaximPozdnyakov/SweetShop"
    },
    {
        img:
            "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Shorty Url",
        body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt lorem vitae neque auctor consequat. Phasellus sit amet nibh turpis.",
        technologies: ["Blade", "Laravel", "Bootstrap", "MySQL"],
        link: "https://shortturl.herokuapp.com",
        githubLink: "https://github.com/MaximPozdnyakov/URLShortener"
    }
];

import { Row, Col } from "react-bootstrap";

import { If, Then, Else } from "react-if";

import PortfolioMedia from "./PortfolioMedia";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    const medias = projects.map(
        ({ img, title, body, technologies, link, githubLink }) => {
            if (windowWidth >= 1200) {
                return (
                    <PortfolioMedia
                        img={img}
                        title={title}
                        body={body}
                        technologies={technologies}
                        link={link}
                        githubLink={githubLink}
                        key={title}
                    />
                );
            } else {
                return (
                    <Col xs={12} sm={6} className="mt-4" key={title}>
                        <PortfolioCard
                            img={img}
                            title={title}
                            body={body}
                            technologies={technologies}
                            link={link}
                            githubLink={githubLink}
                        />
                    </Col>
                );
            }
        }
    );
    return (
        <section id="portfolio" className="w-100 mt-5">
            <div className="text-center text-primary fw-500 display-4 mt-5 mb-0">
                Portfolio
            </div>
            <If condition={windowWidth >= 1200}>
                <Then>{medias}</Then>
                <Else>
                    <Row>
                        <Col md={11} lg={9} className="mx-auto">
                            <Row className="mt-2">{medias}</Row>
                        </Col>
                    </Row>
                </Else>
            </If>
        </section>
    );
}

export default Portfolio;
