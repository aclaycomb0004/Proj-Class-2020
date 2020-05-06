import React from "react";

class Search extends React.Component {
  state = {
    searchRequest: "",
    searchResults: [],
  };
  handleChange = (event) => {
    this.setState({ searchRequest: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchBooks();
  };

  fetchBooks = async () => {
    let keywords = this.state.searchRequest.split(" ").join("+");
    const url = `http://openlibrary.org/search.json?title=${keywords}`;
    const res = await fetch(url);
    const books = await res.json();
    this.setState({ searchResults: books });
    console.log(books);
  };

  render() {
    const ListResults = () => {
      return (
        <ul>
          {this.state.searchResults.length &&
            this.state.searchResults.docs.map((book) => {
              return <li>{book.title}</li>;
            })}
        </ul>
      );
    };
    console.log("search page", this.state);
    return (
      <div className="SearchCont">
        <p className="SearchByText">Search by {this.props.searchType}:</p>
        <form className="FormCont" onSubmit={this.handleSubmit}>
          <label>
            Keyword(s):
            <div className="TextField">
              <input
                type="text"
                value={this.state.searchType}
                onChange={this.handleChange}
              />
            </div>
          </label>
          <input type="submit" value="Search" />
        </form>
        <div>
          <ListResults />
        </div>
      </div>
    );
  }
}

export default Search;
