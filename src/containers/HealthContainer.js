import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bodyparts from '../components/Bodyparts'
import SymptomsList from '../components/SymptomsList'
import TreatmentsList from '../components/TreatmentsList'
import TreatmentDetail from '../components/TreatmentDetail'
import TreatmentForm from '../components/TreatmentForm'
import TreatmentsAdapter from '../adapters'

class HealthContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      allTreatments: [],
      //list
      symptoms: [],
      treatments: [],
      //current
      bodypart: "",
      currentTreatment: {}
    }
    this.setBodyPart = this.setBodyPart.bind(this)
    this.showTreatments = this.showTreatments.bind(this)
    this.voteMethod = this.voteMethod.bind(this)

    this.createTreatment = this.createTreatment.bind(this)
    this.deleteTreatment = this.deleteTreatment.bind(this)
    this.updateTreatment = this.updateTreatment.bind(this)
  }

  componentDidMount() {
    TreatmentsAdapter.all().then(data => this.setState({ allTreatments: data}) )
  }
  // state management functions
  setBodyPart(event){
    let filteredList = this.state.allTreatments.filter( t => {
      return t.bodypart === event.target.value
    })
    let symptomNamesOnly = filteredList.map( function(s){ return s.symptom })
    this.setState({
      symptoms: [...new Set(symptomNamesOnly)],
      bodypart: event.target.value
    })
    //console.log(symptomNamesOnly)
  }
  showTreatments(event){
    let symptom = event.target.innerText
    let filteredTreatments = this.state.allTreatments.filter( t => {
      return t.symptom === symptom
    })
    this.setState({ treatments: filteredTreatments })
  }
  // selectedTreatment(treatment){
  //   this.setState({
  //     bodypart: treatment.bodypart,
  //
  //   })
  // }
  voteMethod(type,treatment){
    console.log(treatment)
    treatment[type] += 1
    this.updateTreatment(treatment.id, treatment)
  }

  // CRUD methods using adapter
  createTreatment(formObj){
    TreatmentsAdapter.create(formObj)
      .then(treatment => this.setState((previousState) => {
        return {
          allTreatments: [...previousState.allTreatments, treatment]
        }
      })
    )}
  deleteTreatment(id){
    TreatmentsAdapter.destroy(id)
      .then( () => {
        this.setState( previousState => {
          return {
            students: previousState.allTreatments.filter( treatment => treatment.id !== id )
          }
        })
      })
  }
  updateTreatment(id, formObj){
    TreatmentsAdapter.update(id, formObj)
      .then(this.setState(function(previousState){
        return {
          allTreatments: previousState.allTreatments.map(function(treatment){
            if (treatment.id == id){
              return formObj
            }
            return treatment
          })
        }
      }))
  }


  render() {
  //  console.log(this.state.allTreatments.length)
    return (
      <div className="main">
        <div className="row">
          <div className="col-sm-5">
            <Switch>
              <Route exact path='/new' render={() => <TreatmentForm createTreatment={this.createTreatment}/>} />

              <Route exact path='/:id' render={(routerProps) => {
                 const id = routerProps.match.params.id
                 const treatment = this.state.allTreatments.find( treatment =>  treatment.id === parseInt(id) )
                 return <TreatmentDetail treatment={treatment} voting={this.votingMethod} deleteTreatment={this.deleteTreatment} voteMethod={this.voteMethod}/>
              }} />
              
              <Route exact path='/:id/edit' render={(routerProps) => {
                const id = routerProps.match.params.id
                const treatment = this.state.allTreatments.find( s =>  s.id === parseInt(id) )
                if (!treatment) {
                  return null
                }
                return <TreatmentForm treatment={treatment} updateTreatment={this.updateTreatment} />
              }} />
            </Switch>
          </div>
        </div>

        <div className="row">
          <div id="bodyparts" className="col-sm-2">
            <h4>Body Parts</h4>
            <Bodyparts setBodyPart={this.setBodyPart} />
          </div>

          <div id="symptoms" className="col-sm-3">
            <SymptomsList showTreatments={this.showTreatments} symptoms={this.state.symptoms} />
          </div>

          <div id="treatments" className="col-sm-7">
            <TreatmentsList treatments={this.state.treatments} />
          </div>
        </div>
      </div>

    )
  }
}

export default HealthContainer
