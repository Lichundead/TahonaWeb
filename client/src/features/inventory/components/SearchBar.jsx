import React from "react";

export const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Buscar producto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
        </div>
    );
};
