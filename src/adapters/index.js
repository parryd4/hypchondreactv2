const URL = 'http://localhost:3000/api/v1/treatments'

export default class TreatmentsAdapter {

  static all() {
    return fetch(URL)
      .then( res => res.json() )
  }

  static create(formObj) {
    return fetch(URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          treatment: formObj
        })
      })
      .then(response => response.json() )
  }

  static update(id, formObj){
    /*
        params.require(:treatment).permit(:symptom,:treatment_name,:treatment_description,:bodypart,:upvotes,:downvotes)
    */
    return fetch(`${URL}/${id}`, {
       method: 'PATCH',
       headers: {
         'content-type': 'application/json',
         'accept': 'application/json'
       },
       body: JSON.stringify({
         treatment: formObj
       })
     })
  }

  static destroy(id){
    return fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })
  }
}
