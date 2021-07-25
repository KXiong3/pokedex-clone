// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
function toggleShake(element) {
  // Animations only occur when a new class is added to the element.
  // Since we want this to happen every time, we can switch between two different animations
  // console.log(element);
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2")
  } else  {
    element.classList.remove("shake2");
    element.classList.add("shake1")
  }

}

const main = document.querySelector("main");

// Your Code Here

let leftDiv = document.getElementById("left");
let content = document.getElementById("content");
let rightDiv = document.getElementById("right");

let flower1 = new Flower;
let flower2 = new Flower;
leftDiv.append(flower1.imageElement);
rightDiv.append(flower2.imageElement);


let pokedex = new Pokedex;
content.append(pokedex.renderToHTML());


// let charmander = new Charmander;
// middleDiv.append(charmander.imageElement);

// let eevee = new Eevee;
// middleDiv.append(eevee.imageElement);

// let abra = new Abra;
// middleDiv.append(abra.imageElement);

// let seviper = new Seviper;
// middleDiv.append(seviper.imageElement);

// let munchlax = new Munchlax;
// middleDiv.append(munchlax.imageElement)

// let blacephalon = new Blacephalon;
// middleDiv.append(blacephalon.imageElement);

// let blipbug = new Blipbug;
// middleDiv.append(blipbug.imageElement);

// let audino = new Audino;
// middleDiv.append(audino.imageElement);

// let blitzle = new Blitzle
// middleDiv.append(blitzle.imageElement);

