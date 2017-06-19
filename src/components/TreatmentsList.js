import React from 'react'
import { Link, Route } from 'react-router-dom'


export default function TreatmentsList(props){
  //console.log(props)
  return(
    <div>
      <h4>Treatments</h4>
      <table>
        <tbody>
          <tr>
            <th>Treatment Name</th><th>Upvotes</th><th>Downvotes</th>
          </tr>
          { props.treatments.map( (t, i) => <tr key={i}><td><Link to={`/${t.id}`}>{t.treatment_name}</Link></td> <td>{t.upvotes}</td><td>{t.downvotes}</td></tr>) }
        </tbody>
      </table>
      <button onClick={(event) => window.location = '/new'}>Create New Treatment</button>


    </div>
  )
}
