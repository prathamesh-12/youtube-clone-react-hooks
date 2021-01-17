/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {

    const [item, setItem] = useState('');

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        onSearchSubmit(item);
    }

    return (
        <div>
            <div className="ui segment">
                <form  className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search">Search : </label>
                        <input type="text" id="search" onChange={(e) => setItem(e.target.value)}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;