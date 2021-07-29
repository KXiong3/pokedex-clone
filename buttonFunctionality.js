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
        this.upDirectionArrow = null;
        this.rightDirectionArrow = null;
        this.downDirectionArrow = null;
        this.leftDirectionArrow = null;
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
        this.infoTextArea = null;
        this.pokemonNameArea = null;
        this.leftScrollArrow = null;
        this.rightScrollArrow = null;
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
        this.upDirectionArrow = topArrow;
        imageScreen.append(topArrow);

        let arrowImageContainer = document.createElement("div");
        arrowImageContainer.classList.add("arrow-image-container");
        imageScreen.append(arrowImageContainer);

        let leftArrow = document.createElement("div");
        leftArrow.classList.add("left-container");
        this.leftDirectionArrow = leftArrow;
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
        this.rightDirectionArrow = rightArrow;
        arrowImageContainer.append(rightArrow);


        let bottomArrow = document.createElement("div");
        bottomArrow.classList.add("bottom-container");
        this.downDirectionArrow = bottomArrow;
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

        let nameArea = document.createElement("div");
        nameArea.classList.add("name-area");
        this.pokemonNameArea = nameArea;
        infoScreen.append(nameArea);

        let scrollArrowsAndText = document.createElement("div")
        scrollArrowsAndText.classList.add("scroll-arrows-and-text");
        infoScreen.append(scrollArrowsAndText);


        let leftScrollArrow = document.createElement("div");
        leftScrollArrow.classList.add("left-scroll-arrow");
        this.leftScrollArrow = leftScrollArrow;
        scrollArrowsAndText.append(leftScrollArrow);

        let textArea = document.createElement("div");
        textArea.classList.add("info-text-area");
        this.infoTextArea = textArea;
        scrollArrowsAndText.append(textArea);


        let rightScrollArrow = document.createElement("div");
        rightScrollArrow.classList.add("right-scroll-arrow");
        this.rightScrollArrow = rightScrollArrow;
        scrollArrowsAndText.append(rightScrollArrow);

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
        let chanceToEvolve = Math.random();
        let maxIndex = this.pokemonArray.reduce((highestNum, currentPokemonObj) => {
            for (let index = 0; index < currentPokemonObj.nationalNumbers.length; index++) {
                let number = currentPokemonObj.nationalNumbers[index];
                if (number > highestNum) {
                    highestNum = number;
                }
            }
            return highestNum;
        }, 0)
        // if there is already a pokemon there don't choose a random pokemon, just make it evolve if it can

        let currentImage = this.imageContainer.firstChild;

        if (currentImage.dataset.name === "pokeball") {
            let randomPokemonIndex = Math.floor(Math.random() * (maxIndex + 1));
            let randomPokemon = this.pokemonArray.find(pokemon => {
                if (pokemon.nationalNumbers.includes(randomPokemonIndex)) {
                    return pokemon;
                }
            });

            while (randomPokemon === undefined) {
                randomPokemonIndex = Math.floor(Math.random() * (maxIndex + 1));
                randomPokemon = this.pokemonArray.find(pokemon => {
                    if (pokemon.nationalNumbers.includes(randomPokemonIndex)) {
                        return pokemon;
                    }
                });
            }
            if (chanceToEvolve < .25) {

                // image
                let image = randomPokemon.imageElement;
                let nationalNumberIndex = randomPokemon.nationalNumbers.indexOf(randomPokemonIndex);
                image.src = randomPokemon.imageArray[nationalNumberIndex];
                image.alt = `image of ${randomPokemon.names[nationalNumberIndex]}`;
                image.dataset.name = `${randomPokemon.names[nationalNumberIndex]}`;
                image.classList.add("image");
                this.imageContainer.innerHTML = "";
                this.imageContainer.append(image);

                // species 
                this.speciesScreen.innerText = randomPokemon.species[nationalNumberIndex].toUpperCase();

                // info
                this.pokemonNameArea.innerText = image.dataset.name.toUpperCase();
                this.infoTextArea.innerText = randomPokemon.info[nationalNumberIndex][0];

                // type

                let type1 = null;
                let type2 = null;

                if (randomPokemon.types[nationalNumberIndex].length > 1) {
                    if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "dark";
                    } else if (this.type1Display.classList.contains("light")) {
                        this.type1Display.className = "light"
                    }
                    type1 = randomPokemon.types[nationalNumberIndex][0];
                    this.type1Display.classList.add("type1");
                    this.type1Display.classList.add(type1);
                    this.type1Display.innerText = type1.toUpperCase();

                    if (this.type2Display.classList.contains("dark")) {
                        this.type2Display.className = "dark";
                    } else if (this.type2Display.classList.contains("light")) {
                        this.type2Display.className = "light"
                    }
                    type2 = randomPokemon.types[nationalNumberIndex][1];
                    this.type2Display.classList.add("type2");
                    this.type2Display.classList.add(type2);
                    this.type2Display.innerText = type2.toUpperCase();

                } else {
                    if (this.type1Display.classList.contains("dark")) {
                        this.type1Display.className = "dark";
                    } else if (this.type1Display.classList.contains("light")) {
                        this.type1Display.className = "light"
                    }
                    type1 = randomPokemon.types[nationalNumberIndex][0];
                    this.type1Display.classList.add("type1");
                    this.type1Display.classList.add(type1);
                    this.type1Display.innerText = type1.toUpperCase();

                    if (this.type2Display.classList.contains("dark")) {
                        this.type2Display.className = "dark";
                    } else if (this.type2Display.classList.contains("light")) {
                        this.type2Display.className = "light";
                    }
                    this.type2Display.classList.add("type2");
                    this.type2Display.innerText = "";

                }


            } else {
                toggleShake(currentImage);
            }
        } else {
            let currentPokemon = this.pokemonArray.find(pokemon => {
                if (pokemon.names.includes(currentImage.dataset.name)) {
                    return pokemon;
                }
            });
            currentPokemon.makeEvolve();
        }
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
                        if (previousImage.classList.contains("shake1")) {
                            previousImage.classList.remove("shake1");
                        } else if (previousImage.classList.contains("shake2")) {
                            previousImage.classList.remove("shake2");
                        }
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        let species = previousPokemon.species[previousPokemon.species.length - 1]
                        this.speciesScreen.innerText = species.toUpperCase();

                        // pokemon info
                        this.pokemonNameArea.innerText = previousImage.dataset.name.toUpperCase();
                        let pokemonInfo = previousPokemon.info[previousPokemon.species.length - 1][0];
                        this.infoTextArea.innerText = pokemonInfo;

                        // pokemon types
                        let type1 = null;
                        let type2 = null;

                        if (previousPokemon.types[previousPokemon.types.length - 1].length > 1) {
                            console.log("up 1")
                            type1 = previousPokemon.types[previousPokemon.types.length - 1][0];
                            type2 = previousPokemon.types[previousPokemon.types.length - 1][1];

                            this.type1Display.innerText = type1.toUpperCase();
                            this.type2Display.innerText = type2.toUpperCase();

                            if (this.type1Display.classList.contains("dark")) {
                                this.type1Display.className = "dark";
                            } else if (this.type1Display.classList.contains("light")) {
                                this.type1Display.className = "light";
                            }

                            this.type1Display.classList.add("type1");
                            this.type1Display.classList.add(type1);

                            if (this.type2Display.classList.contains("dark")) {
                                this.type2Display.className = "dark";
                            } else if (this.type2Display.classList.contains("light")) {
                                this.type2Display.className = "light";
                            }

                            this.type2Display.classList.add("type2");
                            this.type2Display.classList.add(type2);

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
                        if (previousImage.classList.contains("shake1")) {
                            previousImage.classList.remove("shake1");
                        } else if (previousImage.classList.contains("shake2")) {
                            previousImage.classList.remove("shake2");
                        }
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        let species = previousPokemon.species[previousPokemon.names.indexOf(currentImage.dataset.name)]
                        this.speciesScreen.innerText = species.toUpperCase();

                        // pokemon info
                        this.pokemonNameArea.innerText = previousImage.dataset.name.toUpperCase();
                        let pokemonInfo = previousPokemon.info[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                        this.infoTextArea.innerText = pokemonInfo;

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
                        this.pokemonNameArea.innerText = "";
                        this.infoTextArea.innerText = "";

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

                        if (this.type2Display.classList.contains("dark")) {
                            this.type2Display.className = "type1"
                            this.type2Display.classList.add("dark");
                            this.type2Display.innerText = "";
                        } else if (this.type2Display.classList.contains("light")) {
                            this.type2Display.className = "type2"
                            this.type2Display.classList.add("light");
                            this.type2Display.innerText = "";
                        }

                    } else {

                        // pokemon image
                        previousPokemon = currentPokemon;
                        previousImage = previousPokemon.imageElement;
                        previousImage.src = previousPokemon.imageArray[previousPokemon.names.indexOf(currentImage.dataset.name) - 1];
                        previousImage.alt = `image of ${previousPokemon.names[previousPokemon.names.indexOf(currentImage.dataset.name) - 1]}`
                        previousImage.dataset.name = `${previousPokemon.names[previousPokemon.names.indexOf(currentImage.dataset.name) - 1]}`
                        previousImage.classList.add("image");
                        if (previousImage.classList.contains("shake1")) {
                            previousImage.classList.remove("shake1");
                        } else if (previousImage.classList.contains("shake2")) {
                            previousImage.classList.remove("shake2");
                        }
                        imageContainer.innerHTML = "";
                        imageContainer.append(previousImage);

                        // pokemon species
                        let species = previousPokemon.species[previousPokemon.names.indexOf(currentImage.dataset.name)]
                        this.speciesScreen.innerText = species.toUpperCase();

                        // pokemon info
                        this.pokemonNameArea.innerText = previousImage.dataset.name.toUpperCase();
                        let pokemonInfo = previousPokemon.info[previousPokemon.names.indexOf(currentImage.dataset.name)][0];
                        this.infoTextArea.innerText = pokemonInfo;

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
                    if (nextImage.classList.contains("shake1")) {
                        nextImage.classList.remove("shake1");
                    } else if (nextImage.classList.contains("shake2")) {
                        nextImage.classList.remove("shake2");
                    }
                    imageContainer.innerHTML = "";
                    imageContainer.append(nextImage);

                    // pokemon species
                    let species = nextPokemon.species[0]
                    this.speciesScreen.innerText = species.toUpperCase();



                    // pokemon info
                    this.pokemonNameArea.innerText = nextImage.dataset.name.toUpperCase();
                    let pokemonInfo = nextPokemon.info[0][0];
                    this.infoTextArea.innerText = pokemonInfo;


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
                    if (nextImage.classList.contains("shake1")) {
                        nextImage.classList.remove("shake1");
                    } else if (nextImage.classList.contains("shake2")) {
                        nextImage.classList.remove("shake2");
                    }
                    imageContainer.innerHTML = "";
                    imageContainer.append(nextImage);

                    // pokemon species
                    let species = nextPokemon.species[nextPokemon.names.indexOf(currentImage.dataset.name)]
                    this.speciesScreen.innerText = species.toUpperCase();



                    // pokemon info
                    this.pokemonNameArea.innerText = nextImage.dataset.name.toUpperCase();
                    let pokemonInfo = nextPokemon.info[nextPokemon.names.indexOf(currentImage.dataset.name)][0];
                    this.infoTextArea.innerText = pokemonInfo;

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
                if (nextImage.classList.contains("shake1")) {
                    nextImage.classList.remove("shake1");
                } else if (nextImage.classList.contains("shake2")) {
                    nextImage.classList.remove("shake2");
                }
                imageContainer.innerHTML = "";
                imageContainer.append(nextImage);

                // pokemon species
                let species = nextPokemon.species[0]
                this.speciesScreen.innerText = species.toUpperCase();

                // pokemon info
                this.pokemonNameArea.innerText = nextImage.dataset.name.toUpperCase();
                let pokemonInfo = nextPokemon.info[0][0];
                this.infoTextArea.innerText = pokemonInfo;
                

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
        let currentInfo = document.querySelector(".info-text-area");
        let outerIndexOfCurrentInfo = currentPokemon.names.indexOf(currentImage.dataset.name);
        let innerIndexOfCurrentInfo = currentPokemon.info[outerIndexOfCurrentInfo].indexOf(currentInfo.innerHTML);
        if (innerIndexOfCurrentInfo !== 0) {
            currentInfo.innerHTML = currentPokemon.info[outerIndexOfCurrentInfo][innerIndexOfCurrentInfo - 1];
        }

    }

    scrollRight = () => {
        // increase index in the info array
        // use this instead of document.querySelector
        let currentImage = document.querySelector(".image");
        if (currentImage.dataset.name === "pokeball") {
            return;
        }
        let currentPokemon = this.pokemonArray.find(pokemon => {
            if (pokemon.names.includes(currentImage.dataset.name)) {
                return pokemon;
            }
        });
        // change the document.querySelector to this.infoTextArea
        let currentInfo = document.querySelector(".info-text-area");
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
                if (image.classList.contains("shake1")) {
                    image.classList.remove("shake1")
                } else if (image.classList.contains("shake2")) {
                    image.classList.remove("shake2");
                }

                this.imageContainer.innerHTML = ""
                this.imageContainer.append(image);

                // species
                this.speciesScreen.innerText = pokemon.species[indexOfPokemon].toUpperCase();

                // info
                this.pokemonNameArea.innerText = image.dataset.name.toUpperCase();
                this.infoTextArea.innerText = pokemon.info[indexOfPokemon][0];
                
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
            imagesOfPokemons: ["./images/pokemon-2/bulbasaur/bulbasaur0.png", "./images/pokemon-2/bulbasaur/bulbasaur1.png", "./images/pokemon-2/bulbasaur/bulbasaur2.png"],
            nameOfPokemonAndItsEvolvedForms: ["bulbasaur", "ivysaur", "venusaur"],
            nationalNumbers: [1, 2, 3],
            pokemonTypes: [
                ["grass","poison"],
                ["grass","poison"],
                ["grass","poison"]
            ],
            typeOfSpecies: ["seed", "seed", "seed"],
            pokedexEntries: [
                ["A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
                    "It can go for days without eating a single morsel. In the bulb on its back, it stores energy."
                ],
                ["When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
                    "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom."
                ],
                ["The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
                    "The flower on its back catches the sun's rays. The sunlight is then absorbed and used for energy."
                ]
            ]
        }


        let bulbasaur = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(bulbasaur);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/squirtle/squirtle0.png", "./images/pokemon-2/squirtle/squirtle1.png", "./images/pokemon-2/squirtle/squirtle2.png"],
            nameOfPokemonAndItsEvolvedForms: ["squirtle", "wartortle", "blastoise"],
            nationalNumbers: [7, 8, 9],
            pokemonTypes: [
                ["water"],
                ["water"],
                ["water"]
            ],
            typeOfSpecies: ["tiny turtle", "turtle", "shellfish"],
            pokedexEntries: [
                ["After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
                    "Shoots water at prey while in the water. Withdraws into its shell when in danger."
                ],
                ["Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
                    "When tapped, this POKéMON will pull in its head, but its tail will still stick out a little bit."
                ],
                ["A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.",
                    "Once it takes aim at its enemy, it blasts out water with even more force than a fire hose."
                ]
            ]
        }


        let squirtle = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(squirtle);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/caterpie/caterpie0.png", "./images/pokemon-2/caterpie/caterpie1.png", "./images/pokemon-2/caterpie/caterpie2.png"],
            nameOfPokemonAndItsEvolvedForms: ["caterpie", "metapod", "butterfree"],
            nationalNumbers: [10, 11, 12],
            pokemonTypes: [
                ["bug"],
                ["bug"],
                ["bug", "flying"]
            ],
            typeOfSpecies: ["worm", "cocoon", "butterfly"],
            pokedexEntries: [
                ["Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
                    "If you touch the feeler on top of its head, it will release a horrible stink to protect itself."
                ],
                ["This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
                    "Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell."
                ],
                ["In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
                    "Its wings, covered with poisonous powders, repel water. This allows it to fly in the rain."
                ]
            ]
        }


        let caterpie = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(caterpie);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/weedle/weedle0.png", "./images/pokemon-2/weedle/weedle1.png", "./images/pokemon-2/weedle/weedle2.png"],
            nameOfPokemonAndItsEvolvedForms: ["weedle", "kakuna", "beedrill"],
            nationalNumbers: [13, 14, 15],
            pokemonTypes: [
                ["bug","poison"],
                ["bug","poison"],
                ["bug","poison"]
            ],
            typeOfSpecies: ["hairy bug", "cocoon", "poison bee"],
            pokedexEntries: [
                ["Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
                    "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves."
                ],
                ["Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
                    "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy."
                ],
                ["Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
                    "It has 3 poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly."
                ]
            ]
        }


        let weedle = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(weedle);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/pidgey/pidgey0.png", "./images/pokemon-2/pidgey/pidgey1.png", "./images/pokemon-2/pidgey/pidgey2.png"],
            nameOfPokemonAndItsEvolvedForms: ["pidgey", "pidgeotto", "pidgeot"],
            nationalNumbers: [16, 17, 18],
            pokemonTypes: [
                ["normal", "flying"],
                ["normal", "flying"],
                ["normal", "flying"]
            ],
            typeOfSpecies: ["tiny bird", "bird", "bird"],
            pokedexEntries: [
                ["A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
                    "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."
                ],
                ["Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
                    "This POKéMON is full of vitality. It constantly flies around its large territory in search of prey."
                ],
                ["When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
                    "This POKéMON flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons."
                ]
            ]
        }


        let pidgey = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(pidgey);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/rattata/rattata0.png", "./images/pokemon-2/rattata/rattata1.png"],
            nameOfPokemonAndItsEvolvedForms: ["rattata", "raticate"],
            nationalNumbers: [19, 20],
            pokemonTypes: [
                ["normal"],
                ["normal"]
            ],
            typeOfSpecies: ["mouse", "mouse"],
            pokedexEntries: [
                ["Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
                    "Will chew on anything with its fangs. If you see one, it is certain that 40 more live in the area."
                ],
                ["It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.",
                    "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey."
                ]
            ]
        }


        let rattata = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(rattata);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/spearow/spearow0.png", "./images/pokemon-2/spearow/spearow1.png"],
            nameOfPokemonAndItsEvolvedForms: ["spearow", "fearow"],
            nationalNumbers: [21, 22],
            pokemonTypes: [
                ["normal", "flying"],
                ["normal", "flying"]
            ],
            typeOfSpecies: ["tiny bird", "beak"],
            pokedexEntries: [
                ["Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
                    "Inept at flying high. However, it can fly around very fast to protect its territory."
                ],
                ["With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
                    "A POKéMON that dates back many years. If it senses danger, it flies high and away, instantly."
                ]
            ]
        }


        let spearow = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(spearow);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/ekans/ekans0.png", "./images/pokemon-2/ekans/ekans1.png"],
            nameOfPokemonAndItsEvolvedForms: ["ekans", "arbok"],
            nationalNumbers: [23, 24],
            pokemonTypes: [
                ["poison"],
                ["poison"]
            ],
            typeOfSpecies: ["snake", "cobra"],
            pokedexEntries: [
                ["Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
                    "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest."
                ],
                ["It is rumored that the ferocious warning markings on its belly differ from area to area.",
                    "The frightening patterns on its belly have been studied. Six variations have been confirmed."
                ]
            ]
        }


        let ekans = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(ekans);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/pichu/pichu1.png", "./images/pokemon-2/pichu/pichu2.png"],
            nameOfPokemonAndItsEvolvedForms: ["pikachu", "raichu"],
            nationalNumbers: [25, 26],
            pokemonTypes: [
                ["electric"],
                ["electric"]
            ],
            typeOfSpecies: ["mouse", "mouse"],
            pokedexEntries: [
                ["When several of these POKéMON gather, their electricity could build and cause lightning storms.",
                    "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."
                ],
                ["Its long tail serves as a ground to protect itself from its own high voltage power.", 
                    "When electricity builds up inside its body, it becomes feisty. It also glows in the dark."
                ]
            ]
        }


        let pikachu = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(pikachu);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/sandshrew/sandshrew0.png", "./images/pokemon-2/sandshrew/sandshrew1.png"],
            nameOfPokemonAndItsEvolvedForms: ["sandshrew", "sandslash"],
            nationalNumbers: [27, 28],
            pokemonTypes: [
                ["ground"],
                ["ground"]
            ],
            typeOfSpecies: ["mouse", "mouse"],
            pokedexEntries: [
                ["Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
                    "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew."
                ],
                ["Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.", 
                    "It is skilled at slashing enemies with its claws. If broken, they start to grow back in a day."
                ]
            ]
        }


        let sandshrew = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(sandshrew);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/nidoran-f/nidoran-f0.png", "./images/pokemon-2/nidoran-f/nidoran-f1.png", "./images/pokemon-2/nidoran-f/nidoran-f2.png"],
            nameOfPokemonAndItsEvolvedForms: ["Nidoran♀", "nidorina", "nidoqueen"],
            nationalNumbers: [29, 30, 31],
            pokemonTypes: [
                ["poison"],
                ["poison"],
                ["poison", "ground"]
            ],
            typeOfSpecies: ["poison pin", "poison pin", "drill"],
            pokedexEntries: [
                ["Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
                    "A mild-mannered POKéMON that does not like to fight. Beware, its small horns secrete venom."
                ],
                ["The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
                    "When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed."
                ],
                ["Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
                    "Tough scales cover the sturdy body of this POKéMON. It appears that the scales grow in cycles."
                ]
            ]
        }


        let nidoranFemale = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(nidoranFemale);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/nidoran-m/nidoran-m0.png", "./images/pokemon-2/nidoran-m/nidoran-m1.png", "./images/pokemon-2/nidoran-m/nidoran-m2.png"],
            nameOfPokemonAndItsEvolvedForms: ["Nidoran♂", "nidorino", "nidoking"],
            nationalNumbers: [32, 33, 34],
            pokemonTypes: [
                ["poison"],
                ["poison"],
                ["poison", "ground"]
            ],
            typeOfSpecies: ["poison pin", "poison pin", "drill"],
            pokedexEntries: [
                ["Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
                    "Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting."
                ],
                ["An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
                    "Its horns contain venom. If they are stabbed into an enemy, the impact makes the poison leak out."
                ],
                ["It uses its powerful tail in battle to smash, constrict, then break the prey's bones.",
                    "Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond."
                ]
            ]
        }


        let nidoranMale = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(nidoranMale);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/cleffa/cleffa1.png", "./images/pokemon-2/cleffa/cleffa2.png"],
            nameOfPokemonAndItsEvolvedForms: ["clefairy", "clefable"],
            nationalNumbers: [35, 36],
            pokemonTypes: [
                ["fairy"],
                ["fairy"]
            ],
            typeOfSpecies: ["fairy", "fairy"],
            pokedexEntries: [
                ["Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
                    "Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often."
                ],
                ["A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.", 
                    "They appear to be very protective of their own world. It is a kind of fairy, rarely seen by people."
                ]
            ]
        }


        let clefairy = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(clefairy);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/vulpix/vulpix0.png", "./images/pokemon-2/vulpix/vulpix1.png"],
            nameOfPokemonAndItsEvolvedForms: ["vulpix", "ninetales"],
            nationalNumbers: [37, 38],
            pokemonTypes: [
                ["fire"],
                ["fire"]
            ],
            typeOfSpecies: ["fox", "fox"],
            pokedexEntries: [
                ["At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
                    "Both its fur and its tails are beautiful. As it grows, the tails split and form more tails."
                ],
                ["Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
                    "According to an enduring legend, 9 noble saints were united and reincarnated as this POKéMON."
                ]
            ]
        }


        let vulpix = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(vulpix);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/igglybuff/igglybuff1.png", "./images/pokemon-2/igglybuff/igglybuff2.png"],
            nameOfPokemonAndItsEvolvedForms: ["jigglypuff", "wigglytuff"],
            nationalNumbers: [39, 40],
            pokemonTypes: [
                ["normal", "fairy"],
                ["normal", "fairy"]
            ],
            typeOfSpecies: ["balloon", "balloon"],
            pokedexEntries: [
                ["When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
                    "Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep."
                ],
                ["The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
                    "Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit."
                ]
            ]
        }


        let jigglypuff = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(jigglypuff);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/zubat/zubat0.png", "./images/pokemon-2/zubat/zubat1.png", "./images/pokemon-2/zubat/zubat2.png"],
            nameOfPokemonAndItsEvolvedForms: ["zubat", "golbat"],
            nationalNumbers: [41, 42],
            pokemonTypes: [
                ["poison", "flying"],
                ["poison", "flying"]
            ],
            typeOfSpecies: ["bat", "bat"],
            pokedexEntries: [
                ["Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
                    "Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way."
                ],
                ["Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
                    "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood."
                ]
            ]
        }


        let zubat = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(zubat);

        // could possibly break program here
        // made oddish a non linear evolution pokemon even though in the first generation, it was linear
        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/oddish/oddish0.png", "./images/pokemon-2/oddish/oddish1.png", "./images/pokemon-2/oddish/oddish2.png"],
            nameOfPokemonAndItsEvolvedForms: ["oddish", "gloom", "vileplume"],
            indexOfBranchingEvolution: 1,
            nationalNumbers: [43, 44, 45],
            pokemonTypes: [
                ["grass", "poison"],
                ["grass", "poison"],
                ["grass", "poison"]
            ],
            typeOfSpecies: ["weed", "weed", "flower"],
            pokedexEntries: [
                ["During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
                    "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly."
                ],
                ["The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
                    "Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink."
                ],
                ["The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
                    "Flaps its broad flower petals to scatter its poisonous pollen. The flapping sound is very loud."
                ]
            ]
        }


        let oddish = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(oddish);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/paras/paras0.png", "./images/pokemon-2/paras/paras1.png"],
            nameOfPokemonAndItsEvolvedForms: ["paras", "parasect"],
            nationalNumbers: [46, 47],
            pokemonTypes: [
                ["bug", "grass"],
                ["bug", "grass"]
            ],
            typeOfSpecies: ["mushroom", "mushroom"],
            pokedexEntries: [
                ["Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.", 
                    "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition."
                ],
                ["A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
                    "The bug host is drained of energy by the mushrooms on its back. They appear to do all the thinking."
                ]
            ]
        }


        let paras = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(paras);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/venonat/venonat0.png", "./images/pokemon-2/venonat/venonat1.png"],
            nameOfPokemonAndItsEvolvedForms: ["venonat", "venomoth"],
            nationalNumbers: [48, 49],
            pokemonTypes: [
                ["bug", "poison"],
                ["bug", "poison"]
            ],
            typeOfSpecies: ["insect", "poison moth"],
            pokedexEntries: [
                ["Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.", 
                    "Its large eyes act as radars. In a bright place, you can see that they are clusters of many tiny eyes."
                ],
                ["The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.", 
                    "The powdery scales on its wings are hard to remove. They also contain poison that leaks out on contact."
                ]
            ]
        }


        let venonat = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(venonat);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/diglett/diglett0.png", "./images/pokemon-2/diglett/diglett1.png"],
            nameOfPokemonAndItsEvolvedForms: ["diglett", "dugtrio"],
            nationalNumbers: [50, 51],
            pokemonTypes: [
                ["ground"],
                ["ground"]  
            ],
            typeOfSpecies: ["mole", "mole"],
            pokedexEntries: [
                ["Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
                    "It prefers dark places. It spends most of its time underground, though it may pop up in caves."
                ],
                ["A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
                    "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake."
                ]
            ]
        }


        let diglett = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(diglett);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/meowth/meowth0.png", "./images/pokemon-2/meowth/meowth1.png"],
            nameOfPokemonAndItsEvolvedForms: ["meowth", "persian"],
            nationalNumbers: [52, 53],
            pokemonTypes: [
                ["normal"],
                ["normal"]
            ],
            typeOfSpecies: ["scratch cat", "classy cat"],
            pokedexEntries: [
                ["Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
                    "Appears to be more active at night. It loves round and shiny things. It can't stop from picking them up."
                ],
                ["Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
                    "The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen."
                ]
            ]
        }


        let meowth = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(meowth);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/psyduck/psyduck0.png", "./images/pokemon-2/psyduck/psyduck1.png"],
            nameOfPokemonAndItsEvolvedForms: ["psyduck", "golduck"],
            nationalNumbers: [54, 55],
            pokemonTypes: [
                ["water"],
                ["water"]
            ],
            typeOfSpecies: ["duck", "duck"],
            pokedexEntries: [
                ["While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.",
                    "Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so."
                ],
                ["Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
                    "Its slim and long limbs end in broad flippers. They are used for swimming gracefully in lakes."
                ]
            ]
        }


        let psyduck = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(psyduck);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/mankey/mankey0.png", "./images/pokemon-2/mankey/mankey1.png"],
            nameOfPokemonAndItsEvolvedForms: ["mankey", "primeape"],
            nationalNumbers: [56, 57],
            pokemonTypes: [
                ["fighting"],
                ["fighting"]
            ],
            typeOfSpecies: ["pig monkey", "pig monkey"],
            pokedexEntries: [
                ["Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
                    "An agile POKéMON that lives in trees. It angers easily and will not hesitate to attack anything."
                ],
                ["Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
                    "It stops being angry only when nobody else is around. To view this moment is very difficult."
                ]
            ]
        }


        let mankey = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(mankey);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/growlithe/growlithe0.png", "./images/pokemon-2/growlithe/growlithe1.png"],
            nameOfPokemonAndItsEvolvedForms: ["growlithe", "arcanine"],
            nationalNumbers: [58, 59],
            pokemonTypes: [
                ["fire"],
                ["fire"]
            ],
            typeOfSpecies: ["puppy", "legendary"],
            pokedexEntries: [
                ["Very protective of its territory. It will bark and bite to repel intruders from its space.",
                    "A POKéMON with a friendly nature. However, it will bark fiercely at anything invading its territory."
                ],
                ["A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.",
                    "A legendary POKéMON in China. Many people are charmed by its grace and beauty while running."
                ]
            ]
        }


        let growlithe = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(growlithe);

        // code could possibly break here
        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/poliwag/poliwag0.png", "./images/pokemon-2/poliwag/poliwag1.png", "./images/pokemon-2/poliwag/poliwag2.png"],
            nameOfPokemonAndItsEvolvedForms: ["poliwag", "poliwhirl", "poliwrath"],
            indexOfBranchingEvolution: 1,
            nationalNumbers: [60, 61, 62],
            pokemonTypes: [
                ["water"],
                ["water"],
                ["water", "fighting"]
            ],
            typeOfSpecies: ["tadpole", "tadpole", "tadpole"],
            pokedexEntries: [
                ["Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
                    "The direction of the spiral on the belly differs by area. It is more adept at swimming than walking."
                ],
                ["Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
                    "Under attack, it uses its belly spiral to put the foe to sleep. It then makes its escape."
                ],
                ["An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.",
                    "Swims powerfully using all the muscles in its body. It can even overtake champion swimmers."
                ]
            ]
        }


        let poliwag = new NonLinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(poliwag);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/abra/abra0.png", "./images/pokemon-2/abra/abra1.png", "./images/pokemon-2/abra/abra2.png"],
            nameOfPokemonAndItsEvolvedForms: ["abra", "kadabra", "alakazam"],
            nationalNumbers: [63, 64, 65],
            pokemonTypes: [
                ["psychic"],
                ["psychic"],
                ["psychic"]
            ],
            typeOfSpecies: ["psi", "psi", "psi"],
            pokedexEntries: [
                ["Using its ability to read minds, it will identify impending danger and TELEPORT to safety.",
                    "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps."
                ],
                ["It emits special alpha waves from its body that induce headaches just by being close by.",
                    "Many odd things happen if this POKéMON is close by. For example, it makes clocks run backwards."
                ],
                ["Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.",
                    "A POKéMON that can memorize anything. It never forgets what it learns--that's why this POKéMON is smart."
                ]
            ]
        }


        let abra = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(abra);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/machop/machop0.png", "./images/pokemon-2/machop/machop1.png", "./images/pokemon-2/machop/machop2.png"],
            nameOfPokemonAndItsEvolvedForms: ["machop", "machoke", "machamp"],
            nationalNumbers: [66, 67, 68],
            pokemonTypes: [
                ["fighting"],
                ["fighting"],
                ["fighting"]
            ],
            typeOfSpecies: ["superpower", "superpower", "superpower"],
            pokedexEntries: [
                ["Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
                    "Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough."
                ],
                ["Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
                    "The belt around its waist holds back its energy. Without it, this POKéMON would be unstoppable."
                ],
                ["Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
                    "One arm alone can move mountains. Using all four arms, this POKéMON fires off awesome punches."
                ]
            ]
        }


        let machop = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(machop);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/bellsprout/bellsprout0.png", "./images/pokemon-2/bellsprout/bellsprout1.png", "./images/pokemon-2/bellsprout/bellsprout2.png"],
            nameOfPokemonAndItsEvolvedForms: ["bellsprout", "weepinbell", "victreebel"],
            nationalNumbers: [69, 70, 71],
            pokemonTypes: [
                ["grass", "poison"],
                ["grass", "poison"],
                ["grass", "poison"]
            ],
            typeOfSpecies: ["flower", "flycatcher", "flycatcher"],
            pokedexEntries: [
                ["A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture.",
                    "Prefers hot and humid places. It ensnares tiny insects with its vines and devours them."
                ],
                ["It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID.",
                    "When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids."
                ],
                ["Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
                    "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is melted in a day, bones and all."
                ]
            ]
        }


        let bellsprout = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(bellsprout);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/tentacool/tentacool0.png", "./images/pokemon-2/tentacool/tentacool1.png"],
            nameOfPokemonAndItsEvolvedForms: ["tentacool", "tentacruel"],
            nationalNumbers: [72, 73],
            pokemonTypes: [
                ["water", "poison"],
                ["water", "poison"]
            ],
            typeOfSpecies: ["jellyfish", "jellyfish"],
            pokedexEntries: [
                ["Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
                    "It can sometimes be found all dry and shriveled up on a beach. Toss it back into the sea to revive it."
                ],
                ["The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
                    "Its 80 tentacles can stretch and contract freely. They wrap around prey and weaken it with poison."
                ]
            ]
        }


        let tentacool = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(tentacool);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/geodude/geodude0.png", "./images/pokemon-2/geodude/geodude1.png", "./images/pokemon-2/geodude/geodude2.png"],
            nameOfPokemonAndItsEvolvedForms: ["geodude", "graveler", "golem"],
            nationalNumbers: [74, 75, 76],
            pokemonTypes: [
                ["rock", "ground"],
                ["rock", "ground"],
                ["rock", "ground"]
            ],
            typeOfSpecies: ["rock", "rock", "megaton"],
            pokedexEntries: [
                ["Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
                    "Commonly found near mountain trails, etc. If you step on one by accident, it gets angry."
                ],
                ["Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
                    "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid."
                ],
                ["Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.",
                    "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it's exposed to air."
                ]
            ]
        }


        let geodude = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(geodude);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/ponyta/ponyta0.png", "./images/pokemon-2/ponyta/ponyta1.png"],
            nameOfPokemonAndItsEvolvedForms: ["ponyta", "rapidash"],
            nationalNumbers: [77, 78],
            pokemonTypes: [
                ["fire"],
                ["fire"]
            ],
            typeOfSpecies: ["fire horse", "fire horse"],
            pokedexEntries: [
                ["Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
                    "Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing."
                ],
                ["Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.",
                    "Just loves to run. If it sees something faster than itself, it will give chase at top speed."
                ]
            ]
        }


        let ponyta = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(ponyta);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/slowpoke/slowpoke0.png", "./images/pokemon-2/slowpoke/slowpoke1.png"],
            nameOfPokemonAndItsEvolvedForms: ["slowpoke", "slowbro"],
            nationalNumbers: [79, 80],
            pokemonTypes: [
                ["water", "psychic"],
                ["water", "psychic"]
            ],
            typeOfSpecies: ["dopey", "hermit crab"],
            pokedexEntries: [
                ["Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
                    "Incredibly slow and sluggish. It is quite content to loll about without worrying about the time."
                ],
                ["The SHELLDER that is latched onto SLOWPOKE's tail is said to feed on the host's left over scraps.",
                    "Lives lazily by the sea. If the SHELLDER on its tail comes off, it becomes a SLOWPOKE again."
                ]
            ]
        }


        let slowpoke = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(slowpoke);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/magnemite/magnemite0.png", "./images/pokemon-2/magnemite/magnemite1.png"],
            nameOfPokemonAndItsEvolvedForms: ["magnemite", "magneton"],
            nationalNumbers: [81, 82],
            pokemonTypes: [
                ["electric", "steel"],
                ["electric", "steel"]
            ],
            typeOfSpecies: ["magnet", "magnet"],
            pokedexEntries: [
                ["Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
                    "It is born with the ability to defy gravity. It floats in air on powerful electromagnetic waves."
                ],
                ["Formed by several MAGNEMITEs linked together. They frequently appear when sunspots flare up.",
                    "Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet."
                ]
            ]
        }


        let magnemite = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(magnemite);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/farfetchd/farfetchd0.png"],
            nameOfPokemonAndItsEvolvedForms: ["farfetch'd"],
            nationalNumbers: [83],
            pokemonTypes: [
                ["normal", "flying"]
            ],
            typeOfSpecies: ["wild duck"],
            pokedexEntries: [
                ["The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
                    "Lives where reedy plants grow. They are rarely seen, so it's thought their numbers are decreasing."
                ]
            ]
        }


        let farfetchd = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(farfetchd);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/doduo/doduo0.png", "./images/pokemon-2/doduo/doduo1.png"],
            nameOfPokemonAndItsEvolvedForms: ["doduo", "dodrio"],
            nationalNumbers: [84, 85],
            pokemonTypes: [
                ["normal", "flying"],
                ["normal", "flying"]
            ],
            typeOfSpecies: ["twin bird", "triple bird"],
            pokedexEntries: [
                ["A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
                    "Its short wings make flying difficult. Instead, this POKéMON runs at high speed on developed legs."
                ],
                ["Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.", 
                    "One of DODUO's 2 heads splits to form a unique species. It runs close to 40 MPH in prairies."
                ]
            ]
        }


        let doduo = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(doduo);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/seel/seel0.png", "./images/pokemon-2/seel/seel1.png"],
            nameOfPokemonAndItsEvolvedForms: ["seel", "dewgong"],
            nationalNumbers: [86, 87],
            pokemonTypes: [
                ["water"],
                ["water", "ice"]
            ],
            typeOfSpecies: ["sea lion", "sea lion"],
            pokedexEntries: [
                ["The protruding horn on its head is very hard. It is used for bashing through thick ice.",
                    "Loves freezing cold conditions. Relishes swimming in a frigid climate of around 14F degrees."
                ],
                ["Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
                    "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters."
                ]
            ]
        }


        let seel = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(seel);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/grimer/grimer0.png", "./images/pokemon-2/grimer/grimer1.png"],
            nameOfPokemonAndItsEvolvedForms: ["grimer", "muck"],
            nationalNumbers: [88, 89],
            pokemonTypes: [
                ["poison"],
                ["poison"]
            ],
            typeOfSpecies: ["sludge", "sludge"],
            pokedexEntries: [
                ["Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
                    "Made of hardened sludge. It smells too putrid to touch. Even weeds won't grow in its path."
                ],
                ["Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
                    "Smells so awful, it can cause fainting. Through degeneration, it lost its sense of smell."
                ]
            ]
        }


        let grimer = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(grimer);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/shellder/shellder0.png", "./images/pokemon-2/shellder/shellder1.png"],
            nameOfPokemonAndItsEvolvedForms: ["shellder", "cloyster"],
            nationalNumbers: [90, 91],
            pokemonTypes: [
                ["water"],
                ["water", "ice"]
            ],
            typeOfSpecies: ["bivalve", "bivalve"],
            pokedexEntries: [
                ["Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
                    "The shell can withstand any attack. However, when it is open, the tender body is exposed."
                ],
                ["When attacked, it launches its horns in quick volleys. Its innards have never been seen.",
                    "For protection, it uses its harder-than-diamonds shell. It also shoots spikes from the shell."
                ]
            ]
        }


        let shellder = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(shellder);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/gastly/gastly0.png", "./images/pokemon-2/gastly/gastly1.png", "./images/pokemon-2/gastly/gastly2.png"],
            nameOfPokemonAndItsEvolvedForms: ["gastly", "haunter", "gengar"],
            nationalNumbers: [92, 93, 94],
            pokemonTypes: [
                ["ghost", "poison"],
                ["ghost", "poison"],
                ["ghost", "poison"]
            ],
            typeOfSpecies: ["gas", "gas", "shadow"],
            pokedexEntries: [
                ["Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
                    "Said to appear in decrepit, deserted buildings. It has no real shape as it appears to be made of a gas."
                ],
                ["Because of its ability to slip through block walls, it is said to be from another dimension.",
                    "By licking, it saps the victim's life. It causes shaking that won't stop until the victim's demise."
                ],
                ["Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.",
                    "A GENGAR is close by if you feel a sudden chill. It may be trying to lay a curse on you."
                ]
            ]
        }


        let gastly = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(gastly);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/onix/onix0.png"],
            nameOfPokemonAndItsEvolvedForms: ["onix"],
            nationalNumbers: [95],
            pokemonTypes: [
                ["rock", "ground"]
            ],
            typeOfSpecies: ["rock snake"],
            pokedexEntries: [
                ["As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
                    "Burrows at high speed in search of food. The tunnels it leaves are used as homes by DIGLETTs."
                ]
            ]
        }


        let onix = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(onix);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/drowzee/drowzee0.png", "./images/pokemon-2/drowzee/drowzee1.png"],
            nameOfPokemonAndItsEvolvedForms: ["drowzee", "hypno"],
            nationalNumbers: [96, 97],
            pokemonTypes: [
                ["psychic"],
                ["psychic"]
            ],
            typeOfSpecies: ["hypnosis", "hypnosis"],
            pokedexEntries: [
                ["Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
                    "If you sleep by it all the time, it will sometimes show you dreams it has eaten in the past."
                ],
                ["When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.",
                    "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum."
                ]
            ]
        }


        let drowzee = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(drowzee);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/krabby/krabby0.png", "./images/pokemon-2/krabby/krabby1.png"],
            nameOfPokemonAndItsEvolvedForms: ["krabby", "kingler"],
            nationalNumbers: [98, 99],
            pokemonTypes: [
                ["water"],
                ["water"]
            ],
            typeOfSpecies: ["river crab", "pincer"],
            pokedexEntries: [
                ["Its pincers are not only powerful weapons, they are used for balance when walking sideways.",
                    "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast."
                ],
                ["The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.",
                    "One claw grew massively and as hard as steel. It has 10,000-HP strength. However, it is too heavy."
                ]
            ]
        }


        let krabby = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(krabby);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/voltorb/voltorb0.png", "./images/pokemon-2/voltorb/voltorb1.png"],
            nameOfPokemonAndItsEvolvedForms: ["voltorb", "electrode"],
            nationalNumbers: [100, 101],
            pokemonTypes: [
                ["electric"],
                ["electric"]
            ],
            typeOfSpecies: ["ball", "ball"],
            pokedexEntries: [
                ["Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.",
                    "It is said to camouflage itself as a POKé BALL. It will self-destruct with very little stimulus."
                ],
                ["It stores electric energy under very high pressure. It often explodes with little or no provocation.",
                    "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion."
                ]
            ]
        }


        let voltorb = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(voltorb);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/exeggcute/exeggcute0.png", "./images/pokemon-2/exeggcute/exeggcute1.png"],
            nameOfPokemonAndItsEvolvedForms: ["exeggcute", "exeggutor"],
            nationalNumbers: [102, 103],
            pokemonTypes: [
                ["grass", "psychic"],
                ["grass", "psychic"]
            ],
            typeOfSpecies: ["egg", "coconut"],
            pokedexEntries: [
                ["Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
                    "The heads attract each other and spin around. There must be 6 heads for it to maintain balance."
                ],
                ["Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE.",
                    "Its cries are very noisy. This is because each of the 3 heads thinks about whatever it likes."
                ]
            ]
        }


        let exeggcute = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(exeggcute);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/cubone/cubone0.png", "./images/pokemon-2/cubone/cubone1.png"],
            nameOfPokemonAndItsEvolvedForms: ["cubone", "marowak"],
            nationalNumbers: [104, 105],
            pokemonTypes: [
                ["ground"],
                ["ground"]
            ],
            typeOfSpecies: ["lonely", "bone keeper"],
            pokedexEntries: [
                ["Because it never removes its skull helmet, no one has ever seen this POKéMON's real face.",
                    "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody."
                ],
                ["The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
                    "Small and weak, this POKéMON is adept with its bone club. It has grown more vicious over the ages."
                ]
            ]
        }


        let cubone = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(cubone);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/tyrogue/tyrogue1.png"],
            nameOfPokemonAndItsEvolvedForms: ["hitmonlee"],
            nationalNumbers: [106],
            pokemonTypes: [
                ["fighting"]
            ],
            typeOfSpecies: ["kicking"],
            pokedexEntries: [
                ["When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.",
                    "When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy."
                ]
            ]
        }


        let hitmonlee = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(hitmonlee);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/tyrogue/tyrogue2.png"],
            nameOfPokemonAndItsEvolvedForms: ["hitmonchan"],
            nationalNumbers: [107],
            pokemonTypes: [
                ["fighting"]
            ],
            typeOfSpecies: ["punching"],
            pokedexEntries: [
                ["While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.",
                    "Punches in corkscrew fashion. It can punch its way through a concrete wall in the same way as a drill."
                ]
            ]
        }


        let hitmonchan = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(hitmonchan);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/lickitung/lickitung0.png"],
            nameOfPokemonAndItsEvolvedForms: ["lickitung"],
            nationalNumbers: [108],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["licking"],
            pokedexEntries: [
                ["Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
                    "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis."
                ]
            ]
        }


        let lickitung = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(lickitung);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/koffing/koffing0.png", "./images/pokemon-2/koffing/koffing1.png"],
            nameOfPokemonAndItsEvolvedForms: ["koffing", "weezing"],
            nationalNumbers: [109, 110],
            pokemonTypes: [
                ["poison"],
                ["poison"]
            ],
            typeOfSpecies: ["poison gas", "poison gas"],
            pokedexEntries: [
                ["Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
                    "In hot places, its internal gases could expand and explode without any warning. Be very careful!"
                ],
                ["Where two kinds of poison gases meet, 2 KOFFINGs can fuse into a WEEZING over many years.",
                    "It lives and grows by absorbing dust, germs and poison gases that are contained in toxic waste and garbage."
                ]
            ]
        }


        let koffing = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(koffing);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/rhyhorn/rhyhorn0.png", "./images/pokemon-2/rhyhorn/rhyhorn1.png"],
            nameOfPokemonAndItsEvolvedForms: ["rhyhorn", "rhydon"],
            nationalNumbers: [111, 112],
            pokemonTypes: [
                ["ground", "rock"],
                ["ground", "rock"]
            ],
            typeOfSpecies: ["spikes", "drill"],
            pokedexEntries: [
                ["Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.",
                    "A POKéMON with a one-track mind. Once it charges, it won't stop running until it falls asleep."
                ],
                ["Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.",
                    "Walks on its hind legs. Shows signs of intelligence. Its armor-like hide even repels molten lava."
                ]
            ]
        }


        let rhyhorn = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(rhyhorn);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/happiny/happiny1.png"],
            nameOfPokemonAndItsEvolvedForms: ["chansey"],
            nationalNumbers: [113],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["egg"],
            pokedexEntries: [
                ["A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.",
                    "A gentle and kindhearted POKéMON that shares its nutritious eggs if it sees an injured POKéMON."
                ]
            ]
        }


        let chansey = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(chansey);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/tangela/tangela0.png"],
            nameOfPokemonAndItsEvolvedForms: ["tangela"],
            nationalNumbers: [114],
            pokemonTypes: [
                ["grass"]
            ],
            typeOfSpecies: ["vine"],
            pokedexEntries: [
                ["The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
                    "Its identity is obscured by masses of thick, blue vines. The vines are said to never stop growing."
                ]
            ]
        }


        let tangela = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(tangela);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/kangaskhan/kangaskhan0.png"],
            nameOfPokemonAndItsEvolvedForms: ["kangaskhan"],
            nationalNumbers: [115],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["parent"],
            pokedexEntries: [
                ["The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
                    "Raises its young in its belly pouch. Won't run from any fight to keep its young protected."
                ]
            ]
        }


        let kangaskhan = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(kangaskhan);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/horsea/horsea0.png", "./images/pokemon-2/horsea/horsea1.png"],
            nameOfPokemonAndItsEvolvedForms: ["horsea", "seadra"],
            nationalNumbers: [116, 117],
            pokemonTypes: [
                ["water"],
                ["water"]
            ],
            typeOfSpecies: ["dragon", "dragon"],
            pokedexEntries: [
                ["Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
                    "If it senses any danger, it will vigorously spray water or a special type of ink from its mouth."
                ],
                ["Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
                    "Touching the back fin causes numbness. It hooks its tail to coral to stay in place while sleeping."
                ]
            ]
        }


        let horsea = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(horsea);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/goldeen/goldeen0.png", "./images/pokemon-2/goldeen/goldeen1.png"],
            nameOfPokemonAndItsEvolvedForms: ["goldeen", "seaking"],
            nationalNumbers: [118, 119],
            pokemonTypes: [
                ["water"],
                ["water"]
            ],
            typeOfSpecies: ["goldfish", "goldfish"],
            pokedexEntries: [
                ["Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.",
                    "When it is time for them to lay eggs, they can be seen swimming up rivers and falls in large groups."
                ],
                ["In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.",
                    "It is the male's job to make a nest by carving out boulders in a stream using the horn on its head."
                ]
            ]
        }


        let goldeen = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(goldeen);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/staryu/staryu0.png", "./images/pokemon-2/staryu/staryu1.png"],
            nameOfPokemonAndItsEvolvedForms: ["staryu", "starmie"],
            nationalNumbers: [120, 121],
            pokemonTypes: [
                ["water"],
                ["water", "psychic"]
            ],
            typeOfSpecies: ["star shape", "mysterious"],
            pokedexEntries: [
                ["An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.",
                    "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits."
                ],
                ["Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
                    "The center section is named the core. People think it is communicating when it glows in 7 colors."
                ]
            ]
        }


        let staryu = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(staryu);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/mimejr/mimejr1.png"],
            nameOfPokemonAndItsEvolvedForms: ["mr. mime"],
            nationalNumbers: [122],
            pokemonTypes: [
                ["psychic", "fairy"]
            ],
            typeOfSpecies: ["barrier"],
            pokedexEntries: [
                ["If interrupted while it is miming, it will slap around the offender with its broad hands.",
                    "Always practices its pantomime act. It makes enemies believe something exists that really doesn't."
                ]
            ]
        }


        let mimejr = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(mimejr);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/scyther/scyther0.png"],
            nameOfPokemonAndItsEvolvedForms: ["scyther"],
            nationalNumbers: [123],
            pokemonTypes: [
                ["bug", "flying"]
            ],
            typeOfSpecies: ["mantis"],
            pokedexEntries: [
                ["With ninja-like agility and speed, it can create the illusion that there is more than one.",
                    "Leaps out of tall grass and slices prey with its scythes. The movement looks like that of a ninja."
                ]
            ]
        }


        let scyther = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(scyther);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/smoochum/smoochum1.png"],
            nameOfPokemonAndItsEvolvedForms: ["jynx"],
            nationalNumbers: [124],
            pokemonTypes: [
                ["ice", "psychic"]
            ],
            typeOfSpecies: ["human shape"],
            pokedexEntries: [
                ["It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.",
                    "Appears to move to a rhythm of its own, as if it were dancing. It wiggles its hips as it walks."
                ]
            ]
        }


        let smoochum = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(smoochum);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/elekid/elekid1.png"],
            nameOfPokemonAndItsEvolvedForms: ["electabuzz"],
            nationalNumbers: [125],
            pokemonTypes: [
                ["electric"]
            ],
            typeOfSpecies: ["electric"],
            pokedexEntries: [
                ["Normally found near power plants, they can wander away and cause major blackouts in cities.",
                    "If a major power outage occurs, it is certain that this POKéMON has eaten electricity at a power plant."
                ]
            ]
        }


        let elekid = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(elekid);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/magby/magby1.png"],
            nameOfPokemonAndItsEvolvedForms: ["magmar"],
            nationalNumbers: [126],
            pokemonTypes: [
                ["fire"]
            ],
            typeOfSpecies: ["spitfire"],
            pokedexEntries: [
                ["Its body always burns with an orange glow that enables it to hide perfectly among flames.",
                    "Born in an active volcano. Its body is always cloaked in flames, so it looks like a big ball of fire."
                ]
            ]
        }


        let magby = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(magby);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/pinsir/pinsir.png"],
            nameOfPokemonAndItsEvolvedForms: ["pinsir"],
            nationalNumbers: [127],
            pokemonTypes: [
                ["bug"]
            ],
            typeOfSpecies: ["stag beetle"],
            pokedexEntries: [
                ["If it fails to crush the victim in its pincers, it will swing it around and toss it hard.",
                    "Grips its prey in its pincers and squeezes hard! It can't move if it's cold, so it lives in warm places."
                ]
            ]
        }


        let pinsir = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(pinsir);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/tauros/tauros.png"],
            nameOfPokemonAndItsEvolvedForms: ["tauros"],
            nationalNumbers: [128],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["wild bull"],
            pokedexEntries: [
                ["When it targets an enemy, it charges furiously while whipping its body with its long tails.",
                    "A rowdy POKéMON with a lot of stamina. Once running, it won't stop until it hits something."
                ]
            ]
        }


        let tauros = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(tauros);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/magikarp/magikarp0.png", "./images/pokemon-2/magikarp/magikarp1.png"],
            nameOfPokemonAndItsEvolvedForms: ["magikarp", "gyarados"],
            nationalNumbers: [129, 130],
            pokemonTypes: [
                ["water"],
                ["water", "flying"]
            ],
            typeOfSpecies: ["fish", "atrocious"],
            pokedexEntries: [
                ["In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
                    "Famous for being very unreliable. It can be found swimming in seas, lakes, rivers and shallow puddles."
                ],
                ["Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
                    "Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times."
                ]
            ]
        }


        let magikarp = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(magikarp);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/lapras/lapras.png"],
            nameOfPokemonAndItsEvolvedForms: ["lapras"],
            nationalNumbers: [131],
            pokemonTypes: [
                ["water", "ice"]
            ],
            typeOfSpecies: ["transport"],
            pokedexEntries: [
                ["A POKéMON that has been overhunted almost to extinction. It can ferry people across the water.",
                    "A gentle soul that can read the minds of people. It can ferry people across the sea on its back."
                ]
            ]
        }


        let lapras = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(lapras);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/ditto/ditto.png"],
            nameOfPokemonAndItsEvolvedForms: ["ditto"],
            nationalNumbers: [132],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["transform"],
            pokedexEntries: [
                ["Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
                    "When it spots an enemy, its body transfigures into an almost perfect copy of its opponent."
                ]
            ]
        }


        let ditto = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(ditto);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/porygon/porygon0.png"],
            nameOfPokemonAndItsEvolvedForms: ["porygon"],
            nationalNumbers: [137],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["virtual"],
            pokedexEntries: [
                ["A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.",
                    "The only POKéMON people anticipate can fly into space. None has managed the feat yet, however."
                ]
            ]
        }


        let porygon = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(porygon);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/omanyte/omanyte0.png", "./images/pokemon-2/omanyte/omanyte1.png"],
            nameOfPokemonAndItsEvolvedForms: ["omanyte", "omastar"],
            nationalNumbers: [138, 139],
            pokemonTypes: [
                ["rock", "water"],
                ["rock", "water"]
            ],
            typeOfSpecies: ["spiral", "spiral"],
            pokedexEntries: [
                ["Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
                    "An ancient POKéMON that was recovered from a fossil. It swims by cleverly twisting its 10 tentacles about."
                ],
                ["A prehistoric POKéMON that died out when its heavy shell made it impossible to catch prey.",
                    "Sharp beaks ring its mouth. Its shell was too big for it to move freely, so it became extinct."
                ]
            ]
        }


        let omanyte = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(omanyte);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/kabuto/kabuto0.png", "./images/pokemon-2/kabuto/kabuto1.png"],
            nameOfPokemonAndItsEvolvedForms: ["kabuto", "kabutops"],
            nationalNumbers: [140, 141],
            pokemonTypes: [
                ["rock", "water"],
                ["rock", "water"]
            ],
            typeOfSpecies: ["shellfish", "shellfish"],
            pokedexEntries: [
                ["A POKéMON that was resurrected from a fossil found in what was once the ocean floor eons ago.",
                    "A POKéMON that was recovered from a fossil. It uses the eyes on its back while hiding on the sea floor."
                ],
                ["Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
                    "A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids."
                ]
            ]
        }


        let kabuto = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(kabuto);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/aerodactyl/aerodactyl0.png"],
            nameOfPokemonAndItsEvolvedForms: ["aerodactyl"],
            nationalNumbers: [142],
            pokemonTypes: [
                ["rock", "flying"]
            ],
            typeOfSpecies: ["fossil"],
            pokedexEntries: [
                ["A ferocious, prehistoric POKéMON that goes for the enemy's throat with its serrated saw-like fangs.",
                    "A savage POKéMON that died out in ancient times. It was resurrected using DNA taken from amber."
                ]
            ]
        }


        let aerodactyl = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(aerodactyl);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/munchlax/munchlax1.png"],
            nameOfPokemonAndItsEvolvedForms: ["snorlax"],
            nationalNumbers: [143],
            pokemonTypes: [
                ["normal"]
            ],
            typeOfSpecies: ["sleeping"],
            pokedexEntries: [
                ["Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
                    "Will eat anything, even if the food happens to be a little moldy. It never gets an upset stomach."
                ]
            ]
        }


        let munchlax = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(munchlax);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/articuno/articuno.png"],
            nameOfPokemonAndItsEvolvedForms: ["articuno"],
            nationalNumbers: [144],
            pokemonTypes: [
                ["ice", "flying"]
            ],
            typeOfSpecies: ["freeze"],
            pokedexEntries: [
                ["A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.",
                    "A legendary bird POKéMON. It freezes water that is contained in winter air and makes it snow."
                ]
            ]
        }


        let articuno = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(articuno);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/zapdos/zapdos.png"],
            nameOfPokemonAndItsEvolvedForms: ["zapdos"],
            nationalNumbers: [145],
            pokemonTypes: [
                ["electric", "flying"]
            ],
            typeOfSpecies: ["electric"],
            pokedexEntries: [
                ["A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
                    "This legendary bird POKéMON is said to appear when the sky turns dark and lightning showers down."
                ]
            ]
        }


        let zapdos = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(zapdos);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/moltres/moltres.png"],
            nameOfPokemonAndItsEvolvedForms: ["moltres"],
            nationalNumbers: [146],
            pokemonTypes: [
                ["fire", "flying"]
            ],
            typeOfSpecies: ["flame"],
            pokedexEntries: [
                ["Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
                    "A legendary bird POKéMON. As it flaps its flaming wings, even the night sky will turn red."
                ]
            ]
        }


        let moltres = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(moltres);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/dratini/dratini0.png", "./images/pokemon-2/dratini/dratini1.png", "./images/pokemon-2/dratini/dratini2.png"],
            nameOfPokemonAndItsEvolvedForms: ["dratini", "dragonair", "dragonite"],
            nationalNumbers: [147, 148, 149],
            pokemonTypes: [
                ["dragon"],
                ["dragon"],
                ["dragon", "flying"]
            ],
            typeOfSpecies: ["dragon", "dragon", "dragon"],
            pokedexEntries: [
                ["Long considered a mythical POKéMON until recently when a small colony was found living underwater.",
                    "The existence of this mythical POKéMON was only recently confirmed by a fisherman who caught one."
                ],
                ["A mystical POKéMON that exudes a gentle aura. Has the ability to change climate conditions.",
                    "According to a witness, its body was surrounded by a strange aura that gave it a mystical look."
                ],
                ["An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.",
                    "It is said that this POKéMON lives somewhere in the sea and that it flies. However, it is only a rumor."
                ]
            ]
        }


        let dratini = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(dratini);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/mewtwo/mewtwo0.png"],
            nameOfPokemonAndItsEvolvedForms: ["mewtwo"],
            nationalNumbers: [150],
            pokemonTypes: [
                ["psychic"]
            ],
            typeOfSpecies: ["genetic"],
            pokedexEntries: [
                ["It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
                    "Its DNA is almost the same as MEW's. However, its size and disposition are vastly different."
                ]
            ]
        }


        let mewtwo = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(mewtwo);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/mew/mew.png"],
            nameOfPokemonAndItsEvolvedForms: ["mew"],
            nationalNumbers: [151],
            pokemonTypes: [
                ["psychic"]
            ],
            typeOfSpecies: ["new species"],
            pokedexEntries: [
                ["So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
                    "When viewed through a microscope, this POKéMON's short, fine, delicate hair can be seen."
                ]
            ]
        }


        let mew = new LinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(mew);

        pokemonObj = {
            imagesOfPokemons: ["./images/pokemon-2/eevee/eevee0.png", "./images/pokemon-2/eevee/eevee1.png", "./images/pokemon-2/eevee/eevee2.png", "./images/pokemon-2/eevee/eevee3.png"],
            nameOfPokemonAndItsEvolvedForms: ["eevee", "vaporeon", "jolteon", "flareon"],
            indexOfBranchingEvolution: 0,
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
                    "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
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

        let eevee = new NonLinearEvolutionPokemon(pokemonObj);
        listOfPokemons.push(eevee);

        listOfPokemons.sort((pokemon1, pokemon2) => {
            if (pokemon1.nationalNumbers[0] > pokemon2.nationalNumbers[0]) {
                return pokemon1.nationalNumbers[0] - pokemon2.nationalNumbers[0];
            }
        })

        return listOfPokemons;
    }
}