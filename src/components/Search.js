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
        return (
            <div>
                <p>This is my search component.</p>
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