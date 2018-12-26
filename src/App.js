import React, { Component } from 'react';
import Header from './components/header_footer/Header'
import Featured from './components/featured';
import VenueNFO from './components/venueNFO';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer'


class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px",background:'cornflowerblue'}}>
        <Header />
        <Featured />
        <VenueNFO />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
