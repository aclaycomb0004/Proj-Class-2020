import React from 'react';
import './index.css';
import './App.css';
import Header from './components/Header';
import NavButton from './components/NavButton';


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
    <div>
      <NavButton />
      <NavButton />
      <NavButton />
    </div>

    </div>

    </div>
  );
}

export default App;
