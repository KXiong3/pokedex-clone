class ClickableImage {
    constructor() {
        this.imageArray = [];
        this.index = 0;
        this.imageElement = document.createElement("img");
    }

}

class Flower extends ClickableImage {
    constructor() {
        super();
        this.imageArray = ["./images/flower/flower0.png", "./images/flower/flower1.png", "./images/flower/flower2.png"];
        this.imageElement.src = this.imageArray[this.index];
        this.imageElement.addEventListener("click", this.clickOnImage);

    }

    clickOnImage = () => {
        if (this.index < this.imageArray.length - 1) {
            this.index++;
            this.imageElement.src = this.imageArray[this.index];
        }
    }

}

class Pokemon extends ClickableImage {
    constructor(pokemonObject) {
        super();
        this.imageArray = [...pokemonObject.imagesOfPokemons];
        this.names = [...pokemonObject.nameOfPokemonAndItsEvolvedForms];
        this.nationalNumbers = [...pokemonObject.nationalNumbers];
        this.types = [...pokemonObject.pokemonTypes];
        this.species = [...pokemonObject.typeOfSpecies];
        this.info = [...pokemonObject.pokedexEntries];
        this.imageElement.src = this.imageArray[this.index];
    }

}

class LinearEvolutionPokemon extends Pokemon {

    makeEvolve = () => {
        let currentPokemonName = this.imageElement.dataset.name;
        let currenPokemonIndex = this.names.indexOf(currentPokemonName);
        let isFinalForm = currenPokemonIndex === this.imageArray.length - 1;
        let chanceToEvolve = Math.random();

        if (isFinalForm) {
            toggleShake(this.imageElement);
        } else {
            if (chanceToEvolve < .25) {
                currenPokemonIndex += 1;

                // image
                this.imageElement.src = this.imageArray[currenPokemonIndex];
                this.imageElement.alt = `image of ${this.names[currenPokemonIndex]}`;
                this.imageElement.dataset.name = `${this.names[currenPokemonIndex]}`;
                this.imageElement.classList.add("image");

                let imageContainer = document.querySelector(".image-container");
                imageContainer.innerHTML = "";
                imageContainer.append(this.imageElement);

                // species
                let speciesContainer = document.querySelector(".species-display");
                speciesContainer.innerText = this.species[currenPokemonIndex].toUpperCase();

                // info
                let infoContainer = document.querySelector(".info-text-area");
                infoContainer.innerText = this.info[currenPokemonIndex][0]
                let nameContainer = document.querySelector(".name-area");
                nameContainer.innerText = this.names[currenPokemonIndex].toUpperCase();

                // types
                let type1 = null;
                let type2 = null;
                let display1 = document.querySelector(".type1");
                let display2 = document.querySelector(".type2");
                if (this.types[currenPokemonIndex].length > 1) {
                    type1 = this.types[currenPokemonIndex][0];
                    display1.innerText = type1.toUpperCase();

                    if (display1.classList.contains("dark")) {
                        display1.className = "dark";
                    } else if (display1.classList.contains("light")) {
                        display1.className = "light";
                    }
                    display1.classList.add("type1");
                    display1.classList.add(type1);

                    type2 = this.types[currenPokemonIndex][1];
                    display2.innerText = type2.toUpperCase();

                    if (display2.classList.contains("dark")) {
                        display2.className = "dark";
                    } else if (display2.classList.contains("light")) {
                        display2.className = "light";
                    }
                    display2.classList.add("type2");
                    display2.classList.add(type2);


                } else {
                    type1 = this.types[currenPokemonIndex][0];
                    display1.innerText = type1.toUpperCase();

                    if (display1.classList.contains("dark")) {
                        display1.className = "dark";
                    } else if (display1.classList.contains("light")) {
                        display1.className = "light";
                    }
                    display1.classList.add("type1");
                    display1.classList.add(type1);

                    display2.innerText = "";
                    if (display2.classList.contains("dark")) {
                        display2.className = "dark";
                    } else if (display2.classList.contains("light")) {
                        display2.className = "light";
                    }
                    display2.classList.add("type2");
                }

            } else {
                toggleShake(this.imageElement);
            }
        }
    }

}

class NonLinearEvolutionPokemon extends Pokemon {
    constructor(pokemonObject) {
        super(pokemonObject);
        this.indexOfBranchingEvolution = pokemonObject.indexOfBranchingEvolution;
    }
    makeEvolve = () => {
        let currentPokemonName = this.imageElement.dataset.name;
        let currenPokemonIndex = this.names.indexOf(currentPokemonName);
        let isFinalForm = currenPokemonIndex > this.indexOfBranchingEvolution;
        let chanceToEvolve = Math.random();

        if (isFinalForm) {
            toggleShake(this.imageElement);
        } else {
            let randomFinalForm = Math.floor(Math.random() * (this.imageArray.length - Math.abs(currenPokemonIndex - 1)) + Math.abs(currenPokemonIndex - 1))
            if (chanceToEvolve < .25) {
                this.imageElement.src = this.imageArray[randomFinalForm];
                this.imageElement.alt = `image of ${this.names[randomFinalForm]}`;
                this.imageElement.dataset.name = `${this.names[randomFinalForm]}`;
                this.imageElement.classList.add("image")

                let imageContainer = document.querySelector(".image-container");
                imageContainer.innerHTML = "";
                imageContainer.append(this.imageElement);

                // species
                let speciesContainer = document.querySelector(".species-display");
                speciesContainer.innerText = this.species[randomFinalForm].toUpperCase();

                // info
                let infoContainer = document.querySelector(".info-text-area");
                infoContainer.innerText = this.info[randomFinalForm][0]
                let nameContainer = document.querySelector(".name-area");
                nameContainer.innerText = this.names[randomFinalForm].toUpperCase();


                // types
                let type1 = null;
                let type2 = null;
                let display1 = document.querySelector(".type1");
                let display2 = document.querySelector(".type2");
                if (this.types[randomFinalForm].length > 1) {
                    type1 = this.types[randomFinalForm][0];
                    display1.innerText = type1.toUpperCase();

                    if (display1.classList.contains("dark")) {
                        display1.className = "dark";
                    } else if (display1.classList.contains("light")) {
                        display1.className = "light";
                    }
                    display1.classList.add("type1");
                    display1.classList.add(type1);

                    type2 = this.types[randomFinalForm][1];
                    display2.innerText = type2.toUpperCase();

                    if (display2.classList.contains("dark")) {
                        display2.className = "dark";
                    } else if (display2.classList.contains("light")) {
                        display2.className = "light";
                    }
                    display2.classList.add("type2");
                    display2.classList.add(type2);


                } else {
                    type1 = this.types[randomFinalForm][0];
                    display1.innerText = type1.toUpperCase();

                    if (display1.classList.contains("dark")) {
                        display1.className = "dark";
                    } else if (display1.classList.contains("light")) {
                        display1.className = "light";
                    }
                    display1.classList.add("type1");
                    display1.classList.add(type1);

                    display2.innerText = "";
                    if (display2.classList.contains("dark")) {
                        display2.className = "dark";
                    } else if (display2.classList.contains("light")) {
                        display2.className = "light";
                    }
                    display2.classList.add("type2");
                }


            } else {
                toggleShake(this.imageElement);
            }
        }
    }

    // clickOnImage = () => {
    //     let chanceToEvolve = Math.random();
    //     if (this.isFullyEvolved) {
    //         toggleShake(this.imageElement);
    //     } else {
    //         if (chanceToEvolve < .25) {
    //             if (this.index < this.imageArray.length - 1) {
    //                 this.index++;
    //                 this.imageElement.src = this.imageArray[this.index];
    //             } else {
    //                 let randomFinalForm = Math.floor(Math.random() * this.finalForm.length);
    //                 this.imageElement.src = this.finalForm[randomFinalForm];
    //                 this.isFullyEvolved = true;
    //                 console.log(randomFinalForm);
    //             }
    //         } else {
    //             toggleShake(this.imageElement);
    //         }
    //     }
    // }
}

// // need to work on this
// class NoEvolution extends Pokemon {
//     constructor () {
//         super ();
//         this.imageElement.addEventListener("click", this.clickOnImage);
//     }
//     clickOnImage = () => {
//         let chanceToEvolve = Math.random();
//         if (chanceToEvolve < .25) {
//             if (this.index < this.imageArray.length - 1) {
//                 this.index++;
//                 this.imageElement.src = this.imageArray[this.index];
//             }
//         } else {
//             toggleShake(this.imageElement);
//         }
//     }
// }

// class Eevee extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/eevee/eevee0.png", ];
//         this.finalForm = ["./images/pokemon-2/eevee/eevee1.png", "./images/pokemon-2/eevee/eevee2.png", "./images/pokemon-2/eevee/eevee3.png", "./images/pokemon-2/eevee/eevee4.png", "./images/pokemon-2/eevee/eevee5.png", "./images/pokemon-2/eevee/eevee6.png", "./images/pokemon-2/eevee/eevee7.png", "./images/pokemon-2/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }

// }

// class Bulbasaur extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Charmander extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/charmander/charmander0.png", "./images/pokemon-2/charmander/charmander1.png", "./images/pokemon-2/charmander/charmander2.png", "./images/pokemon-2/charmander/charmander-mega-x.png", "./images/pokemon-2/charmander/charmander-mega-y.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// //------------------------------------ need to work on everything below
// class Squirtle extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }

// }

// class Caterpie extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }

// }

// class Weedle extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }

// }

// class Pidgey extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }

// }

// class Rattata extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }

// }

// class Spearow extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Ekans extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pichu extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sandshrew extends LinearEvolution{
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class NidoranMale extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class NidoranFemale extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cleffa extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Vulpix extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Igglybuff extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Zubat extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Oddish extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Paras extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Diglett extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Meowth extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Psyduck extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Mankey extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Growlithe extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Poliwag extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Abra extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/abra0.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Machop extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bellsprout extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tentacool extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Geodude extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Ponyta extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Slowpoke extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Magnemite extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Farfetchd extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Doduo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Seel extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Grimer extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Shellder extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Gastly extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Onix extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Drowzee extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Krabby extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Voltorb extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Exeggcute extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cubone extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tyrogue extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Lickitung extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Koffing extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Rhyhorn extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Happiny extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tangela extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Horsea extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Goldeen extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Staryu extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class MimeJr extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Scyther extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Smoochum extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Elekid extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Magby extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pinsir extends NoEvolution {}

// class Tauros extends NoEvolution {}

// class Magikarp extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Lapras extends NoEvolution {}

// class Ditto extends NoEvolution {}

// class Porygon extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Omanyte extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Kabuto extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Aerodactyle extends NoEvolution {}

// class Munchlax extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/munchlax/munchlax0-removebg-preview.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Articuno extends NoEvolution {}

// class Zapdos extends NoEvolution {}

// class Moltres extends NoEvolution {}

// class Dratini extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Mewtwo extends NoEvolution {}

// class Mew extends NoEvolution {}

// class Chikorita extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cyndaquil extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Totodile extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sentret extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Hoothoot extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Ledyba extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// } 

// class Spinarak extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Chinchou extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Togepi extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Natu extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Mareep extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Azurill extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bonsly extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Hoppip extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Aipom extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sunkern extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Yanma extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Wooper extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Murkrow extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Unown extends NoEvolution {}

// class Misdreavus extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Wynaut extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Girafarig extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pineco extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Dunsparce extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Gligar extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Snubbull extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Qwilfish extends NoEvolution {}

// class Shuckle extends NoEvolution {}

// class Heracross extends NoEvolution {}

// class Sneasel extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Teddiursa extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Slugma extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Swinub extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Corsola extends NoEvolution {

// }

// class Remoraid extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Delibird extends NoEvolution {}

// class Mantyke extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Skarmory extends NoEvolution {}

// class Houndour extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Phanpy extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Stantler extends NoEvolution {}

// class Smeargle extends NoEvolution {}

// class Miltank extends NoEvolution {}

// class Raikou extends NoEvolution {}

// class Entei extends NoEvolution {}

// class Suicune extends NoEvolution {}

// class Larvitar extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Lugia extends NoEvolution {}

// class Ho_Oh extends NoEvolution {}

// class Celebi extends NoEvolution {}

// class Treecko extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Torchic extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Mudkip extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Poochyena extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Zigzagoon extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Wurmple extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Lotad extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Seedot extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Taillow extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Wingull extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Ralts extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Shroomish extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// } 

// class Slakoth extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Nincada extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Whismur extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Makuhita extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Nosepass extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Skitty extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sableye extends NoEvolution {}

// class Mawile extends NoEvolution {}

// class Aron extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Meditite extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Electrike extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Plusle extends NoEvolution {}

// class Minun extends NoEvolution {}

// class Volbeat extends NoEvolution {}

// class Illumise extends NoEvolution {}

// class Budew extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Gulpin extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Carvanha extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Wailmer extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Numel extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Torkoal extends NoEvolution {}

// class Spoink extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Spinda extends NoEvolution {}

// class Trapinch extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cacnea extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Swablu extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Zangoose extends NoEvolution {}

// class Seviper extends NoEvolution {
//     constructor () {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/seviper.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }

// }

// class Lunatone extends NoEvolution {}

// class Solrock extends NoEvolution {}

// class Barboach extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Corphish extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Baltoy extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Lileep extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Anorith extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Feebas extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Castform extends NoEvolution {}

// class Kecleon extends NoEvolution {}

// class Shuppet extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Duskull extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tropius extends NoEvolution {}

// class Chingling extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Absol extends NoEvolution {}

// class Snorunt extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Spheal extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Clamperl extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Relicanth extends NoEvolution {}

// class Luvdisc extends NoEvolution {}

// class Bagon extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Beldum extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Regirock extends NoEvolution {}

// class Regice extends NoEvolution {}

// class Registeel extends NoEvolution {}

// class Latias extends NoEvolution {}

// class Latios extends NoEvolution {}

// class Kyogre extends NoEvolution {}

// class Groundon extends NoEvolution {}

// class Rayquaza extends NoEvolution {}

// class Jirachi extends NoEvolution {}

// class Deoxys extends NoEvolution {}

// class Turtwig extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Chimchar extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Piplup extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Starly extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bidoof extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Kricketot extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Shinx extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cranidos extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Shieldon extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class BurmyMale extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class BurmyFemale extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Combee extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pachirisu extends NoEvolution {}

// class Buizel extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cherubi extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Shellos extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Driftloon extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Buneary extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Glameow extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Stunky extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bronzor extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Chatot extends NoEvolution {}

// class Spiritomb extends NoEvolution {}

// class Gible extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Riolu extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Hippopotas extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Skorupi extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Croagunk extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Carnivine extends NoEvolution {}

// class Finneon extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Snover extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Rotom extends NoEvolution {}

// class Uxie extends NoEvolution {}

// class Mesprit extends NoEvolution {}

// class Azelf extends NoEvolution {}

// class Dialga extends NoEvolution {}

// class Palkia extends NoEvolution {}

// class Heatran extends NoEvolution {}

// class Regigigas extends NoEvolution {}

// class Giratina extends NoEvolution {}

// class Cresselia extends NoEvolution {}

// class Phione extends NoEvolution {}

// class Manaphy extends NoEvolution {}

// class Darkrai extends NoEvolution {}

// class Shaymin extends NoEvolution {}

// class Arceus extends NoEvolution {}

// class Victini extends NoEvolution {}

// class Snivy extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tepig extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Oshawott extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Patrat extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Lillipup extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Purrloin extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pansage extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pansear extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Panpour extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Munna extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pidove extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Blitzle extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/blitzle/blitzle1-removebg-preview.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Roggenrola extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Woobat extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Drilbur extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Audino extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/audino/audino-mega-removebg-preview.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Timburr extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tympole extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Throh extends NoEvolution {}

// class Sawk extends NoEvolution {}

// class Sewaddle extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Venipede extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cottonee extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Petilil extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Basculin extends NoEvolution {

// }

// class Sandile extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Darumaka extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Maractus extends NoEvolution {}

// class Dwebble extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Scraggy extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sigilyph extends NoEvolution {}

// class Yamask extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tirtouga extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Archen extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Trubbish extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Zorua extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Minccino extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Gothita extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Solosis extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Ducklett extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Vanillite extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Deerling extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Emolga extends NoEvolution {}

// class Karrablast extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Foongus extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Frillish extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Alomomola extends NoEvolution {}

// class Joltik extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Ferroseed extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Klink extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tynamo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Elgyem extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Litwick extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Axew extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cubchoo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cryogonal extends NoEvolution {}

// class Shelmet extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Stunfisk extends NoEvolution {}

// class Mienfood extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Druddigon extends NoEvolution {}

// class Golett extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pawniard extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bouffalant extends NoEvolution {}

// class Rufflet extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Vullaby extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Meatmor extends NoEvolution {}

// class Durant extends NoEvolution {}

// class Deino extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Larvesta extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cobalion extends NoEvolution {}

// class Terrakion extends NoEvolution {}

// class Virizion extends NoEvolution {}

// class Tornadus extends NoEvolution {}

// class Thundurus extends NoEvolution {}

// class Reshiram extends NoEvolution {}

// class Zekrom extends NoEvolution {}

// class Landorus extends NoEvolution {}

// class Kyurem extends NoEvolution {}

// class Keldeo extends NoEvolution {}

// class Meloetta extends NoEvolution {}

// class Genesect extends NoEvolution {}

// class Chespin extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Fennekin extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Froakie extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bunnelby extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Fletchling extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Scatterbug extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Litleo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Flabebe extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Skiddo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pancham extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Furfrou extends NoEvolution {}

// class Espurr extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Honedge extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Spritzee extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Swirlix extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Inkay extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Binacle extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Skrelp extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Clauncher extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Helioptile extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tyrunt extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Amaura extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Hawlucha extends NoEvolution {}

// class Dedenne extends NoEvolution {}

// class Goomy extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Klefki extends NoEvolution {}

// class Phantump extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pumpkaboo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Bergmite extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Noibat extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Xerneas extends NoEvolution {}

// class Yveltal extends NoEvolution {}

// class Zygarde extends NoEvolution {}

// class Diancie extends NoEvolution {}

// class Hoopa extends NoEvolution {}

// class Volcanion extends NoEvolution {}

// class Rowlet extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Litten extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Popplio extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pikipek extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Yungoos extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Grubbin extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Crabrawler extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Oricorio extends NoEvolution {}

// class Cutiefly extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Rockruff extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Wishiwashi extends NoEvolution {}

// class Mareanie extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Mudbray extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Dewspider extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Fomantis extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Morelull extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Salandit extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Stufful extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Boundsweet extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Comfey extends NoEvolution {}

// class Oranguru extends NoEvolution {}

// class Passimian extends NoEvolution {}

// class Wimpod extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sandygast extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Pyukumuku extends NoEvolution {}

// class TypeNull extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Minior extends NoEvolution {}

// class Komala extends NoEvolution {}

// class Turtonator extends NoEvolution {}

// class Togedemaru extends NoEvolution {}

// class Mimikyu extends NoEvolution {}

// class Bruxish extends NoEvolution {}

// class Drampa extends NoEvolution {}

// class Dhelmise extends NoEvolution {}

// class Jangmo_O extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Tapu_Koko extends NoEvolution {}

// class Tapu_Lele extends NoEvolution {}

// class Tapu_Bulu extends NoEvolution {}

// class Tapu_Fini extends NoEvolution {}

// class Cosmog extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Nihilego extends NoEvolution {}

// class Buzzwole extends NoEvolution {}

// class Pheromosa extends NoEvolution {}

// class Xurkitree extends NoEvolution {}

// class Celesteela extends NoEvolution {}

// class Kartana extends NoEvolution {}

// class Guzzlord extends NoEvolution {}

// class Necrozma extends NoEvolution {}

// class Magearna extends NoEvolution {}

// class Marshadow extends NoEvolution {}

// class Poipole extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Stakataka extends NoEvolution {}

// class Blacephalon extends NoEvolution {
//     constructor () {
//         super ();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/blacephalon/blacephalon-removebg-preview.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Zeraora extends NoEvolution {}

// class Meltan extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Grookey extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Scorbunny extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sobble extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Skwovet extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Rookidee extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Blipbug extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/pokemon-2/blipbug/blipbug0-removebg-preview.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Nickit extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Gossifleur extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Wooloo extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Chewtle extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Yamper extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Rolycoly extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Applin extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Silicobra extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Cramorant extends NoEvolution {}

// class Arrokuda extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Toxel extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sizzlipede extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Clobbopus extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Sinistea extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Hatenna extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Impidimp extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Milcery extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Falinks extends NoEvolution {}

// class Pincurchin extends NoEvolution {}

// class Snom extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Stonjourner extends NoEvolution {}

// class Eiscue extends NoEvolution {}

// class Indeedee extends NoEvolution {}

// class Morpeko extends NoEvolution {}

// class Cufant extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Dracozolt extends NoEvolution {}

// class Dracovish extends NoEvolution {}

// class Arctovish extends NoEvolution {}

// class Duraludon extends NoEvolution {}

// class Dreepy extends LinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/charmander/charmander0.png", "./images/charmander/charmander1.png", "./images/charmander/charmander2.png"];
//         this.imageElement.src = this.imageArray[this.index];
//     }
// }

// class Zacian extends NoEvolution {}

// class Zamazenta extends NoEvolution {}

// class Eternatus extends NoEvolution {}

// class Kubfu extends NonLinearEvolution {
//     constructor() {
//         super();
//         this.imageArray = ["./images/pokeball.png", "./images/eevee/eevee0.png", ];
//         this.finalForm = ["./images/eevee/eevee1.png", "./images/eevee/eevee2.png", "./images/eevee/eevee3.png", "./images/eevee/eevee4.png", "./images/eevee/eevee5.png", "./images/eevee/eevee6.png", "./images/eevee/eevee7.png", "./images/eevee/eevee8.png"]
//         this.imageElement.src = this.imageArray[this.index];

//     }
// }

// class Zarude extends NoEvolution {}

// class Regieleki extends NoEvolution {}

// class Regidrago extends NoEvolution {}

// class Glastrier extends NoEvolution {}

// class Spectrier extends NoEvolution {}

// class Calyrex extends NoEvolution {}