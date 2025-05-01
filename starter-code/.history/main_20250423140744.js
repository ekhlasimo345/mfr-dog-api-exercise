// do not delete anything from this code, just add stuff!
// this is the skeleton for the fetch function, the code for the card has already been written for you
// create a variable called breedNames and store in it the response of fetching all the names of breeds from the api
// you will have to transform that response (an object) into an array (use Object.keys() method... if you don't know it look for it on MDN :P)
// iterate over breedNames using forEach and this way generating a card for each breedName
// each breedName should then be the card-title of the card and the alt of the image (you will get the images in part 2 of the exercise)
// image src should be empty for now

async function getDogs() {


//const image= await fetch ("https://dog.ceo/api/breeds/image/random")
//const img = await image.json();

  const response = await fetch("https://dog.ceo/api/breeds/list/all")

  const data = await response.json()
  console.log(data);
  const objects= Object.keys(data.message);
  
  objects.forEach((breedNames)=> console.log(breedNames));
  
  const breedNames = [];


  const container = document.querySelector('.container-grid');

  container.innerHTML += `
    <div class="card" style="max-width: 300px">
        <img class="card-img-top" src="" alt="" hight="300" style="object-fit: cover; object-position: center;">
        <div class="card-body">
         <h5 class="card-title">${objects.breedNames}</h5>
        </div>
    </div>`

    //fetch({
    //  "message": "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg",
    //  "status": "success"
    //});
}
getDogs();
