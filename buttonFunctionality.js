class Pokedex {
    constructor() {
        // buttons, modes, and screen properties
        this.leftMode = "light";
        this.rightMode = "light";

        this.bigBlueLight = null;
        this.mediumRedLt = null;
        this.medYellowLt = null;
        this.medGreenLt = null;
        this.smallRedLt1 = null;
        this.smallRedLt2 = null;
        this.smallRedLt3 = null;
        this.imageDisplay = null;
        this.imageContainer = null;
        this.soundBtn = null;
        this.evolveBtn = null;
        this.darkModeBtn1 = null;
        this.darkModeBtn2 = null;
        this.lightmodeBtn1 = null;
        this.lightmodeBtn2 = null;
        this.dpadUp = null;
        this.dpadRight = null;
        this.dpadDown = null;
        this.dpadLeft = null;
        this.speciesScreen = null;
        this.infoDisplay = null;
        this.blueBtn0 = null;
        this.blueBtn1 = null;
        this.blueBtn2 = null;
        this.blueBtn3 = null;
        this.blueBtn4 = null;
        this.blueBtn5 = null;
        this.blueBtn6 = null;
        this.blueBtn9 = null;
        this.blueBtn7 = null;
        this.blueBtn8 = null;
        this.smallGreenLt = null;
        this.leftDirectionBtn = null;
        this.rightDirectionBtn = null;
        this.searchInput = null;
        this.searchBtn = null;
        this.type1Display = null;
        this.type2Display = null;

        // pokedex info properties
        this.pokemonArray = this.populatePokedexData();

    }

    renderToHTML = () => {
        let pokedex = document.createElement("div");
        pokedex.classList.add("pokedex");

        let leftPanel = document.createElement("div");
        leftPanel.classList.add("left-panel");
        pokedex.append(leftPanel);

        let leftContainer = document.createElement("div");
        leftContainer.classList.add("left-container");
        leftPanel.append(leftContainer);

        // top left portion of the pokedex
        let leftTopContainer = document.createElement("div");
        leftTopContainer.classList.add("left-top-container");
        leftContainer.append(leftTopContainer);

        let leftTop = document.createElement("div");
        leftTop.classList.add("left-top");
        leftTopContainer.append(leftTop);

        let largeBlueLight = document.createElement("div");
        largeBlueLight.classList.add("large-blue-light");
        leftTop.append(largeBlueLight);
        this.bigBlueLight = largeBlueLight;

        let mediumRedLight = document.createElement("div");
        mediumRedLight.classList.add("medium-red-light");
        leftTop.append(mediumRedLight);
        this.mediumRedLt = mediumRedLight;

        let mediumYellowLight = document.createElement("div");
        mediumYellowLight.classList.add("medium-yellow-light");
        leftTop.append(mediumYellowLight);
        this.medYellowLt = mediumYellowLight;

        let mediumGreenLight = document.createElement("div");
        mediumGreenLight.classList.add("medium-green-light");
        leftTop.append(mediumGreenLight);
        this.medGreenLt = mediumGreenLight;

        let container1 = document.createElement("div");
        container1.classList.add("container1");
        leftTopContainer.append(container1);

        let container2 = document.createElement("div");
        container2.classList.add("container2");
        leftTopContainer.append(container2);
        // end of left top 

        // start of the left screen
        let LeftScreenAndCenter = document.createElement("div");
        LeftScreenAndCenter.classList.add("left-screen-and-center");
        leftContainer.append(LeftScreenAndCenter);

        let leftBottomContainer = document.createElement("div");
        leftBottomContainer.classList.add("left-bottom-container");
        LeftScreenAndCenter.append(leftBottomContainer);

        let leftScreen = document.createElement("div");
        leftScreen.classList.add("left-screen");
        leftBottomContainer.append(leftScreen);

        let screenBorder = document.createElement("div");
        screenBorder.classList.add("screen-border");
        leftScreen.append(screenBorder);

        let screenTop = document.createElement("div");
        screenTop.classList.add("screen-top");
        screenBorder.append(screenTop);

        let smallRedLight1 = document.createElement("div");
        smallRedLight1.classList.add("small-red-light");
        screenTop.append(smallRedLight1);
        this.smallRedLt1 = smallRedLight1;

        let smallRedLight2 = document.createElement("div");
        smallRedLight2.classList.add("small-red-light");
        screenTop.append(smallRedLight2);
        this.smallRedLt2 = smallRedLight2;

        let imageScreen = document.createElement("div");
        imageScreen.classList.add("image-screen");
        imageScreen.classList.add("light");
        screenBorder.append(imageScreen);

        let topArrow = document.createElement("div")
        topArrow.classList.add("top-container")
        imageScreen.append(topArrow);

        let arrowImageContainer = document.createElement("div");
        arrowImageContainer.classList.add("arrow-image-container");
        imageScreen.append(arrowImageContainer);

        let leftArrow = document.createElement("div");
        leftArrow.classList.add("left-container");
        arrowImageContainer.append(leftArrow);

        let imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container");
        arrowImageContainer.append(imageContainer);

        this.imageContainer = imageContainer;

        let pokeballObj = {
            imagesOfPokemons: ["./images/pokeball.png"],
            nameOfPokemonAndItsEvolvedForms: ["pokeball"],
            nationalNumbers: [],
            pokemonTypes: [],
            typeOfSpecies: [],
            pokedexEntries: []
        }
        let pokeball = new Pokemon(pokeballObj);
        pokeball.imageElement.classList.add("image");
        pokeball.imageElement.dataset.name = "pokeball";
        pokeball.imageElement.alt = "image of a pokeball";
        imageContainer.append(pokeball.imageElement);

        let rightArrow = document.createElement("div");
        rightArrow.classList.add("right-container");
        arrowImageContainer.append(rightArrow);


        let bottomArrow = document.createElement("div");
        bottomArrow.classList.add("bottom-container")
        imageScreen.append(bottomArrow);


        this.imageDisplay = imageScreen;

        let screenBottom = document.createElement("div");
        screenBottom.classList.add("screen-bottom");
        screenBorder.append(screenBottom);

        let mediumRedButton = document.createElement("div");
        mediumRedButton.classList.add("medium-red-button");
        screenBottom.append(mediumRedButton);


        let soundButton = document.createElement("button");
        soundButton.classList.add("sound-button")
        soundButton.innerText = "S";
        mediumRedButton.append(soundButton);
        this.soundBtn = soundButton;
        // will add this if and when we can find audio files of pokemon noise
        // this.soundBtn.addEventListener("click", pokemonNoise);

        let speakers = document.createElement("div");
        speakers.classList.add("speakers");
        screenBottom.append(speakers);

        let line1 = document.createElement("div");
        let line2 = document.createElement("div");
        let line3 = document.createElement("div");
        let line4 = document.createElement("div");
        speakers.append(line1);
        speakers.append(line2);
        speakers.append(line3);
        speakers.append(line4);
        // end of left screen

        // start of the bottom portion of the pokedex
        let leftButtons = document.createElement("div");
        leftButtons.classList.add("left-buttons");
        leftBottomContainer.append(leftButtons);

        let evolveContainer = document.createElement("div");
        leftButtons.append(evolveContainer);

        let evolveButton = document.createElement("button");
        evolveButton.classList.add("evolve-button");
        evolveButton.innerText = "E";
        evolveContainer.append(evolveButton);
        this.evolveBtn = evolveButton;
        this.evolveBtn.addEventListener("click", this.evolvePokemon);

        let modesAndDisplays = document.createElement("div");
        modesAndDisplays.classList.add("modes-and-display");
        leftButtons.append(modesAndDisplays);

        let darkModeButton = document.createElement("button");
        darkModeButton.classList.add("darkmode-button");
        darkModeButton.innerText = "DARK MODE";
        modesAndDisplays.append(darkModeButton);
        this.darkModeBtn1 = darkModeButton;
        this.darkModeBtn1.addEventListener("click", this.changeLeftToLightMode);

        let lightModeButton = document.createElement("button");
        lightModeButton.classList.add("lightmode-button");
        lightModeButton.innerText = "LIGHT MODE";
        modesAndDisplays.append(lightModeButton);
        this.lightmodeBtn1 = lightModeButton;
        this.lightmodeBtn1.addEventListener("click", this.changeLeftToDarkMode);

        let speciesDisplay = document.createElement("div");
        speciesDisplay.classList.add("species-display");
        speciesDisplay.classList.add("light");
        modesAndDisplays.append(speciesDisplay);
        this.speciesScreen = speciesDisplay;

        let directionPad = document.createElement("div");
        directionPad.classList.add("direction-pad");
        leftButtons.append(directionPad);

        let directionUpButton = document.createElement("button");
        directionUpButton.classList.add("direction-up");
        directionPad.append(directionUpButton);
        this.dpadUp = directionUpButton;
        this.dpadUp.addEventListener("click", this.moveUp);

        let upTriangle = document.createElement("div");
        upTriangle.classList.add("up");
        directionUpButton.append(upTriangle);

        let leftRightCenter = document.createElement("div");
        leftRightCenter.classList.add("left-right-center");
        directionPad.append(leftRightCenter);

        let directionLeftButton = document.createElement("button");
        directionLeftButton.classList.add("direction-left");
        leftRightCenter.append(directionLeftButton);
        this.dpadLeft = directionLeftButton;
        this.dpadLeft.addEventListener("click", this.moveLeft);


        let leftTriangle = document.createElement("div");
        leftTriangle.classList.add("left");
        directionLeftButton.append(leftTriangle);

        let centerPiece = document.createElement("div");
        centerPiece.classList.add("center-piece");
        leftRightCenter.append(centerPiece);

        let centerCircle = document.createElement("div");
        centerCircle.classList.add("center-circle");
        centerPiece.append(centerCircle);

        let directionRightButton = document.createElement("button");
        directionRightButton.classList.add("direction-right");
        leftRightCenter.append(directionRightButton);
        this.dpadRight = directionRightButton;
        this.dpadRight.addEventListener("click", this.moveRight);


        let rightTriangle = document.createElement("div");
        rightTriangle.classList.add("right");
        directionRightButton.append(rightTriangle);

        let directionDownButton = document.createElement("button");
        directionDownButton.classList.add("direction-down");
        directionPad.append(directionDownButton);
        this.dpadDown = directionDownButton;
        this.dpadDown.addEventListener("click", this.moveDown);


        let downTriangle = document.createElement("div");
        downTriangle.classList.add("down");
        directionDownButton.append(downTriangle);
        // end of left bottom container

        let centerContainer = document.createElement("div");
        centerContainer.classList.add("center-container");
        LeftScreenAndCenter.append(centerContainer);

        let topBlock = document.createElement("div");
        topBlock.classList.add("top-block");
        centerContainer.append(topBlock);

        let centerBlock = document.createElement("div");
        centerBlock.classList.add("center-block");
        centerContainer.append(centerBlock);

        let bottomBlock = document.createElement("div");
        bottomBlock.classList.add("bottom-block");
        centerContainer.append(bottomBlock);
        // end of left container and left panel

        // start of right side of pokedex

        // start of top portion of pokedex
        let rightSide = document.createElement("div");
        rightSide.classList.add("right-side");
        pokedex.append(rightSide);

        let topRightContainer = document.createElement("div");
        topRightContainer.classList.add("top-right-container");
        rightSide.append(topRightContainer);

        let rightTop = document.createElement("div");
        rightTop.classList.add("right-top");
        topRightContainer.append(rightTop);

        let topContainer1 = document.createElement("div");
        topContainer1.classList.add("top-container1");
        rightTop.append(topContainer1);

        let topContainer2 = document.createElement("div");
        topContainer2.classList.add("top-container2");
        rightTop.append(topContainer2);

        let topContainer3 = document.createElement("div");
        topContainer3.classList.add("top-container3");
        rightTop.append(topContainer3);
        // end of top portion of pokedex

        // start of the right panel
        let rightPanel = document.createElement("div");
        rightPanel.classList.add("right-panel");
        rightSide.append(rightPanel);

        let rightContainer = document.createElement("div");
        rightContainer.classList.add("right-container");
        rightPanel.append(rightContainer);

        let infoScreen = document.createElement("div");
        infoScreen.classList.add("info-screen");
        infoScreen.classList.add("light");
        rightContainer.append(infoScreen);
        this.infoDisplay = infoScreen;

        let blueButtonContainer = document.createElement("div");
        blueButtonContainer.classList.add("blue-button-container");
        rightContainer.append(blueButtonContainer);

        let blueButtonCollection = document.createElement("div");
        blueButtonCollection.classList.add("blue-button-collection");
        blueButtonContainer.append(blueButtonCollection);

        let blueButton1 = document.createElement("button");
        blueButton1.classList.add("blue-button")
        blueButton1.innerText = "1";
        blueButtonCollection.append(blueButton1);
        this.blueBtn1 = blueButton1;
        this.blueBtn1.addEventListener("click", this.search1);

        let blueButton2 = document.createElement("button");
        blueButton2.classList.add("blue-button")
        blueButton2.innerText = "2";
        blueButtonCollection.append(blueButton2);
        this.blueBtn2 = blueButton2;
        this.blueBtn2.addEventListener("click", this.search2);

        let blueButton3 = document.createElement("button");
        blueButton3.classList.add("blue-button")
        blueButton3.innerText = "3";
        blueButtonCollection.append(blueButton3);
        this.blueBtn3 = blueButton3;
        this.blueBtn3.addEventListener("click", this.search3);

        let blueButton4 = document.createElement("button");
        blueButton4.classList.add("blue-button")
        blueButton4.innerText = "4";
        blueButtonCollection.append(blueButton4);
        this.blueBtn4 = blueButton4;
        this.blueBtn4.addEventListener("click", this.search4);

        let blueButton5 = document.createElement("button");
        blueButton5.classList.add("blue-button")
        blueButton5.innerText = "5";
        blueButtonCollection.append(blueButton5);
        this.blueBtn5 = blueButton5;
        this.blueBtn5.addEventListener("click", this.search5);

        let blueButton6 = document.createElement("button");
        blueButton6.classList.add("blue-button")
        blueButton6.innerText = "6";
        blueButtonCollection.append(blueButton6);
        this.blueBtn6 = blueButton6;
        this.blueBtn6.addEventListener("click", this.search6);

        let blueButton7 = document.createElement("button");
        blueButton7.classList.add("blue-button")
        blueButton7.innerText = "7";
        blueButtonCollection.append(blueButton7);
        this.blueBtn7 = blueButton7;
        this.blueBtn7.addEventListener("click", this.search7);

        let blueButton8 = document.createElement("button");
        blueButton8.classList.add("blue-button")
        blueButton8.innerText = "8";
        blueButtonCollection.append(blueButton8);
        this.blueBtn8 = blueButton8;
        this.blueBtn8.addEventListener("click", this.search8);

        let blueButton9 = document.createElement("button");
        blueButton9.classList.add("blue-button")
        blueButton9.innerText = "9";
        blueButtonCollection.append(blueButton9);
        this.blueBtn9 = blueButton9;
        this.blueBtn9.addEventListener("click", this.search9);

        let blueButton0 = document.createElement("button");
        blueButton0.classList.add("blue-button")
        blueButton0.innerText = "0";
        blueButtonCollection.append(blueButton0);
        this.blueBtn0 = blueButton0;
        this.blueBtn0.addEventListener("click", this.search0);

        let lightsAndModes = document.createElement("div");
        lightsAndModes.classList.add("lights-and-modes");
        rightContainer.append(lightsAndModes);

        let lights = document.createElement("div");
        lights.classList.add("lights");
        lightsAndModes.append(lights);

        let smallRedLight3 = document.createElement("div");
        smallRedLight3.classList.add("small-red-light");
        lights.append(smallRedLight3);
        this.smallRedLt3 = smallRedLight3;

        let smallGreenLight = document.createElement("div");
        smallGreenLight.classList.add("small-green-light");
        lights.append(smallGreenLight);
        this.smallGreenLt = smallGreenLight;

        let modes = document.createElement("div");
        modes.classList.add("modes");
        lightsAndModes.append(modes);

        let darkmodeButton2 = document.createElement("button");
        darkmodeButton2.classList.add("darkmode-button");
        darkmodeButton2.innerText = "DARK MODE";
        modes.append(darkmodeButton2);
        this.darkModeBtn2 = darkmodeButton2;
        this.darkModeBtn2.addEventListener("click", this.changeRightToLightMode);

        let lightModeButton2 = document.createElement("button");
        lightModeButton2.classList.add("lightmode-button");
        lightModeButton2.innerText = "LIGHT MODE";
        modes.append(lightModeButton2);
        this.lightmodeBtn2 = lightModeButton2;
        this.lightmodeBtn2.addEventListener("click", this.changeRightToDarkMode);

        let navAndSearch = document.createElement("div");
        navAndSearch.classList.add("nav-and-search");
        rightContainer.append(navAndSearch);

        let twoWayDirection = document.createElement("div")
        twoWayDirection.classList.add("two-way-direction");
        navAndSearch.append(twoWayDirection);

        let leftButton = document.createElement("button");
        leftButton.classList.add("left-button");
        twoWayDirection.append(leftButton);
        this.leftDirectionBtn = leftButton;
        this.leftDirectionBtn.addEventListener("click", this.scrollLeft);

        let leftTriangle2 = document.createElement("div");
        leftTriangle2.classList.add("left");
        leftButton.append(leftTriangle2);

        let rightButton = document.createElement("button");
        rightButton.classList.add("right-button");
        twoWayDirection.append(rightButton);
        this.rightDirectionBtn = rightButton;
        this.rightDirectionBtn.addEventListener("click", this.scrollRight);

        let righttriangle2 = document.createElement("div");
        righttriangle2.classList.add("right");
        rightButton.append(righttriangle2);

        let search = document.createElement("div")
        search.classList.add("search");
        navAndSearch.append(search);

        let inputContainer = document.createElement("div");
        search.append(inputContainer);

        let inputLabel = document.createElement("label");
        inputLabel.for = "search-box";
        inputLabel.innerText = "Enter the Pokemon Name or Number";
        inputContainer.append(inputLabel);

        let input = document.createElement("input");
        input.type = "text";
        input.id = "search-box";
        input.name = "search-box";
        input.autofocus = "true";
        input.maxLength = 11;
        input.placeholder = "Max 11 Chars or Nums";
        input.classList.add("light");
        inputContainer.append(input);
        this.searchInput = input;

        let searchButton = document.createElement("button");
        searchButton.classList.add("search-button");
        searchButton.innerText = "Search";
        search.append(searchButton);
        this.searchBtn = searchButton;
        this.searchBtn.addEventListener("click", this.searchPokemon);

        let typeDisplay = document.createElement("div");
        typeDisplay.classList.add("type-display");
        rightContainer.append(typeDisplay);

        let type1 = document.createElement("div");
        type1.classList.add("type1");
        type1.classList.add("light");
        typeDisplay.append(type1);
        this.type1Display = type1;

        let type2 = document.createElement("div");
        type2.classList.add("type2");
        type2.classList.add("light");
        typeDisplay.append(type2);
        this.type2Display = type2;
        // end of right side

        return pokedex;

    }

    evolvePokemon = () => {
        console.log("do something");
    }
    changeLeftToDarkMode = () => {
        if (this.leftMode === "dark") {

            this.leftMode = "light";

            if (this.imageDisplay.classList.contains("dark")) {
                this.imageDisplay.classList.replace("dark", "light");
            }
            if (this.speciesScreen.classList.contains("dark")) {
                this.speciesScreen.classList.replace("dark", "light");
            }
        }
    }

    changeRightToDarkMode = () => {
        if (this.rightMode === "dark") {

            this.rightMode = "light";

            if (this.infoDisplay.classList.contains("dark")) {
                this.infoDisplay.classList.replace("dark", "light");
            }
            if (this.type1Display.classList.contains("dark")) {
                this.type1Display.classList.replace("dark", "light");
            }
            if (this.type2Display.classList.contains("dark")) {
                this.type2Display.classList.replace("dark", "light");
            }
            if (this.searchInput.classList.contains("dark")) {
                this.searchInput.classList.replace("dark", "light");
            }

        }
    }

    changeLeftToLightMode = () => {
        if (this.leftMode === "light") {

            this.leftMode = "dark";

            if (this.imageDisplay.classList.contains("light")) {
                this.imageDisplay.classList.replace("light", "dark");
            }
            if (this.speciesScreen.classList.contains("light")) {
                this.speciesScreen.classList.replace("light", "dark");
            }
        }
    }

    changeRightToLightMode = () => {
        if (this.rightMode === "light") {

            this.rightMode = "dark";

            if (this.infoDisplay.classList.contains("light")) {
                this.infoDisplay.classList.replace("light", "dark");
            }
            if (this.type1Display.classList.contains("light")) {
                this.type1Display.classList.replace("light", "dark");
            }
            if (this.type2Display.classList.contains("light")) {
                this.type2Display.classList.replace("light", "dark");
            }
            if (this.searchInput.classList.contains("light")) {
                this.searchInput.classList.replace("light", "dark");
            }
        }
    }

    moveUp = () => {
        // console.log("move up");
        if (this.pokemonArray.length > 0) {
            let imageContainer = document.querySelector(".image-container")
            let currentImage = document.querySelector(".image");
            // console.log(currentImage)
            let previousPokemon = null;
            let previousImage = null;
            if (currentImage.dataset.name != "pokeball") {
                // get the current pokemon based off the name on the dataset attribute on the image tag
                let currentPokemon = this.pokemonArray.find(pokemon => {
                    if (pokemon.names.includes(currentImage.dataset.name)) {
                        return pokemon;
                    }
                });
                // console.log(currentPokemon);
                // get the index of that pokemon in the this.pokemonArray
                let currentIndex = this.pokemonArray.indexOf(currentPokemon);
                let isBasePokemon = currentPokemon.names.indexOf(currentImage.dataset.name) === 0;
                if (currentIndex !== 0) {

                    let previousIndex = currentIndex - 1;
                    // if the current pokemon's name is the first name in the names array, show the pokemon who's index comes before it in the this.pokemonArray
                    if (isBasePokemon) {

                        // pokemon image
                        previousPokemon = this.pokemonArray[previousIndex];
                        previousImage = previousPokemon.imageElement;
                        previousImage.src = previousPokemon.imageArray[previousPokemon.imageArray.length - 1];
                        previousImage.alt = `image of ${previousPokemon.names[previousPokemon.names.length - 1]}`
                        previousImage.dataset.name = `${previousPokemon.names[previousPokemon.names.length - 1]}`
                        previousImage.classList.add("image");
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        let species = previousPokemon.species[previousPokemon.species.length - 1]
                        this.speciesScreen.innerText = species.toUpperCase();

                        // pokemon info
                        let pokemonInfo = previousPokemon.info[previousPokemon.species.length - 1][0];
                        this.infoDisplay.innerText = pokemonInfo;

                        // pokemon types
                        let type1 = null;
                        let type2 = null;

                        if (previousPokemon.types[previousPokemon.types.length - 1]) {
                            console.log("up 1")
                            type1 = previousPokemon.types[previousPokemon.types.length - 1][0];
                            type2 = previousPokemon.types[previousPokemon.types.length - 1][1];

                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = type2.toUpperCase();

                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("dark");
                                this.type1Display.classList.add(type1);
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("light");
                                this.type1Display.classList.add(type1);
                            }

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("dark");
                                this.type2Display.classList.add(type2);
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("light");
                                this.type2Display.classList.add(type2);
                            }

                        } else {
                            console.log("up 2")
                            type1 = previousPokemon.types[previousPokemon.types.length - 1][0];
                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = "";
                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("dark");
                                this.type1Display.classList.add(type1);
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("light");
                                this.type1Display.classList.add(type1);
                            }

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("dark");
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("light");
                            }

                        }


                    } else {

                        // pokemon image
                        // if not, show the previous evolution of the same pokemon
                        previousPokemon = currentPokemon;
                        previousImage = previousPokemon.imageElement;
                        previousImage.src = previousPokemon.imageArray[previousPokemon.names.indexOf(currentImage.dataset.name) - 1];
                        previousImage.alt = `image of ${previousPokemon.names[previousPokemon.names.indexOf(currentImage.dataset.name) - 1]}`
                        previousImage.dataset.name = `${previousPokemon.names[previousPokemon.names.indexOf(currentImage.dataset.name) - 1]}`
                        previousImage.classList.add("image");
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        let species = previousPokemon.species[previousPokemon.names.indexOf(currentImage.dataset.name)]
                        this.speciesScreen.innerText = species.toUpperCase();

                        // pokemon info
                        let pokemonInfo = previousPokemon.info[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                        this.infoDisplay.innerText = pokemonInfo;

                        // pokemon types
                        let type1 = null;
                        let type2 = null;

                        if (previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)].length > 1) {
                            console.log("up 3")
                            type1 = previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                            type2 = previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)][1];

                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = type2.toUpperCase();

                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("dark");
                                this.type1Display.classList.add(type1);
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("light");
                                this.type1Display.classList.add(type1);
                            }

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("dark");
                                this.type2Display.classList.add(type2);
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("light");
                                this.type2Display.classList.add(type2);
                            }

                        } else {
                            console.log("up 4")
                            type1 = previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = "";
                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("dark");
                                this.type1Display.classList.add(type1);
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("light");
                                this.type1Display.classList.add(type1);
                            }

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("dark");
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("light");
                            }

                        }
                    }
                } else {
                    // check to see if the image is the first image, if it is then show the pokeball, if it is not, then show the previous evolution
                    if (isBasePokemon) {

                        // pokemon image
                        previousPokemon = null;
                        previousImage = document.createElement("img");
                        previousImage.src = "./images/pokeball.png";
                        previousImage.alt = "image of a pokeball"
                        previousImage.dataset.name = "pokeball"
                        previousImage.classList.add("image");
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        this.speciesScreen.innerText = "";

                        // pokemon info
                        this.infoDisplay.innerText = "";

                        // pokemon types
                        if (this.type1Display.classList.contains("dark")) {
                            this.type1Display.className = "type1"
                            this.type1Display.classList.add("dark");
                            this.type1Display.innerText = "";
                        } else if (this.type1Display.classList.contains("light")) {
                            this.type1Display.className = "type1"
                            this.type1Display.classList.add("light");
                            this.type1Display.innerText = "";
                        }

                    } else {

                        // pokemon image
                        previousPokemon = currentPokemon;
                        previousImage = previousPokemon.imageElement;
                        previousImage.src = previousPokemon.imageArray[previousPokemon.names.indexOf(currentImage.dataset.name) - 1];
                        previousImage.alt = `image of ${previousPokemon.names[previousPokemon.names.indexOf(currentImage.dataset.name) - 1]}`
                        previousImage.dataset.name = `${previousPokemon.names[previousPokemon.names.indexOf(currentImage.dataset.name) - 1]}`
                        previousImage.classList.add("image");
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        let species = previousPokemon.species[previousPokemon.names.indexOf(currentImage.dataset.name)]
                        this.speciesScreen.innerText = species.toUpperCase();

                        // pokemon info
                        let pokemonInfo = previousPokemon.info[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                        this.infoDisplay.innerText = pokemonInfo;

                        // pokemon types
                        let type1 = null;
                        let type2 = null;
                        if (previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)].length > 1) {
                            console.log("up 1")
                            type1 = previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                            type2 = previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)][1];

                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = type2.toUpperCase();

                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("dark");
                                this.type1Display.classList.add(type1);
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("light");
                                this.type1Display.classList.add(type1);
                            }

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("dark");
                                this.type2Display.classList.add(type2);
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("light");
                                this.type2Display.classList.add(type2);
                            }

                        } else {
                            console.log("up 2")
                            type1 = previousPokemon.types[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = "";
                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("dark");
                                this.type1Display.classList.add(type1);
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "type1";
                                this.type1Display.classList.add("light");
                                this.type1Display.classList.add(type1);
                            }

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("dark");
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "type2";
                                this.type2Display.classList.add("light");
                            }

                        }


                    }


                }



            } else {
                console.log("Start of pokedex");
            }
        }

    }
    moveRight = () => {
        // console.log("move right");
    }
    moveDown = () => {
        // console.log("move down");
        if (this.pokemonArray.length > 0) {
            let imageContainer = document.querySelector(".image-container")
            let currentImage = document.querySelector(".image");
            // console.log(currentImage)
            let nextPokemon = null;
            let nextImage = null;
            if (currentImage.dataset.name != "pokeball") {
                // get the current pokemon based off the name on the dataset attribute on the image tag
                let currentPokemon = this.pokemonArray.find(pokemon => {
                    if (pokemon.names.includes(currentImage.dataset.name)) {
                        return pokemon;
                    }
                });
                // get the index of that pokemon in the this.pokemonArray
                let currentIndex = this.pokemonArray.indexOf(currentPokemon);
                // console.log(currentIndex)

                // if the current pokemon's name is the last one in the names array property, then show the next pokemon in the this.pokemonArray
                let isLastInNameArray = currentPokemon.names.indexOf(currentImage.dataset.name) === currentPokemon.names.length - 1;
                if (isLastInNameArray) {
                    if (currentIndex === this.pokemonArray.length - 1) {
                        console.log("end of pokedex");
                        return;
                    }

                    // pokemon image
                    nextPokemon = this.pokemonArray[currentIndex + 1];
                    nextImage = nextPokemon.imageElement;
                    nextImage.src = nextPokemon.imageArray[0];
                    nextImage.alt = `image of ${nextPokemon.names[0]}`;
                    nextImage.dataset.name = `${nextPokemon.names[0]}`;
                    nextImage.classList.add("image");
                    imageContainer.innerHTML = "";
                    imageContainer.append(nextImage);

                    // pokemon species
                    let species = nextPokemon.species[0]
                    this.speciesScreen.innerText = species.toUpperCase();



                    // pokemon info
                    let pokemonInfo = nextPokemon.info[0][0];
                    this.infoDisplay.innerText = pokemonInfo;


                    // pokemon type
                    let type1 = null;
                    let type2 = null;

                    if (nextPokemon.types[0].length > 1) {
                        console.log("this")
                        type1 = nextPokemon.types[0][0];
                        type2 = nextPokemon.types[0][1];

                        this.type1Display.innerText = type1.toUpperCase();
                        this.type2Display.innerText = type2.toUpperCase();

                        if (this.type1Display.classList.contains("dark")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("dark");
                            this.type1Display.classList.add(type1);
                        } else if (this.type1Display.classList.contains("light")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("light");
                            this.type1Display.classList.add(type1);
                        }

                        if (this.type2Display.classList.contains("dark")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("dark");
                            this.type2Display.classList.add(type2);
                        } else if (this.type2Display.classList.contains("light")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("light");
                            this.type2Display.classList.add(type2);
                        }

                    } else {
                        console.log("that")
                        type1 = nextPokemon.types[0][0];
                        this.type1Display.innerText = type1.toUpperCase();
                        this.type2Display.innerText = "";
                        if (this.type1Display.classList.contains("dark")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("dark");
                            this.type1Display.classList.add(type1);
                        } else if (this.type1Display.classList.contains("light")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("light");
                            this.type1Display.classList.add(type1);
                        }

                        if (this.type2Display.classList.contains("dark")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("dark");
                        } else if (this.type2Display.classList.contains("light")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("light");
                        }

                    }


                } else {

                    nextPokemon = currentPokemon;

                    // pokemon image
                    nextImage = nextPokemon.imageElement;
                    nextImage.src = nextPokemon.imageArray[nextPokemon.names.indexOf(currentImage.dataset.name) + 1];
                    nextImage.alt = `image of ${nextPokemon.names[nextPokemon.names.indexOf(currentImage.dataset.name) + 1]}`;
                    nextImage.dataset.name = `${nextPokemon.names[nextPokemon.names.indexOf(currentImage.dataset.name) + 1]}`;
                    nextImage.classList.add("image");
                    imageContainer.innerHTML = "";
                    imageContainer.append(nextImage);

                    // pokemon species
                    let species = nextPokemon.species[nextPokemon.names.indexOf(currentImage.dataset.name)]
                    this.speciesScreen.innerText = species.toUpperCase();



                    // pokemon info
                    let pokemonInfo = nextPokemon.info[nextPokemon.names.indexOf(currentImage.dataset.name)][0];
                    this.infoDisplay.innerText = pokemonInfo;

                    // pokemon type
                    let type1 = null;
                    let type2 = null;

                    if (nextPokemon.types[nextPokemon.names.indexOf(currentImage.dataset.name)].length > 1) {
                        console.log("the other")
                        type1 = nextPokemon.types[nextPokemon.names.indexOf(currentImage.dataset.name)][0];
                        type2 = nextPokemon.types[nextPokemon.names.indexOf(currentImage.dataset.name)][1];

                        this.type1Display.innerText = type1.toUpperCase();
                        this.type2Display.innerText = type2.toUpperCase();

                        if (this.type1Display.classList.contains("dark")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("dark");
                            this.type1Display.classList.add(type1);
                        } else if (this.type1Display.classList.contains("light")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("light");
                            this.type1Display.classList.add(type1);
                        }

                        if (this.type2Display.classList.contains("dark")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("dark");
                            this.type2Display.classList.add(type2);
                        } else if (this.type2Display.classList.contains("light")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("light");
                            this.type2Display.classList.add(type2);
                        }

                    } else {
                        console.log("the other other")
                        type1 = nextPokemon.types[nextPokemon.names.indexOf(currentImage.dataset.name)][0];
                        this.type1Display.innerText = type1.toUpperCase();
                        this.type2Display.innerText = "";
                        if (this.type1Display.classList.contains("dark")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("dark");
                            this.type1Display.classList.add(type1);
                        } else if (this.type1Display.classList.contains("light")) {
                            this.type1Display.className = "type1";
                            this.type1Display.classList.add("light");
                            this.type1Display.classList.add(type1);
                        }

                        if (this.type2Display.classList.contains("dark")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("dark");
                        } else if (this.type2Display.classList.contains("light")) {
                            this.type2Display.className = "type2";
                            this.type2Display.classList.add("light");
                        }

                    }

                }
                // check and see if the name of the next pokemon is last name in the names property
                // if it is, set isFinalEvolution to true

            } else {

                // image
                nextPokemon = this.pokemonArray[0];
                nextImage = nextPokemon.imageElement;
                // console.log(nextImage)
                nextImage.alt = `image of ${nextPokemon.names[0]}`;
                nextImage.dataset.name = `${nextPokemon.names[0]}`;
                nextImage.classList.add("image");
                imageContainer.innerHTML = "";
                imageContainer.append(nextImage);

                // pokemon species
                let species = nextPokemon.species[0]
                this.speciesScreen.innerText = species.toUpperCase();

                // pokemon info
                let pokemonInfo = nextPokemon.info[0][0];
                this.infoDisplay.innerText = pokemonInfo;

                // pokemon type
                let type1 = null;
                let type2 = null;

                if (nextPokemon.types[0].length > 1) {
                    console.log("how many is this")
                    type1 = nextPokemon.types[0][0];
                    type2 = nextPokemon.types[0][1];

                    this.type1Display.innerText = type1.toUpperCase();
                    this.type2Display.innerText = type2.toUpperCase();

                    if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "type1";
                        this.type1Display.classList.add("dark");
                        this.type1Display.classList.add(type1);
                    } else if (this.type1Display.classList.contains("light")) {
                        this.type1Display.className = "type1";
                        this.type1Display.classList.add("light");
                        this.type1Display.classList.add(type1);
                    }

                    if (this.type2Display.classList.contains("dark")) {
                        this.type2Display.className = "type2";
                        this.type2Display.classList.add("dark");
                        this.type2Display.classList.add(type2);
                    } else if (this.type2Display.classList.contains("light")) {
                        this.type2Display.className = "type2";
                        this.type2Display.classList.add("light");
                        this.type2Display.classList.add(type2);
                    }

                } else {
                    console.log("hopefully the end")
                    type1 = nextPokemon.types[0][0];
                    this.type1Display.innerText = type1.toUpperCase();
                    this.type2Display.innerText = "";
                    if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "type1";
                        this.type1Display.classList.add("dark");
                        this.type1Display.classList.add(type1);
                    } else if (this.type1Display.classList.contains("light")) {
                        this.type1Display.className = "type1";
                        this.type1Display.classList.add("light");
                        this.type1Display.classList.add(type1);
                    }

                    if (this.type2Display.classList.contains("dark")) {
                        this.type2Display.className = "type2";
                        this.type2Display.classList.add("dark");
                    } else if (this.type2Display.classList.contains("light")) {
                        this.type2Display.className = "type2";
                        this.type2Display.classList.add("light");
                    }

                }

            }
        }
    }
    moveLeft = () => {
        // console.log("move left");
    }

    search1 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "1";
        }
    }
    search2 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "2";
        }
    }
    search3 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "3";
        }
    }
    search4 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "4";
        }
    }
    search5 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "5";
        }
    }
    search6 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "6";
        }
    }
    search7 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "7";
        }
    }
    search8 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "8";
        }
    }
    search9 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "9";
        }
    }
    search0 = () => {
        if (this.searchInput.value.length <= 11) {
            this.searchInput.value += "0";
        }
    }

    scrollLeft = () => {
        // decrease index in the info array
        let currentImage = document.querySelector(".image");
        if (currentImage.dataset.name === "pokeball") {
            return;
        }
        let currentPokemon = this.pokemonArray.find(pokemon => {
            if (pokemon.names.includes(currentImage.dataset.name)) {
                return pokemon;
            }
        });
        let currentInfo = document.querySelector(".info-screen");
        let outerIndexOfCurrentInfo = currentPokemon.names.indexOf(currentImage.dataset.name);
        let innerIndexOfCurrentInfo = currentPokemon.info[outerIndexOfCurrentInfo].indexOf(currentInfo.innerHTML);
        if (innerIndexOfCurrentInfo !== 0) {
            currentInfo.innerHTML = currentPokemon.info[outerIndexOfCurrentInfo][innerIndexOfCurrentInfo - 1];
        }

    }

    scrollRight = () => {
        // increase index in the info array
        let currentImage = document.querySelector(".image");
        if (currentImage.dataset.name === "pokeball") {
            return;
        }
        let currentPokemon = this.pokemonArray.find(pokemon => {
            if (pokemon.names.includes(currentImage.dataset.name)) {
                return pokemon;
            }
        });
        let currentInfo = document.querySelector(".info-screen");
        let outerIndexOfCurrentInfo = currentPokemon.names.indexOf(currentImage.dataset.name);
        let innerIndexOfCurrentInfo = currentPokemon.info[outerIndexOfCurrentInfo].indexOf(currentInfo.innerHTML);
        let sizeOfInnerInfoArray = currentPokemon.info[outerIndexOfCurrentInfo].length - 1
        if (innerIndexOfCurrentInfo !== sizeOfInnerInfoArray) {
            currentInfo.innerHTML = currentPokemon.info[outerIndexOfCurrentInfo][innerIndexOfCurrentInfo + 1];
        }
    }

    searchPokemon = () => {

        let inputValue = this.searchInput.value;
        let inputLowerCased = null;
        if (typeof (inputValue) === "string") {
            let pokemon = null;
            let inputType = null;
            if (!isNaN(Number(inputValue))) {
                pokemon = this.pokemonArray.find(pokemon => {
                    if (pokemon.nationalNumbers.includes(Number(inputValue))) {
                        return pokemon;
                    }
                });
                inputType = "number";
            } else {
                // find the pokemon that matches the name, make sure to use toLowerCase to make sure you can find the correct pokemon
                inputLowerCased = inputValue.toLowerCase();
                pokemon = this.pokemonArray.find(pokemon => {
                    if (pokemon.names.includes(inputLowerCased)) {
                        return pokemon;
                    }
                });
                inputType = "string"
            }
            // console.log(pokemon);
            let indexOfPokemon = null;
            if (pokemon !== undefined && inputType === "number") {
                indexOfPokemon = pokemon.nationalNumbers.indexOf(Number(inputValue));
            } else if (pokemon !== undefined && inputType === "string") {
                indexOfPokemon = pokemon.names.indexOf(inputLowerCased);
            }
            // image
            if (pokemon !== undefined) {
                let image = pokemon.imageElement;
                image.src = pokemon.imageArray[indexOfPokemon];
                image.alt = `image of ${pokemon.names[indexOfPokemon]}`;
                image.dataset.name = `${pokemon.names[indexOfPokemon]}`;
                image.classList.add("image");

                this.imageContainer.innerHTML = ""
                this.imageContainer.append(image);

                // species
                this.speciesScreen.innerText = pokemon.species[indexOfPokemon].toUpperCase();

                // info
                this.infoDisplay.innerText = pokemon.info[indexOfPokemon][0];

                // type
                let type1 = null;
                let type2 = null;
                if (pokemon.types[indexOfPokemon].length > 1) {

                    type1 = pokemon.types[indexOfPokemon][0];

                    if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "dark";
                    } else if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "light"
                    }
                    this.type1Display.innerText = type1.toUpperCase();
                    this.type1Display.classList.add("type1");
                    this.type1Display.classList.add(type1);


                    type2 = pokemon.types[indexOfPokemon][1];

                    if (this.type2Display.classList.contains("light")) {
                        this.type2Display.className = "light";
                    } else if (this.type2Display.classList.contains("dark")) {
                        this.type2Display.className = "dark";
                    }
                    this.type2Display.innerText = type2.toUpperCase();
                    this.type2Display.classList.add("type2");
                    this.type2Display.classList.add(type2);


                } else {

                    type1 = pokemon.types[indexOfPokemon][0];
                    this.type1Display.innerText = type1.toUpperCase();

                    if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "dark";
                    } else if (this.type1Display.classList.contains("light")) {
                        this.type1Display.className = "light";
                    }

                    this.type1Display.classList.add("type1");
                    this.type1Display.classList.add(type1);


                    this.type2Display.innerText = "";

                    if (this.type2Display.classList.contains("light")) {
                        this.type2Display.className = "light";
                    } else if (this.type2Display.classList.contains("dark")) {
                        this.type2Display.className = "dark";
                    }

                    this.type2Display.classList.add("type2");
                   
                }
            }


        }
    }


    populatePokedexData = () => {
        let listOfPokemons = [];

        let pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/charmander/charmander0.png", "./images/pokemon-2/charmander/charmander1.png", "./images/pokemon-2/charmander/charmander2.png"],
            nameOfPokemonAndItsEvolvedForms: ["charmander", "charmeleon", "charizard"],
            nationalNumbers: [4, 5, 6],
            pokemonTypes: [
                ["fire"],
                ["fire"],
                ["fire", "flying"]
            ],
            typeOfSpecies: ["lizard", "flame", "flame"],
            pokedexEntries: [
                ["Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
                    "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places."
                ],
                ["When it swings its burning tail, it elevates the temperature to unbearably high levels.",
                    "Tough fights could excite this POKéMON. When excited, it may blow out bluish-white flames."
                ],
                ["Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
                    "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely."
                ]
            ]
        }


        let charmander = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(charmander);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/eevee/eevee0.png", "./images/pokemon-2/eevee/eevee1.png", "./images/pokemon-2/eevee/eevee2.png", "./images/pokemon-2/eevee/eevee3.png"],
            nameOfPokemonAndItsEvolvedForms: ["eevee", "vaporeon", "volteon", "flareon"],
            nationalNumbers: [133, 134, 135, 136],
            pokemonTypes: [
                ["normal"],
                ["water"],
                ["electric"],
                ["fire"]
            ],
            typeOfSpecies: ["evolution", "bubble jet", "lightning", "flame"],
            pokedexEntries: [
                [
                    "Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.",
                    "Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive."
                ],
                [
                    "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid’s.",
                    "Its cell structure is similar to water molecules. It will melt away and become invisible in water.",
                ],
                [
                    "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.",
                    "A sensitive POKéMON that easily becomes sad or angry. Every time its mood changes, it charges power."
                ],
                [
                    "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
                    "It has a flame chamber inside its body. It inhales, then blows out fire that is over 3,000F degrees."
                ]
            ]
        }

        let eevee = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(eevee);

        return listOfPokemons;
    }
}