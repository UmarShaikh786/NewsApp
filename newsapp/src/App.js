import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  pagesize=6;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/"
            
              element=
              {
                <News
                  key="general"
                  pagesize={this.pagesize}
                  category="general"
                  country="in"
                />
              }
            />
            <Route exact path="/business"
              
              element=
              {
                <News
                  key="business"
                  pagesize={this.pagesize}
                  category="business"
                  country="in"
                />
              }
            />
            <Route exact path="/technology"
              
              element=
              {
                <News
                  key="technology"
                  pagesize={this.pagesize}
                  category="technology"
                  country="in"
                />
              }
            />
            <Route exact path="/sports"
              
              element=
              {
                <News
                  key="sports"
                  pagesize={this.pagesize}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route exact path="/science"
              
              element=
              {
                <News
                  key="science"
                  pagesize={this.pagesize}
                  category="science"
                  country="in"
                />
              }
            />
            <Route exact path="/entertainment"
              
              element=
              {
                <News
                  key="entertainment"
                  pagesize={this.pagesize}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route exact path="/health"
              
              element=
              {
                <News
                  key="health"
                  pagesize={this.pagesize}
                  category="health"
                  country="in"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
