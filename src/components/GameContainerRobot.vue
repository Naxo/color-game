<template>
  <div class="color-game-page ">
      <transition name="fade">
        <div v-if="!delaySelected">
          <p>You can select the delay that the robot will resolve the game. The range is delimited from 0 to 2.8 seconds</p>
          <input type="range" min="0" max="2800" step="100" v-model="delay">
          <button class="button" v-on:click="next">Next</button>
        </div>
        <div v-if="delaySelected">
          <game-step></game-step>
        </div>
      </transition>
  </div>
</template>

<script>
import GameStep from './GameStep'

var interval

export default {
  name: 'GameContainerRobot',
  components: { 'game-step': GameStep },
  data() {
    return {
      delay: 2000,
      delaySelected: false
    }
  },
  methods: {
    next() {
      this.delaySelected = true
      var self = this
      interval = window.setInterval(() => {
        self.$children.map(child => {
          child.$el.querySelectorAll('button').forEach(button => {
            if (
              button.innerText.toLowerCase() ===
              child.$el.querySelector('h1').style.color.toLowerCase()
            ) {
              button.click()
            }
          })
        })
      }, self.delay)
    }
  },
  beforeDestroy() {
    window.clearInterval(interval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type='range'] {
  -webkit-appearance: none;
  width: 70%;
  margin: 18.3px 0;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 70%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type='range']::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #000000;
  height: 45px;
  width: 42px;
  border-radius: 50px;
  background: #e1b981;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -18.5px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type='range']::-moz-range-track {
  width: 70%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type='range']::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #000000;
  height: 45px;
  width: 42px;
  border-radius: 50px;
  background: #e1b981;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 70%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type='range']::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type='range']::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #000000;
  height: 45px;
  width: 42px;
  border-radius: 50px;
  background: #e1b981;
  cursor: pointer;
  height: 8.4px;
}
input[type='range']:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type='range']:focus::-ms-fill-upper {
  background: #367ebd;
}
</style>
