import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class TreatmentForm extends Component {

  constructor(props){
    super(props)
    this.state = props.treatment ? {symptom: props.treatment.symptom, treatment_name: props.treatment.treatment_name, treatment_description: props.treatment.treatment_description, bodypart: props.treatment.bodypart } : { symptom:  '', treatment_name: '', treatment_description: '', bodypart: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const entry = {
      symptom: this.state.symptom,
      treatment_name: this.state.treatment_name,
      treatment_description: this.state.treatment_description,
      bodypart: this.state.bodypart
    }

    if (this.props.updateTreatment){
      this.props.updateTreatment(this.props.treatment.id, entry)
    } else {
      this.props.createTreatment(entry)
    }
    this.setState({

    })

  }

  render(){
    console.log(this.props)
    return(
      <div>
        <form>
        <div className="form-group">
          <label for="symptom">Symptom</label>
          <input type='text' className="form-control" placeholder="symptom" name="symptom" value={this.state.symptom} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="treatment">Treatment</label>
          <input type='text' className="form-control" placeholder="treatment_name" name="treatment_name" value={this.state.treatment_name} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea className="form-control" placeholder="treatment_description" name="treatment_description" value={this.state.treatment_description} onChange={this.handleChange}></textarea>
        </div>
        <div className="form-group">
          <label for="bodypart">Bodypart</label>
          <select name="bodypart" className="form-control" value={this.state.bodypart} selected={this.state.bodypart} onChange={this.handleChange}>
            <option value="">All Body Parts</option>
            <option value="Chest">Chest</option>
            <option value="Head">Head</option>
            <option value="Legs">Legs</option>
            <option value="Upper limbs">Upper Limbs</option>
            <option value="Stomach/Pelvis">Stomach / Pelvis</option>
          </select>
        </div>
        <div className="form-group">
          <Link to='/'><button type='submit' className="btn btn-primary" onClick={this.handleSubmit} >Submit a Treatment</button></Link>
        </div>
        </form>
      </div>
    )
  }
}
