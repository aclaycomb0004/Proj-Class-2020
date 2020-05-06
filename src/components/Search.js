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
            <div className="SearchCont">
                <p className="SearchByText">Search by {this.props.searchType}:</p>
                <form className="FormCont" onSubmit={this.handleSubmit}>
                    <label>
                    Keyword(s):
                        <div className="TextField">
                            <input type="text" value={this.state.searchType} onChange={this.handleChange} />
                        </div>
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }

}

export default Search;