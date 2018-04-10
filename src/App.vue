<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import Options from './components/Options'
import GameContainer from './components/GameContainer'
import GameContainerRobot from './components/GameContainerRobot'
import Settings from './components/Settings'
import FinishGame from './components/FinishGame'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Options
  },
  {
    path: '/botgame',
    component: GameContainerRobot
  },
  {
    path: '/game',
    component: GameContainer
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/finishgame',
    component: FinishGame
  }
]

const router = new VueRouter({
  routes
})

export default {
  render: h => h(this),
  router: router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

.group {
  display: block;
  text-align: center;
}

.button {
  background: #cc2576;
  background-image: -webkit-linear-gradient(top, #cc2576, #2980b9);
  background-image: -moz-linear-gradient(top, #cc2576, #2980b9);
  background-image: -ms-linear-gradient(top, #cc2576, #2980b9);
  background-image: -o-linear-gradient(top, #cc2576, #2980b9);
  background-image: linear-gradient(to bottom, #cc2576, #2980b9);
  -webkit-border-radius: 25;
  -moz-border-radius: 25;
  border-radius: 25px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  min-width: 50%;
  margin: 0.5rem 0.5rem;
  border: 0;
}

.button:hover {
  background: #db2c83;
  background-image: -webkit-linear-gradient(top, #db2c83, #801148);
  background-image: -moz-linear-gradient(top, #db2c83, #801148);
  background-image: -ms-linear-gradient(top, #db2c83, #801148);
  background-image: -o-linear-gradient(top, #db2c83, #801148);
  background-image: linear-gradient(to bottom, #db2c83, #801148);
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  /* Styles */
  button,
  progress {
    width: 80% !important;
    min-width: 80% !important;
  }
  .group {
    width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  /* Styles */
  button,
  progress {
    width: 432px !important;
    min-width: 432px !important;
  }
  .group {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
