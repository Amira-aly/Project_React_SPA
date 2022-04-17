import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import  Navbar  from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />

          <Route path="/" exact  component={Hero} />
          <Route path="/" exact  component={About} />
          <Route path="/" exact  component={Contact} />

          <Route path="/about"  component={About} />
          <Route path="/about"  component={Hero} />

          <Route path="/contact"  component={Hero} />
          <Route path="/contact"  component={Contact} />

          <Footer/>
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
