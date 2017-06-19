import React, { Component } from 'react'

export default class TreatmentForm extends Component {

  constructor(props){
    super(props)
    this.state = props.treatment ? {symptom: props.treatment.symptom, treatment_name: props.treatment.treatment_name, treatment_description: props.treatment.treatment_description, bodypart: props.treatment.bodypart } : { symptom:  '', treatment_name: '', treatment_description: '', bodypart: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
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
        <form onSubmit={this.handleSubmit} >
          <br /><input type='text' placeholder="symptom" name="symptom" value={this.state.symptom} onChange={this.handleChange}/>
        <br />  <input type='text' placeholder="treatment_name" name="treatment_name" value={this.state.treatment_name} onChange={this.handleChange}/>
          <br /><input type='text' placeholder="treatment_description" name="treatment_description" value={this.state.treatment_description} onChange={this.handleChange}/>
          <br /><input type='text' placeholder="bodypart" name="bodypart" value={this.state.bodypart} onChange={this.handleChange}/>
          <br /><input type='submit' value="Submit a Treatment" />
        </form>
      </div>
    )
  }
}
