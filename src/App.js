import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./blocks/Home/Home";
import About from "./blocks/About/About";
import Projects from "./blocks/Projects/projects";
import Contacts from "./blocks/ContactMe/Contacts";

const App = () => {
  return (
      <>
          <Header />
          <Home />
          <About />
          <Projects />
          <Contacts />
          <Footer />
      </>
  );
};

export default App;