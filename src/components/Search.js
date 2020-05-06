import React from 'react';




class Search extends React.Component {

    state = {
        searchRequest: "",
        searchResults: []
    }
    handleChange = (event) => {
        this.setState({searchRequest: event.target.value});
      }
    
      handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.searchRequest);
        event.preventDefault();
      }
    render() {
        console.log("search page")
        return (
            <div>
                <p>Search by {this.props.searchType}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Search;