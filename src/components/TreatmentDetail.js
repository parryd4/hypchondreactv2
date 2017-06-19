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
      <div className="row">
        <div className="col-md-4 col-md-offset-2">
          <p>Upvotes: {treatment.upvotes} </p>
        <p className="btn btn-primary" onClick={() => voteMethod("upvotes",treatment)}>Upvote!</p>
        </div>
        <div className="col-sm-4">
          <p>Downvotes: {treatment.downvotes}</p>
        <button name="downvotes" className="btn btn-primary" onClick={(e) => voteMethod("downvotes",treatment,e)}>Downvote!</button>
        </div>
      </div>
      <br />
      <div className="row">
      <div className="col-sm-4 col-md-offset-2">
        <Link to={`${treatment.id}/edit`}  className="btn btn-primary">Edit</Link>
        </div>
        <div className="col-sm-4">
      <button className="btn btn-primary" onClick={() => deleteTreatment(treatment.id) }>Delete</button>
      </div>
      </div>

    </div>
  )
}
