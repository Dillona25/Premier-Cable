//* React tools
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
//* Components
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Nav />
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
