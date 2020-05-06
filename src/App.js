import React from 'react';
import './index.css';
import './App.css';
import Header from './components/Header';
import NavButton from './components/NavButton';
import BookCarousel from './components/BookCarousel';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function IntroText() {
  return (
    <div className="Intro">
      Welcome to My Book Search. Please use this search engine to locate corresponding books based on the title, author, or genre you're looking for. This can be an especially useful tool if you're interested in a specific author or genre, and you'd like to find more books to read. Please select the method in which you'd like to search by and fill out the search field on that page.
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header />

    <div className="MainCont">

    <IntroText />
    <div className="ButtonCont">
      <NavButton buttonText={"Search by title"} path="/searchByTitle"/>
      <NavButton buttonText={"Search by author"} path="/searchByAuthor"/>
      <NavButton buttonText={"Search by genre"} path="/searchByGenre"/>
    </div>

    </div>
  <Router>
  <div>
    <Switch>
      <Route path="/">
      <BookCarousel />
      </Route>
      <Route path="/searchByTitle">
        <Search />
      </Route>
      <Route path="/searchByAuthor">
        {/* <Home /> */}
      </Route>
      <Route path="/searchByGenre">
        {/* <About /> */}
      </Route>
    </Switch>
  </div>
</Router>
</div>
  );
}

export default App;
