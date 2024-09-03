/*---------- Variables (state) ---------*/
let currentLocation = "start";

/*-------------- Constants -------------*/
const choices = {
  left: "left",
  right: "right",
  cross: "cross",
  swim: "swim",
  enter: "enter",
  continue: "continue",
  open: "open",
  leave: "leave",
  fight: "fight",
  run: "run",
  red: "red",
  blue: "blue",
  green: "green",
  solve: "solve",
  exit: "exit",
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
  // Remove any extra choice buttons
  const extraChoice = document.getElementById("choice3");
  if (extraChoice) {
    extraChoice.remove();
  }

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
    case "swim":
      swimScene();
      break;
    case "enter":
      enterScene();
      break;
    case "continue":
      continueScene();
      break;
    case "open":
      openScene();
      break;
    case "leave":
      leaveScene();
      break;
    case "fight":
      fightScene();
      break;
    case "run":
      runScene();
      break;
    case "red":
      redScene();
      break;
    case "blue":
      blueScene();
      break;
    case "green":
      greenScene();
      break;
    case "solve":
      solveScene();
      break;
    case "exit":
      exitScene();
      break;
    default:
      break;
  }
}

function startScene() {
  sceneDescription.textContent =
    "You find yourself in a dark whispery forest. You see two paths ahead of you: LEFT and RIGHT.";
  choice1.textContent = "Left";
  choice2.textContent = "Right";
  choice1.addEventListener('click', () => handleChoice("left"));
  choice2.addEventListener('click', () => handleChoice("right"));
}

function leftScene() {
  sceneDescription.textContent =
    "You chose the left path and come across a river. There is a bridge in the distance, but it looks unstable.";
  choice1.textContent = "Cross";
  choice2.textContent = "Swim";
  choice1.addEventListener('click', () => handleChoice("cross"));
  choice2.addEventListener('click', () => handleChoice("swim"));
}

function rightScene() {
  sceneDescription.textContent =
    "You chose the right path and stumble upon an old cabin. The door is slightly opened. What do you want to do?";
  choice1.textContent = "Enter";
  choice2.textContent = "Continue";
  choice1.addEventListener('click', () => handleChoice("enter"));
  choice2.addEventListener('click', () => handleChoice("continue"));
}

function crossScene() {
  sceneDescription.textContent =
    "You cautiously cross the unstable bridge. You notice a treasure chest.";
  choice1.textContent = "Open";
  choice2.textContent = "Leave";
  choice1.addEventListener('click', () => handleChoice("open"));
  choice2.addEventListener('click', () => handleChoice("leave"));
}

function swimScene() {
  sceneDescription.textContent =
    "You bravely attempt to swim across the river. The current is strong, but you manage to reach the other side. However, you encounter a ferocious wild bear!";
  choice1.textContent = "Fight";
  choice2.textContent = "Run";
  choice1.addEventListener('click', () => handleChoice("fight"));
  choice2.addEventListener('click', () => handleChoice("run"));
}

function enterScene() {
  sceneDescription.textContent =
    "You cautiously enter the cabin and discover a mysterious room. There are three doors in front of you: RED, BLUE, and GREEN.";
  choice1.textContent = "Red";
  choice2.textContent = "Blue";
  choice1.addEventListener('click', () => handleChoice("red"));
  choice2.textContent = "Green";
  choice2.id = "choice3";
  choice2.addEventListener('click', () => handleChoice("blue"));
  const choice3 = document.getElementById("choice3");
  if (choice3) {
    choice3.addEventListener('click', () => handleChoice("green"));
  } else {
    const choice3 = document.createElement("button");
    choice3.id = "choice3";
    choice3.textContent = "Green";
    choice3.addEventListener('click', () => handleChoice("green"));
    document.body.appendChild(choice3);
  }
}

function continueScene() {
  sceneDescription.textContent =
    "You decide to continue on your path, leaving the cabin behind. You encounter a group of friendly travelers who guide you through the forest. They lead you to a hidden treasure. You win!";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function openScene() {
  sceneDescription.textContent =
    "Congratulations! You found a hidden treasure. You win! 🎉";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function leaveScene() {
  sceneDescription.textContent =
    "You decide to leave the chest and continue your journey. You come across a group of friendly travelers who guide you back to safety. You win! 🎉";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function fightScene() {
  sceneDescription.textContent =
    "You valiantly fight the bear, but unfortunately, it overpowers you. Game over! 😒";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function runScene() {
  sceneDescription.textContent =
    "You quickly turn and run away from the bear, narrowly escaping its grasp. You find a safe spot to rest and continue your journey. You win! 🎉";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function redScene() {
  sceneDescription.textContent =
    "As you open the red door, you find yourself in a room filled with fire and intense heat. It seems to be a trap! You quickly close the door and rush back to the cabin.";
  currentLocation = "enter";
  render();
}

function blueScene() {
  sceneDescription.textContent =
    "You open the blue door and find yourself in a room full of puzzles and riddles. Solving them will lead you to great rewards.";
  choice1.textContent = "Solve";
  choice2.textContent = "Exit";
  choice1.addEventListener('click', () => handleChoice("solve"));
  choice2.addEventListener('click', () => handleChoice("exit"));
}

function greenScene() {
  sceneDescription.textContent =
    "You open the green door and find yourself in a lush garden. It's a peaceful place, filled with beautiful flowers and singing birds. You feel a sense of tranquility and decide to stay in the garden forever. You win! 🎉";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function solveScene() {
  sceneDescription.textContent =
    "You successfully solve all the puzzles and claim the treasure. Congratulations! You win! 🎉";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

function exitScene() {
  sceneDescription.textContent =
    "You decide to leave the room, but as you do, the door slams shut behind you, trapping you forever. Game over! 😒";
  choice1.style.display = "none";
  choice2.style.display = "none";
}

// handleChoice function
function handleChoice(choice) {
  currentLocation = choice;
  render();
}

// Initial game start
game_start();
