function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      renderBios(data);
    })
}

//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {

  return (
    <div className = "astronaut">
      <div className = "bio"> 
      <div>
      <h3>{astronaut.firstName} {astronaut.lastName}</h3>
      </div>
      <div>
        <ul>
            <li>{astronaut.hoursInSpace}</li>
         <li>{astronaut.active}</li>
       <li>{astronaut.skills.join()}</li>
     </ul>
     </div>
     </div>
     <img className = "avatar" src = {astronaut.picture}></img>
    </div>
  );
}

// Function should render all astronaut bios
function renderBios(data) {
  const root = document.getElementById('root');
const container = <div className='container'>

  {AstronautBios(data[0])}

</div>

ReactDOM.render( container, root );


  //The AstronautBios component should be repeated to display bios for all 
  //astronaunts in the returned data object.
  
  //Then attach to the 'root' div!
}



getData();


