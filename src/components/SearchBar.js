import React from 'react'

export default function SearchBar(props) {
  return (
    <div className="ui huge fluid icon input">
      <input type="text" placeholder="Search Symptoms" onChange={props.searchSymptom}/>
    </div>
  )
}
