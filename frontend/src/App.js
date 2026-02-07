import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#0A0E27] min-h-screen">
      <Header />
      <Hero />
      <About />
      <Interests />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;