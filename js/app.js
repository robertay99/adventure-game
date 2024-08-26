//Game choice: choose your own adventure

// 1. Declare variables for game state and player choices.
// - Declare a variable to track the current location of the player.
// - Declare variables to store player choices for levels (choice1, choice2)

// 2. Create HTML elements for displaying game scenes and player choices.
// - Create elements to display the current scene description.
// - Create elements for choice buttons( I will create 2 buttons for choices.).

// 3. Create cached element references for the game scene display and choice buttons.
// - Cache reference for the scene description display.
// - Cache references for each choice button.

// 4. Add event listeners for the choice buttons.
// - Add event listeners to detect when a player clicks a choice button.
// - The event listener should capture the player's choice and update the game state accordingly.

// 5. Write an initialization function to set up the initial game state.
// - Set the initial location to the starting point
// - Set up the initial scene description and available choices.
// - Invoke the render function to display the initial scene.

// 6. Stub up a handleChoice() function for the event listeners to call.
// - Capture the player's choice and update the game state for next level.
// - Check if the player's choice leads to a new scene or ends the game.
// - If the game is not over, call the render() function to update the display.

//7. Within the render() function:
// - Update the scene description to match the player's current location.
// - Update the visibility and text of the choice buttons based on the player's options.

// 8. Handle end-of-game scenarios:
// - If the player wins or loses, display the appropriate message.
// - Provide an option to restart the game by resetting the game state and calling the initialization function.



/*---------- Variables (state) ---------*/
let currentLocation = "start";


/*-------------- Constants -------------*/
let choices = {
  left: "",
  right: "",
  cross: "",
  swim: "",
  enter: "",
  continue: "",
  open: "",
  leave: "",
  fight: "",
  run: "",
  red: "",
  blue: "",
  green: "",
  solve: "",
  exit: "",
};

/*----- Cached Element References  -----*/

const sceneDescription = document.getElementById("scene-description");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

/*-------------- Functions -------------*/

function game_start() {
  currentLocation = "start";
  render();
}

function render() {
    switch (currentLocation) {
        case "start":
            startScene();
            break;
        case "left":
            leftScene();
            break;
        case "right":
            rightScene();
            break;
        case "cross":
            crossScene();
            break;
        default:
            break;
    }
}

// scene functions with event listener
function startScene() {
  sceneDescription.textContent =
    "You find yourself in a dark whispery forest. You see two paths ahead of you: LEFT and RIGHT.";
  choice1.textContent = "Left";
  choice2.textContent = "Right";
  choice1.onclick = () => handleChoice("left");
  choice2.onclick = () => handleChoice("right");
}

function leftScene() {
  sceneDescription.textContent =
    "You chose the left path and come across a river. There is a bridge in the distance, but it looks unstable.";
  choice1.textContent = "Cross";
  choice2.textContent = "Swim";
  choice1.onclick = () => handleChoice("cross");
  choice2.onclick = () => handleChoice("swim");
}

function rightScene() {
  sceneDescription.textContent =
    "You chose the right path and stumble upon an old cabin. The door is slightly opened. What do you want to do?";
  choice1.textContent = "Enter";
  choice2.textContent = "Continue";
  choice1.onclick = () => handleChoice("enter");
  choice2.onclick = () => handleChoice("continue");
}

function crossScene() {
  sceneDescription.textContent =
    "You cautiously cross the unstable bridge. You notice a treasure chest.";
  choice1.textContent = "Open";
  choice2.textContent = "Leave";
  choice1.onclick = () => handleChoice("open");
  choice2.onclick = () => handleChoice("leave");
}



function handleChoice(choice) {
    currentLocation = choice;
    render();
}

game_start()
