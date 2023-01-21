import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    // Creates the 3 list item menu options for sorting results at the top of the search bar
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
           let sortByOptionValue = this.sortByOptions[sortByOption];
           return <li 
                key={sortByOptionValue} 
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
           >{sortByOption}</li> 
        });
    }

    // Sets the currently selected sort option as active for styling
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    // Update the state of sortBy with a new selection
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }

    // Update the state of Term when user enters new input into Search Businesses field
    handleTermChange(event) {
        this.setState({ term: event.target.value})
    }

    // Update the state of Location when user enters new input into Where field
    handleLocationChange(event) {
        this.setState({ location: event.target.value})
    }

    // Call yelpSearch when the button is clicked
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input 
                        placeholder="Search Businesses"
                        onChange={this.handleTermChange} />
                    <input 
                        placeholder="Where?"
                        onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
                </div>
        )
    }
}

export default SearchBar;