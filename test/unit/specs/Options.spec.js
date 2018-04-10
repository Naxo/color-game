import Vue from 'vue'
import VueRouter from 'vue-router'
import GameContainer from '@/components/GameContainer'
import Options from '@/components/Options'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Options
    },
    {
      path: '/game',
      component: GameContainer
    }
  ]
})
const Constructor = Vue.extend(Options)
const vm = new Constructor({ router }).$mount()

describe('Options.vue', () => {
  it('should render correct title', done => {
    router.push('/')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h1').textContent).to.equal('Color Game')
      done()
    })
  })
  it('sets the correct default data', () => {
    const defaultData = Options.data()
    expect(defaultData.title).to.equal('Color Game')
  })
  it('correctly sets the message when created', () => {
    expect(vm.title).to.equal('Color Game')
  })
})
