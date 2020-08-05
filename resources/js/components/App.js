import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";

function App() {
    return (
        <>
            <header className="fixed-top">
                <Header />
            </header>
            <main className="bg-secondary overflow-x">
                <Home />
                <Portfolio />
                <Skills />
                <About />
                <Contact />
            </main>
            <footer className="w-100 bg-secondary pt-5">
                <Footer />
            </footer>
        </>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
