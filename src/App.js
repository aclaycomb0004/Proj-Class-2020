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
      corresponding books based on the title, author, or genre you're looking
      for. This can be an especially useful tool if you're interested in a
      specific author or genre, and you'd like to find more books to read.
      Please select the method in which you'd like to search by and fill out the
      search field on that page.
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="MainCont">
          <IntroText />
          <div className="ButtonCont">
            <Link to="/searchByTitle">
              <NavButton buttonText={"Search by title"} />
            </Link>
            <Link to="/searchByAuthor">
              <NavButton buttonText={"Search by author"} />
            </Link>
            <Link to="/searchByGenre">
              <NavButton buttonText={"Search by genre"} />
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
            <Route exact path="/searchByGenre">
              <Search searchType="Genre" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
