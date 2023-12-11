import React from 'react'

function Search({search,setsearch}) {







    return (
        <form className="search" onSubmit={(e) => e.preventDefault()}>

            <label htmlFor='search'>Search</label>
            <br/><input

                id='search'
                type="text"
                role="searchbox"
                placeholder='searchitem'
                value={search}
                onChange={(e)=>setsearch(e.target.value)}

            />











        </form>
    )
}

export default Search