//* React tools
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
//* Components
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import About from "../About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Hero />
            <Services />
            <Testimonials />
            <Footer />
          </Route>
          <Route path="/contact">
            <Nav />
            <Contact />
            <Footer />
          </Route>
          <Route to="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
