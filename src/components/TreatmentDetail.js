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

      <button name="upvotes" className="btn btn-primary" onClick={() => voteMethod("upvotes",treatment)}>Upvote!</button>
      <p>Upvotes: {treatment.upvotes} </p>
      <button name="downvotes" className="btn btn-primary" onClick={() => voteMethod("downvotes",treatment)}>Downvote!</button>
      <p>Downvotes: {treatment.downvotes}</p>
      <button className="btn btn-primary" onClick={(event) => window.location = `${treatment.id}/edit`}>Edit</button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => deleteTreatment(treatment.id) }>Delete This Treatment</button>

    </div>
  )
}
