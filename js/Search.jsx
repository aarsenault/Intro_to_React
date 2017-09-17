import React from 'react';
// import { shape, string } from 'prop-types';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => <div className="search">{preload.shows.map(show => <ShowCard show={show} />)}</div>;

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
