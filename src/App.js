import React from 'react';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
  return (
      <>
          <Header />
          <Home />
          <About />
          <Footer />
      </>
  );
};

export default App;