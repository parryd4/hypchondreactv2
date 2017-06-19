import React from 'react'


export default function SymptomsList(props) {
  return (
    <div>
      <h4>Symptoms</h4>
      <ul className="list-unstyled">
        { props.symptoms.map( (s, i) => <li key={i}><button value={s} onClick={props.showTreatments}>{s}</button></li>) }
      </ul>
    </div>
  )
}
