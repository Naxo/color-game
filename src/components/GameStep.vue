<template>
  <div v-if="colors.length > 0" class="color-game-page ">
    <h1 v-bind:style="{ color: colors[0].hex}">{{ initialColors[getRandom].title }}</h1>
    <div class="group">
      <progress :value="time" max="2800"></progress>
      <div v-if="lt">
        <button class="game-button" v-bind:style="{ 'border-color': colors[1].hex}" v-on:click="pushColor(colors[0].title)">
          {{colors[0].title}}</button>
        <button class="game-button" v-bind:style="{ 'border-color': colors[2].hex}" v-on:click="pushColor(colors[1].title)">
          {{colors[1].title}}</button>
      </div>
      <div v-if="!lt">
        <button class="game-button" v-bind:style="{ 'border-color': colors[2].hex}" v-on:click="pushColor(colors[1].title)">
          {{colors[1].title}}</button>
        <button class="game-button" v-bind:style="{ 'border-color': colors[1].hex}" v-on:click="pushColor(colors[0].title)">
           {{colors[0].title}}</button>
      </div>
    </div>
  </div>
</template>

<script>
let count = 0
let interval = 0

export default {
  name: 'Game',
  mounted() {
    let self = this
    interval = window.setInterval(function() {
      if (self.time > 0) {
        self.time = self.time - 100
      } else {
        self.reInit()
      }
    }, 100)
    this.reInit()
  },
  data() {
    return {
      time: 2800,
      colors: [],
      lt: true,
      score: 0,
      initialColors: [
        { title: 'Red', hex: 'red' },
        { title: 'Blue', hex: 'blue' },
        { title: 'Green', hex: 'green' },
        { title: 'Grey', hex: 'grey' },
        { title: 'Yellow', hex: 'yellow' },
        { title: 'Orange', hex: 'orange' }
      ]
    }
  },
  methods: {
    pushColor(color) {
      if (this.colors[0].title === color) {
        this.score++
      }
      this.reInit()
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    reInit() {
      if (count >= 10) {
        let scoreHistory = JSON.parse(localStorage.getItem('scoreHistory'))

        if (
          scoreHistory === undefined ||
          scoreHistory === null ||
          scoreHistory.length < 0
        ) {
          scoreHistory = []
        }

        scoreHistory[
          scoreHistory.length > 0 ? scoreHistory.length : 0
        ] = this.score

        localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory))
        this.$router.push('/finishgame')
      }
      this.time = 2800
      this.lt = Math.floor(Math.random() * 2 + 1) === 1
      this.colors = this.shuffle(this.initialColors).slice(0, 3)
      count++
    }
  },
  computed: {
    getRandom() {
      var num = Math.floor(Math.random() * 6)
      return num === 0 ? this.getRandom() : num
    }
  },
  beforeDestroy() {
    this.time = 2800
    count = 0
    window.clearInterval(interval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-button {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0px;
  font-family: Arial;
  color: #000000;
  font-size: 20px;
  padding: 0.5rem;
  margin: 1rem;
  border: solid 5px;
  text-decoration: none;
  background-color: white;
  width: 30%;
}

.game-button:hover {
  text-decoration: none;
}
</style>
