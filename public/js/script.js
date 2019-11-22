function packUpForm(){
  // Select the 4 sections of the form's value
  const name = document.querySelector('.poke-name-input').value,
        description = document.querySelector('.poke-description-input').value,
        image = document.querySelector('.poke-image-input').value,
        type = document.querySelector('.poke-type-input').value;

  // turn it into an object
  const pokeData = {name: name, description: description, image: image, type: type};

  return pokeData;
}

// event listener is done onload, so that the element is rendered BEFORE we try to add functionality to the form
window.onload = function() {

  /////////////// START CREATE POKEMON BLOCK ////////////////
  /////////////// START CREATE POKEMON BLOCK ////////////////
  /////////////// START CREATE POKEMON BLOCK ////////////////
  if(document.getElementById("new-pokemon-form")){
    document.getElementById("new-pokemon-form").addEventListener("submit", function(e){
    // this prevents the form from auto-refreshing the page
    e.preventDefault();
    // call the backend URL that we set up, AND call it response so we can do something with it
    // fetch(URL, headers).then(res).then(data).catch(error)
    fetch('/api/pokemon', {
            method: 'post',
            body:    JSON.stringify(packUpForm()),
            headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        // resolve the promise
        return response.json();
    })
    .then(data =>{
      console.log("data: ", data);
      // redirect user to see the pokemon they JUST created
      window.location.replace('/pokemon/' + data.id);
      // go to localhost:8000/pokemon/:id
    })
    .catch(err => console.error("fetch error: ", err)); // end of functional instructions

    // Think of the database as a Bank, the information that the user fills out is a check, and you want to deposit the check and get cash before you leave the bank.
    // You take the check in packUpForm() and you deposit it with fetch(). The bank gives you back a receipt AKA the promise object AKA the response, which you can use to collect cash from the ATM.
    // .then() is used to hand in the receipt, the return statement is how that's done.
    // the NEXT .then() is where you collect your "cash", and take it anywhere. In this case, you're getting back the id from the database, and using that to redirect the user


  }); // end of event listener
  } // end of if statement
    /////////////// END CREATE POKEMON BLOCK ////////////////
    /////////////// END CREATE POKEMON BLOCK ////////////////
    /////////////// END CREATE POKEMON BLOCK ////////////////




  /////////////// START UPDATE POKEMON BLOCK ////////////////
  /////////////// START UPDATE POKEMON BLOCK ////////////////
  /////////////// START UPDATE POKEMON BLOCK ////////////////
  if(document.getElementById("update-pokemon-form")){
    document.getElementById("update-pokemon-form").addEventListener("submit", function(e){
    let id = document.getElementById("poke-id-input").value;
    let dataPackage = packUpForm();
    dataPackage.id = id;
    e.preventDefault();
    // call the backend URL that we set up, AND call it response so we can do something with it
    fetch('/api/pokemon/' + id, {
            method: 'put',
            body:    JSON.stringify(dataPackage),
            headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        // resolve the promise
        return response.json();
    })
    .then(data =>{
      console.log("data: ", data);
      window.location.replace('/pokemon/' + data.id);
    })
    .catch(err => console.error("fetch error: ", err)); // end of functional instructions

  }); // end of event listener
  } // end of if statement
    /////////////// END UPDATE POKEMON BLOCK ////////////////
    /////////////// END UPDATE POKEMON BLOCK ////////////////
    /////////////// END UPDATE POKEMON BLOCK ////////////////


  /////////////// START DELETE POKEMON BLOCK ////////////////
  /////////////// START DELETE POKEMON BLOCK ////////////////
  /////////////// START DELETE POKEMON BLOCK ////////////////
  if(document.getElementById("delete-pokemon")){
    document.getElementById("delete-pokemon").addEventListener("click", function(e){
    const id = document.getElementById("delete-pokemon").value;

    // console.log(id);
    fetch('/api/pokemon/' + id, {
            method: 'delete',
            body:    JSON.stringify({id: id}),
            headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
    // After the database confirms that something was deleted, we're sending the user back to the list of all pokemon
        window.location.replace('/pokemon/');
    })
    .catch(err => console.error("fetch error: ", err)); // end of functional instructions
  });//end of event listener
  } // end of if statement
  /////////////// END DELETE POKEMON BLOCK ////////////////
  /////////////// END DELETE POKEMON BLOCK ////////////////
  /////////////// END DELETE POKEMON BLOCK ////////////////



}; // end of window.onload
