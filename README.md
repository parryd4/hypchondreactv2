## 0 - public/index.html
  Bootstrap only! removed css module from code challenge. Styling still needs to be done for our app.
## 1 - src/index.js  
  not much to say or add
## 2 - components/App.js
  The H2 could be replaced by a NavBar, and / or a search bar. It could also add to the path. Right now our Routes are '/' , '/new' , ':id' and ':id/edit'
## 3 - cont/HealthContainer.js
Right now it is the Controller AND the Layout.
### State
+ searchTerm has not been worked in. We did have it working client-side briefly in the afternoon, but noticed that it was attached to different components. Filtering allTreatments with a search bar and/or the list-click-filter system would require additional complexity in our logic
+ allTreatments is all of our front-end data
+ symptoms[] and treatments[] will dynamically populate the SymptomsList and TreatmentsList Components. They, along with bodypart are pieces of the filtering system.
+ currentTreatment has the intention of being a place holder for the previously viewed single component. If we want to keep our filter settings of a body part / symptom, but we leave our lists and check out a new form/search, we can hold on to that info in state. It also had potential to help fill out forms automatically.
### Methods
setBodyPart and showTreatments are two filtering methods which each display the next list in the progression: Bodypart > Symptom > Treatment
#### CRUD
Methods are in place and use adapters/index.js for fetching. I had them all working this afternoon using a different front-end to call our api. When I added the forms the fetch requests behaved differently here. It may be because of how I tried to get both Update and Create to share a form.
Specifically:
updateTreatment's params: {"treatment"=>{"formObj"=>{"symptom"=>"nosefingers", "treatment_name"=>"hal", "treatment_description"=>"ok", "bodypart"=>"Chest"}}, "id"=>"54"} have an extra level, formObj, which I wanted to use to bundle all the inputs of the form.
Create and Delete are both working.

## Remaining Features and Functionality
Upvote/Downvote manipulation: it requires grabbing a Treatment's Upvote/Downvote count in state, incrementing it in state, and making calling updateTreatment. The call can be made from a button onClick, and the button's name can programmatically determine which count is incremented.

Styling

Additional Data: if we want larger sample size, or if we want different feature requiring new data: suggest random illness that has symptom--to make it fun.  


# HypochondReact

### Please note that this is not a real health site. If you have any health problems please visit a doctor.
