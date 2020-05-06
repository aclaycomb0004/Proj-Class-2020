import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import NavButton from "./components/NavButton";
import BookCarousel from "./components/BookCarousel";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function IntroText() {
  return (
    <div className="Intro">
      Welcome to My Book Search. Please use this search engine to locate
      corresponding books based on the title or author you're looking
      for. This can be an especially useful tool if you're interested in a
      specific author and you'd like to find more books to read.
      First select the method in which you'd like to search by, fill out the
      field below, then click "Search" or press enter.
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
          <Link to="/">
            <Header />
          </Link>

        <div className="MainCont">
          <IntroText />
          <div className="ButtonCont">
            <Link to="/searchByTitle">
              <NavButton buttonText={"Search by title"} />
            </Link>
            <Link to="/searchByAuthor">
              <NavButton buttonText={"Search by author"} />
            </Link>
          </div>
        </div>

        <div>
          <Switch>
            <Route exact path="/">
              <BookCarousel />
            </Route>
            <Route exact path="/searchByTitle">
              <Search searchType="Title" />
            </Route>
            <Route exact path="/searchByAuthor">
              <Search searchType="Author" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
