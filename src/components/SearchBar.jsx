import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <section className="search-section">
            <input
                type="text"
                placeholder="🔍 Buscar producto por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </section>
    );
}

export default SearchBar;
