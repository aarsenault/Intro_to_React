import React, { Component } from 'react';
// import { shape, string } from 'prop-types';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serchTerm: 'this is some sort of debug statement'
        };

        // bind this in the constructor so it gets called only once
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <div className="search">
                <header>
                    <h1>svideo</h1>

                    <input
                        onChange={this.handleSearchTermChange}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                </header>
                <div> {preload.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}</div>
            </div>
        );
    }
}

// ShowCard.propTypes = {
//     show: shape({
//         poster: string.isRequired,
//         title: string.isRequired,
//         year: string.isRequired,
//         description: string.isRequired
//     }).isRequired
// };

export default Search;

/*


Notes:

To simply look at the data dump:
<pre>
    <code>{JSON.stringify(preload, null, 4)} </code>
</pre>


*/
