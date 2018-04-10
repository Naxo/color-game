<template>
  <div v-if="colors.length > 0" class="color-game-page">
    <h1 v-bind:style="{ color: colors[0].hex}">{{ setup.range[randomValue].title }}</h1>
    <div class="group">
      <progress :value="time" :max="setup.time"></progress>
        <div v-if="lt">
        <button class="game-button" v-bind:style="{ 'border-color': colors[1].hex}" v-on:click="pushColor(colors[0].title)">
          {{colors[0].title}}</button>
        <button class="game-button" v-bind:style="{ 'border-color': colors[2].hex}" v-on:click="pushColor(colors[1].title)">
          {{colors[1].title}}</button>
      </div>
      <div v-if="!lt">
        <button class="game-button" v-bind:style="{ 'border-color': colors[1].hex}" v-on:click="pushColor(colors[1].title)">
          {{colors[2].title}}</button>
        <button class="game-button" v-bind:style="{ 'border-color': colors[2].hex}" v-on:click="pushColor(colors[0].title)">
           {{colors[0].title}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  mounted() {
    let level = localStorage.getItem('levelSelected')
    if (level) this.level = level
    let self = this
    self.interval = window.setInterval(function() {
      if (self.time > 0) {
        self.time = self.time - 100
      } else {
        self.score.push(0)
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
      score: [],
      interval: 0,
      randomValue: 0,
      counter: 0,
      level: 'medium',
      setup: {}
    }
  },
  methods: {
    pushColor(color) {
      if (this.colors[0].title === color) {
        let score = Math.round(10 * this.time / 2800) * 10
        this.score.push(score)
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
      if (this.counter >= 10) {
        let scoreHistory = JSON.parse(localStorage.getItem('scoreHistory'))

        if (
          scoreHistory === undefined ||
          scoreHistory === null ||
          scoreHistory.length < 0
        ) {
          scoreHistory = []
        }

        let finalScore =
          this.score.length > 0
            ? this.score.reduce((b, a) => b + a) / this.score.length
            : 0

        scoreHistory[
          scoreHistory.length > 0 ? scoreHistory.length : 0
        ] = finalScore

        localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory))
        this.$router.push('/finishgame')
      }
      this.lt = Math.floor(Math.random() * 2 + 1) === 1
      this.setup = this.getSetup(this.level)
      this.time = this.setup.time
      this.colors = this.shuffle(this.setup.range).slice(0, 3)
      this.counter++
      this.randomValue = this.random()
    },
    getSetup(level) {
      let colors = [
        { title: 'Red', hex: 'red' },
        { title: 'Blue', hex: 'blue' },
        { title: 'Green', hex: 'green' },
        { title: 'Grey', hex: 'grey' },
        { title: 'Orange', hex: 'orange' },
        { title: 'Yellow', hex: 'yellow' },
        { title: 'Purple', hex: 'purple ' },
        { title: 'Pink', hex: 'pink' },
        { title: 'Cyan', hex: 'cyan' },
        { title: 'Brown', hex: 'brown' },
        { title: 'Olive', hex: 'olive' },
        { title: 'Lime', hex: 'lime' },
        { title: 'Khaki', hex: 'khaki' },
        { title: 'Coral', hex: 'Coral' },
        { title: 'Tomato', hex: 'tomato' }
      ]
      let setup
      switch (level) {
        case 'easy':
          setup = { range: colors.slice(0, 5), time: 3200 }
          break
        case 'medium':
          setup = { range: colors.slice(0, 10), time: 2800 }
          break
        case 'hard':
          setup = { range: colors, time: 2200 }
          break
        default:
          setup = { range: colors.slice(0, 10), time: 2800 }
          break
      }
      return setup
    },
    random() {
      var num = Math.floor(Math.random() * this.setup.range.length)
      return num === 0 ? this.random() : num
    }
  },
  beforeDestroy() {
    this.time = 2800
    this.counter = 0
    window.clearInterval(this.interval)
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
