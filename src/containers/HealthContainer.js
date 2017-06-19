import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bodyparts from '../components/Bodyparts'
import SymptomsList from '../components/SymptomsList'
import SearchBar from '../components/SearchBar'
import TreatmentsList from '../components/TreatmentsList'
import TreatmentDetail from '../components/TreatmentDetail'
import TreatmentForm from '../components/TreatmentForm'
import TreatmentsAdapter from '../adapters'

class HealthContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      filterTerm: '',
      allTreatments: [],
      //list
      symptoms: [],
      treatments: [],
      //current
      bodypart: "",
      currentTreatment: {}
    }
    // this.setBodyPart = this.setBodyPart.bind(this)
    this.filterBodyPart = this.filterBodyPart.bind(this)
    this.searchSymptom = this.searchSymptom.bind(this)
    this.showTreatments = this.showTreatments.bind(this)
    this.voteMethod = this.voteMethod.bind(this)

    this.createTreatment = this.createTreatment.bind(this)
    this.deleteTreatment = this.deleteTreatment.bind(this)
    this.updateTreatment = this.updateTreatment.bind(this)
  }

  componentDidMount() {
    TreatmentsAdapter.all().then(data => {
      var array = []
      var repeated = false

      // only list unique symptoms
      data.forEach(d => {
          repeated = false
          for (let a in array )
            { array[a].symptom === d.symptom ? repeated = true : null }
          repeated === false ? array.push(d) : null
        })

      this.setState({ allTreatments: data, symptoms: array})
    } )


  }
  // state management functions
  // setBodyPart(event){
  //   let filteredList = this.state.allTreatments.filter( t => {
  //     return t.bodypart === event.target.value
  //   })
  //   let symptomNamesOnly = filteredList.map( function(s){ return s.symptom })
  //   this.setState({
  //     // symptoms: [...new Set(symptomNamesOnly)],
  //     symptoms: [...new Set(filteredList)],
  //     bodypart: event.target.value
  //   })
  //   //console.log(symptomNamesOnly)
  // }

  filterBodyPart(event) {
    this.setState({ filterTerm: event.target.value })
  }

  searchSymptom(event) {
    this.setState({ searchTerm: event.target.value })
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
    )

  }
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
      <div className="col-md-12 flow">
        <div className="row main" id="top_half">
            <div className="col-md-5 col-md-offset-3 text-center">
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

              <Route exact path='/' render={()=> <div style={{margin: "150px"}}><strong>Welcome to HypochondReact. Please select treatment below!</strong></div>} />
            </Switch>
          </div>
        </div>

        <div className="row"><div className="col-md-12 border"><p></p></div></div>
        <br />
        <div className="row list">
        <div id="symptoms" className="col-md-6 list" style={{float:'center'}}>
            <div className="row">
              <div className="col-md-3">
                <Bodyparts filterBodyPart={this.filterBodyPart} />
              </div>
              <div className="col-md-3">
                <SearchBar searchTerm={this.state.searchTerm} searchSymptom={this.searchSymptom} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <SymptomsList showTreatments={this.showTreatments}
                              allTreatments={this.state.allTreatments}
                              symptoms={this.state.symptoms}
                              filterTerm={this.state.filterTerm}
                              searchTerm={this.state.searchTerm} />
              </div>
            </div>
          </div>
          <div id="treatments" className="col-md-6">
            <TreatmentsList treatments={this.state.treatments} />
          </div>
        </div>
      </div>

    )
  }
}

export default HealthContainer
