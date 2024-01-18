import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Events from "./Components/Events/Events";
import Home from "./Components/Home/Home";
import Sponsors from "./Components/Sponsors/Sponsors";
import Committees from "./Components/Committees/Committees";
import Location from "./Components/Location/Location";
import Accomodation from "./Components/Accomodation/Accomodation";
import Souvenir from "./Components/Souvenir/Souvenir";
import Registration from "./Components/Registration/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/location" element={<Location />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/souvenir" element={<Souvenir />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
