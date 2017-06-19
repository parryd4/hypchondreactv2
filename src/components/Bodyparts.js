import React from 'react'

// const bodyparts = ["Chest","Head","Legs","Upper limbs","Stomach/Pelvis"]

export default function Bodyparts(props){
  return(
    <div>

      <div className="row">
        <div className="col-sm-2">
          <select defaultValue="" onChange={props.filterBodyPart}>
            <option value="">All Body Parts</option>
            <option value="Chest">Chest</option>
            <option value="Head">Head</option>
            <option value="Legs">Legs</option>
            <option value="Upper limbs">Upper Limbs</option>
            <option value="Stomach/Pelvis">Stomach / Pelvis</option>
          </select>
        </div>
      </div>
    </div>
  )
}



// <ul className="list-unstyled">
//   { bodyparts.map((part, index) => <li key={index}><button  onClick={props.setBodyPart} value={part}>{part}</button></li>) }
// </ul>
