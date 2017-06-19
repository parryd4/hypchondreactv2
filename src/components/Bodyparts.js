import React from 'react'

const bodyparts = ["Chest","Head","Legs","Upper limbs","Stomach/Pelvis"]

export default function Bodyparts(props){
  return(
    <div>
      <ul className="list-unstyled">
        { bodyparts.map((part, index) => <li key={index}><button  onClick={props.setBodyPart} value={part}>{part}</button></li>) }
      </ul>
    </div>
  )
}
