import React, { Component } from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import ReelGallery from "./Components/Reels/ReelGallery";
import Footer from "./Components/Footer";
import "./fonts/Amiri-Regular.ttf";
import "./fonts/CinzelDecorative-Regular.ttf";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <ReelGallery />
        <Hero />
        <Footer />
      </main>
    );
  }
}

export default App;
