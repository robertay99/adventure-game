# Adventure Game

![Adventure Game Screenshot](./adventure_screenshot.jpg)

## Overview

This adventure game is a text-based interactive journey where players make choices to explore different scenarios. The game's story unfolds based on the player's decisions, leading to different outcomes ranging from success to failure. With each decision, the player is guided through new scenes, which can result in treasure, traps, or even game over.

## Features

- **Interactive Storyline**: The game dynamically changes based on the player's choices.
- **Multiple Endings**: Different paths can lead to winning or losing the game.
- **Scenic Exploration**: Players encounter various environments such as forests, rivers, cabins, and puzzle rooms.
- **Decision-Based Outcomes**: Every choice matters, leading to different game endings.

## How to Play
https://robertay99.github.io/adventure-game/
1. **Starting the Game**: 
   - The game begins in a mysterious forest where players are prompted to make their first choice: to go left or right.
   
2. **Making Choices**: 
   - Players will be given two (or sometimes more) options in each scene. Click the buttons corresponding to your choice to proceed in the game.
   - Each choice leads to a unique scene that progresses the story.

3. **Winning the Game**: 
   - The game has multiple winning outcomes, such as finding a treasure, solving puzzles, or discovering peaceful locations.

4. **Game Over**: 
   - Some choices lead to game-over scenarios, where players may face traps or unbeatable enemies. If you encounter such an outcome, you can restart and try a different path.

## Game Structure

### **State Management**
The game state is tracked by the `currentLocation` variable, which represents the player's current position in the game.

```javascript
let currentLocation = "start";
