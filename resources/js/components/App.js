import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Home from "./Home";

function App() {
    return (
        <>
            <header className="sticky-top">
                <Header />
            </header>
            <main className="bg-secondary overflow-x">
                <Home />
                <Portfolio />
                <About />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
