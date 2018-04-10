import Vue from 'vue'
import VueRouter from 'vue-router'
import FinishGame from '@/components/FinishGame'
import GameStep from '@/components/GameStep'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/game',
      component: GameStep
    },
    {
      path: '/finishgame',
      component: FinishGame
    }
  ]
})
const Constructor = Vue.extend(GameStep)
const vm = new Constructor({ router }).$mount()

beforeEach(function () {
  window.localStorage.clear()
  window.localStorage.setItem('scoreHistory', JSON.stringify([20, 40, 20, 100, 60]))
})
describe('GameStep.vue', () => {
  it('should render correct title', done => {
    router.push('game')
    Vue.nextTick(() => {
      // eslint-disable-next-line no-unused-expressions
      expect(vm.$el.querySelector('h1').style.color).not.to.be.null
      done()
    })
  })
  it('sets the correct default data', () => {
    const defaultData = GameStep.data()
    expect(defaultData.time).to.equal(2800)
    expect(defaultData.colors.length).to.equal(0)
    expect(defaultData.lt).to.equal(true)
    expect(defaultData.score.length).to.equal(0)
    expect(defaultData.setup).to.be.an('object')
    expect(defaultData.level).to.equal('medium')
  })
  it('Push Color method with valid color increment score length', () => {
    router.push('game')
    Vue.nextTick(() => {
      let scoreLength = vm.score.length
      vm.pushColor(vm.colors[0].title)
      expect(vm.score.length).to.equal(scoreLength + 1)
    })
  })
  it('Push Color method with invalid color increment score length', () => {
    router.push('game')
    Vue.nextTick(() => {
      let scoreLength = vm.score.length
      vm.pushColor(vm.colors[1].title)
      expect(vm.score.length).to.equal(scoreLength)
    })
  })
  it('Suffle method returns a array with the same length', () => {
    router.push('game')
    Vue.nextTick(() => {
      let array = [0, 1, 2, 3]
      let result = vm.shuffle([0, 1, 2, 3])
      expect(array.length).to.equal(result.length)
    })
  })
  it('After reinit with medium level selected the remaining time is the setup time miliseconds', () => {
    router.push('game')
    Vue.nextTick(() => {
      vm.time = 0
      vm.reInit()
      expect(vm.time).to.equal(vm.setup.time)
    })
  })
  it('After reinit with easy level selected the remaining time is the setup time miliseconds', () => {
    router.push('game')
    Vue.nextTick(() => {
      vm.time = 0
      vm.level = 'easy'
      vm.reInit()
      expect(vm.time).to.equal(vm.setup.time)
    })
  })
  it('Random function returns a value between 1 and setup.range length ', () => {
    router.push('game')
    Vue.nextTick(() => {
      let random = vm.random()
      expect(random).to.not.equal(vm.setup.range.length + 1)
      expect(random).to.not.equal(0)
    })
  })
  it('Function getSetup return the correct setup', () => {
    router.push('game')
    Vue.nextTick(() => {
      let setup = vm.getSetup('easy')
      expect(setup.range.length).to.equal(5)
      expect(setup.time).to.equal(3200)
      setup = vm.getSetup('medium')
      expect(setup.range.length).to.equal(10)
      expect(setup.time).to.equal(2800)
      setup = vm.getSetup('hard')
      expect(setup.range.length).to.equal(15)
    })
  })
  it('After init component interval value is not Zero', done => {
    router.push('game')
    Vue.nextTick(() => {
      expect(vm.interval).to.not.equal(0)
      done()
    })
  })
})
