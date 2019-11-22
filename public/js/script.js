function packUpForm(){
    // Select the 4 sections of the form's value
    const name = document.querySelector('.poke-name-input').value,
          description = document.querySelector('.poke-description-input').value,
          image = document.querySelector('.poke-image-input').value,
          type = document.querySelector('.poke-type-input').value;
    // turn it into an object
    const pokeData = {name: name, description: description, image: image, type: type};
    return pokeData
  }


  window.onload = function() {
    document.getElementById("new-pokemon-form").addEventListener("submit", function(e){
      e.preventDefault();
      // call the backend URL that we set up, AND call it response so we can do something with it
      fetch('/api/pokemon', {
              method: 'post',
              body:    JSON.stringify(packUpForm()),
              headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
          // resolve the promise
          return response.json();
      })
      .then(data =>{
        console.log("data: ", data);
        window.location.replace('/pokemon/' + data.id);
      })
      .catch(err => console.error("fetch error: ", err)); // end of functional instructions
    }); // end of event listener
  }; // end of window.onload


  window.onload = function() {
    document.getElementById("update-pokemon-form").addEventListener("submit", function(e){
      let id = document.getElementById("poke-id-input").value;
      let dataPackage = packUpForm();
      dataPackage.id = id;
      e.preventDefault();
      // call the backend URL that we set up, AND call it response so we can do something with it
      fetch('/api/pokemon/' + id, {
              method: 'put',
              body:    JSON.stringify(dataPackage),
              headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
          // resolve the promise
          return response.json();
      })
      .then(data =>{
        console.log("data: ", data);
        window.location.replace('/pokemon/' + data.id);
      })
      .catch(err => console.error("fetch error: ", err)); // end of functional instructions
    }); // end of event listener
  }; // end of window.onload

  window.onload = function() {
    document.getElementById("delete-pokemon").addEventListener("click", function(e){
      const id = document.getElementById("delete-pokemon").value;
      console.log(id);
      
      fetch('/api/pokemon/' + id, {
        method: 'delete',
        body:    JSON.stringify({id: id}),
        headers: { 'Content-Type': 'application/json' }
})
.then(response => {
    // resolve the promise
    return response.json();
    window.location.replace('/pokemon/');
})
.catch(err => console.error("fetch error: ", err));
    }); // end of event listener
  };