import React from 'react'
import { Link, Route } from 'react-router-dom'


export default function SymptomsList(props) {
  return (
    <div>
      <h4></h4>
      <table className="table">
      <col width="700px" />
      <col width="700px" />
        <tr>
          <th>Body Part</th>
          <th>Symptoms</th>
        </tr>
        <tbody>
          { props.symptoms.map( (s, i) => {
            if (s.bodypart.match( props.filterTerm ) &&
                s.symptom.toLowerCase().match( props.searchTerm.toLowerCase() )) {
              return (
                <tr key={i}>
                  <td>{s.bodypart}</td>
                  <Link to="/"><td><button className="btn btn-primary" value={s} onClick={props.showTreatments}>{s.symptom}</button></td></Link>
                </tr>
              )}
            }
          )}
        </tbody>
      </table>
    </div>
  )
}
