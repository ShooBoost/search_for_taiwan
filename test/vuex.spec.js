// import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('store/movies', () => {
// ----------------------------------------------------
// focus on the code from here...
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })
  // ...to here is what matters
  // ----------------------------------------------------

  describe('state age', () => {
    let age

    beforeEach(() => {
      age = store.state.age
    })

    test('vuex initail state age is 2', () => {
      expect(age).toBe(2)
    })
  })
})
