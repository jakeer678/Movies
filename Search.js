import React from 'react'

const Search = (props) => {
  return (
    <div>
    <input value={props.value} placeholder="Type to search" className='inputsearch' onChange={(event)=>props.setSearchValue(event.target.value)}></input>
  </div>
  )
}

export default Search
