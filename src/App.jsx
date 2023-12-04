//* React tools
import React from "react";

//* Components
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
