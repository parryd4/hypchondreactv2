import React from 'react'
import { Link, Route } from 'react-router-dom'


export default function TreatmentsList(props){
  return(

    <div>
    <style>{"table{border:1px solid grey; background-color: #eeffff}"}</style>
      <h4>Treatments</h4>
      <table>
      <col width="200px"/>
      <col width="100px"/>
      <col width="100px"/>
        <tbody>
          <tr>
            <th>Treatment Name</th><th>Upvotes</th><th>Downvotes</th>
          </tr>
          { props.treatments.map( (t, i) => <tr key={i}><td><Link to={`/${t.id}`}>{t.treatment_name}</Link></td> <td>{t.upvotes}</td><td>{t.downvotes}</td></tr>) }
        </tbody>
      </table>
      <Link to="/new"><p className="btn btn-primary">Create New Treatment</p></Link>


    </div>
  )
}
