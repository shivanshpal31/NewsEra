import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComponent from "./Components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };

  setProgress = (progress)=> {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={5}
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* <NewsComponent setProgress = {setProgress} pageSize={9} country="in" category="general" /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="general1"
                  pageSize={9}
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/Business"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="business1"
                  pageSize={9}
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/Entertainment"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="entertainment1"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/Health"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="health1"
                  pageSize={9}
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/Sciences"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="sciences1"
                  pageSize={9}
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/Sports"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="sports1"
                  pageSize={9}
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            ></Route>

            <Route
              exact
              path="/Technology"
              element={
                <NewsComponent
                  setProgress={this.setProgress}
                  key="technology1"
                  pageSize={9}
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
