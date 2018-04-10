
# Color Game

Color Game is a great game to keep your mind sharp. The instructions of the game are as follows: You need to select the color of the word, not the text of the word itself. You have only 2.8 seconds to decide the right answer for each screen. There are 10 tests, so the game only takes less than 28 seconds. The last screen will show your score.

All scores are saved on your browser. If you want to reset the stats, you only need to click on reset stats.

## Develop and build environment

This application has been created and build with vue-cli tool. vue-cli and the rest of tools work with node.js and npm.

To install node and nvm I selected nvm for windows:
https://github.com/coreybutler/nvm-windows

But you can use nvm for Mac/Linux:
https://github.com/creationix/nvm


## Installation/ Build

Vue-cli creates a direct environment to develop. It adds on package.json all scripts to develop, unit-test and build aplication.
To start the final application execute this commands

```sh
cd app-folder
npm install
npm run serve

```
npm install: Retrieve all dependencies
npm run serve: Execute the production build and launch a node server with the build result

The web server will start at *localhost:8080*. Please, open a browser and access to that url. Then you can start to play.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit
```

## Framework and libraries

### Vuejs
Vuejs is an open-source Javascript framework. It is based on components structure that allow a incrementally design.

- CSS
Vuejs is a good framework to work with plain css but if your preffer work withs sass or scss, add lang="scss" on style tag.

Each component has a style block. If you add "scoped" property, the css is only applied on the current component. In any other case it is added as global selector.

### Vuejs-router
Color game is designed as a Single-Page Application (SPA) and with vuejs router this is very easy

### Vuejs-chart and Chart.js
To print complex charts vuejs has vuejs-chart. The charts are customizables.

## The game
- Play
You can play a game. It will started after you click on play button. After this you have 2.8 seconds per step to resolve properly all secuences.
The final score is the average between all scores on one game. If you can not check any color, the score in that step is zero.
- Robot play
You should select the delay time. By default the delay has 2 seconds, to facilitate viewing result. The delay is selected with a range component. The minimum value is zero and the maximum 2.8 seconds.
- Settings
You can select the level of the dificult. By default the level is medium.
Easy: Range of colors is 5 and the time to resolve is 3.2 seconds
Medium: Range of colors is 10 and the time to resolve is 2.8 seconds
Hard: Range of colors is 15 and the time to resolve is 2.2 seconds
- Reset stats
It cleans history scores it saved on local storage.
- Local Storage
This game works with local storage to save settings and score history. Yo can close the page and when you return, you will available all this information.


## Future improvements
- e2e test.
- Error handling.
- Cache and service worker to offline first design.
- Better responsive design.