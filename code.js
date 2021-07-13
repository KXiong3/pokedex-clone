// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
function toggleShake(element) {
  // Animations only occur when a new class is added to the element.
  // Since we want this to happen every time, we can switch between two different animations
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2")
  } else {
    element.classList.remove("shake2");
    element.classList.add("shake1")
  }
}

const main = document.querySelector("main");

// Your Code Here

class Flower {
  constructor() {
    this.imageArray = ["./images/flower/flower0.png", "./images/flower/flower1.png", "./images/flower/flower2.png"];
    this.index = 0;
    this.imageElement = document.createElement("img");
    this.imageElement.src = this.imageArray[this.index];
    this.imageElement.addEventListener("click", this.clickOnImage);
  }

  clickOnImage = () =>  {
    if (this.index < this.imageArray.length - 1) {
      this.index++;
      this.imageElement.src = this.imageArray[this.index];
    }
  };

}

class Charmander {
  constructor () {
    this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png","./images/charmander/charmander1.png","./images/charmander/charmander2.png"];
    this.index = 0;
    this.imageElement = document.createElement("img");
    this.imageElement.src = this.imageArray[this.index];
    this.imageElement.addEventListener("click", this.clickOnImage);
  }

  clickOnImage = () =>  {
    let chanceToEvolve = Math.random();
    if (chanceToEvolve < .25) {
      if (this.index < this.imageArray.length - 1) {
        this.index++;
        this.imageElement.src = this.imageArray[this.index];
      }
    } else {
      toggleShake(this.imageElement);
    }
  };

}


class Eevee {
  constructor () {
    this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png",];
    this.finalForm = ["./images/eevee/eevee1.png","./images/eevee/eevee2.png","./images/eevee/eevee3.png","./images/eevee/eevee4.png","./images/eevee/eevee5.png","./images/eevee/eevee6.png","./images/eevee/eevee7.png","./images/eevee/eevee8.png"]
    this.index = 0;
    this.isFullyEvolved = false;
    this.imageElement = document.createElement("img");
    this.imageElement.src = this.imageArray[this.index];
    this.imageElement.addEventListener("click", this.clickOnImage);
  }

  clickOnImage = () =>  {
    let chanceToEvolve = Math.random();
    if (this.isFullyEvolved) {
      toggleShake(this.imageElement);
    } else if (chanceToEvolve < .25) {
      if (this.index < this.imageArray.length - 1) {
        this.index++;
        this.imageElement.src = this.imageArray[this.index];
      } else {
        let randomFinalForm = Math.floor(Math.random() * 9)
        this.imageElement.src = this.finalForm[randomFinalForm];
        this.isFullyEvolved = true;
      }
    } else {
      toggleShake(this.imageElement);
    }
  };

}

let flower1 = new Flower;
let flower2 = new Flower;
let flower3 = new Flower;
let flower4 = new Flower;
let flower5 = new Flower;

main.append(flower1.imageElement);
main.append(flower2.imageElement);
main.append(flower3.imageElement);
main.append(flower4.imageElement);
main.append(flower5.imageElement);


let charmander1 = new Charmander;
let charmander2 = new Charmander;


main.append(charmander1.imageElement);
main.append(charmander2.imageElement);

let eevee1 = new Eevee;
let eevee2 = new Eevee;

main.append(eevee1.imageElement);
main.append(eevee2.imageElement);