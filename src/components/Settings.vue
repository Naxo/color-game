<template>
    <div class="color-game-page">
     <h1>{{title}}</h1>
     <div class="group">
        <div>
          <input type="radio" value="easy" id="easy" name="easy" v-model="levelSelected" :checked="levelSelected === 'easy'"> <label for="easy">Easy</label>
          <input type="radio" value="medium" id="medium" name="medium" v-model="levelSelected" :checked="levelSelected === 'medium'"> <label for="easy">Medium</label>
          <input type="radio" value="hard" id="hard" name="hard" v-model="levelSelected" :checked="levelSelected === 'hard'"> <label for="easy">Hard</label>
        </div>
        <router-link to="/" tag="button" class="button">Menu</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  mounted() {
    let level = localStorage.getItem('levelSelected')
    if (level) this.levelSelected = level
  },
  data: () => {
    return {
      title: 'Settings',
      levelSelected: 'medium'
    }
  },
  beforeDestroy() {
    localStorage.setItem('levelSelected', this.levelSelected)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
