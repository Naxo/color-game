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
  window.localStorage.setItem('scoreHistory', JSON.stringify([2, 4, 2, 10, 6]))
})
describe('GameStep.vue', () => {
  it('should render correct title', done => {
    router.push('game')
    Vue.nextTick(() => {
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
    expect(defaultData.initialColors.length).to.equal(6)
    expect(defaultData.interval).to.equal(0)
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
  it('Suffle method returns a array with ', () => {
    router.push('game')
    Vue.nextTick(() => {
      let array = [0, 1, 2, 3]
      let result = vm.shuffle([0, 1, 2, 3])
      expect(array.length).to.equal(result.length)
    })
  })
  it('After reinit the remaining time is 2800 miliseconds', () => {
    router.push('game')
    Vue.nextTick(() => {
      vm.time = 0
      vm.reInit()
      expect(vm.time).to.equal(2800)
    })
  })
  it('Random function returns a value between 1 and 5', () => {
    router.push('game')
    Vue.nextTick(() => {
      let random = vm.random()
      expect(random).to.not.equal(6);
      expect(random).to.not.equal(0);
    })
  })
  it('should render correct title', done => {
    router.push('game')
    Vue.nextTick(() => {
      expect(vm.interval).to.not.equal(0);
      done()
    })
  })
})
