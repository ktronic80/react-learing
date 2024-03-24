import React, {useState} from 'react'


export default function NameSearchBar({onChange, searchInput}) {


  console.log(searchInput);

  
  return (
    <div className="search">
        <input
            type="text"
            placeholder="Search here"
            onChange={onChange}
            value={searchInput} 
        />
      </div>
  );
}