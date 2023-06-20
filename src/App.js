import React from 'react';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/projects";

const App = () => {
  return (
      <>
          <Header />
          <Home />
          <About />
          <Projects />
          <Footer />
      </>
  );
};

export default App;