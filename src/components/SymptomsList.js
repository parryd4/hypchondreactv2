import React from 'react'


export default function SymptomsList(props) {
  return (
    <div>
      <h4></h4>
      <table className="table">
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
                  <td><button value={s} onClick={props.showTreatments}>{s.symptom}</button></td>
                </tr>
              )}
            }
          )}
        </tbody>
      </table>
    </div>
  )
}
