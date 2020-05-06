import React from "react"
class Search extends React.Component {
  state = {
    searchRequest: "",
    searchResults: null,
    loaded: false,
    loading: false,
  }
  componentDidUpdate(prevProps) {
    if (this.props.searchType !== prevProps.searchType) {
      this.setState({searchResults: null, searchRequest: ""})
    }
  }
  handleChange = (event) => {
    this.setState({searchRequest: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({searchResults: null, loading: true, loaded: false})
    this.fetchBooks()
  }
  fetchBooks = async () => {
    let keywords = this.state.searchRequest.split(" ").join("+")
    const url = `http://openlibrary.org/search.json?${this.props.searchType.toLowerCase()}=${keywords}`
    const res = await fetch(url)
    const books = await res.json()
    this.setState({searchResults: books, loaded: true, loading: false})
  }
  render() {
    const ListResults = () => {
      return (
        <div>
          {this.state.loaded && (
            <p>
              There are{" "}
              {this.state.searchResults && this.state.searchResults.docs.length
                ? this.state.searchResults.docs.length
                : 0}{" "}
              results
            </p>
          )}
          <ul>
            {this.state.searchResults &&
              this.state.searchResults.docs.map((book) => {
                return (
                  <li key={book.key}>
                    <p>{book.title}</p>
                    <p>{book.author_name}</p>
                  </li>
                )
              })}
          </ul>
        </div>
      )
    }
    return (
      <div className="SearchCont">
        <p className="SearchByText">Search by {this.props.searchType}:</p>
        <form className="FormCont" onSubmit={this.handleSubmit}>
          <label>
            Keyword(s):
            <div className="TextField">
              <input
                type="text"
                value={this.state.searchRequest}
                onChange={this.handleChange}
                disabled={this.state.loading}
              />
            </div>
          </label>
          {!this.state.loading ? (
            <input type="submit" value="Search" />
          ) : (
            <p>Loading Results...</p>
          )}
        </form>
        <div>
          <ListResults />
        </div>
      </div>
    )
  }
}
export default Search

