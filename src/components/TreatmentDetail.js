import React from 'react'
import { Link } from 'react-router-dom'

export default function TreatmentDetail({treatment, deleteTreatment,voteMethod}){
  if (!treatment) {
    return null
  }
  return(
    <div>
      <h2>{treatment.treatment_name}</h2>
      <p>{treatment.treatment_description}</p>

      <p className="btn btn-primary" onClick={() => voteMethod("upvotes",treatment)}>Upvote!</p>
      <p>Upvotes: {treatment.upvotes} </p>
      <button name="downvotes" className="btn btn-primary" onClick={(e) => voteMethod("downvotes",treatment,e)}>Downvote!</button>
      <p>Downvotes: {treatment.downvotes}</p>
      <Link to={`${treatment.id}/edit`}  className="btn btn-primary">Edit</Link>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => deleteTreatment(treatment.id) }>Delete This Treatment</button>

    </div>
  )
}
