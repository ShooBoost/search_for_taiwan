import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TwitterSearchBox from '@/components/TwitterSearchBox.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('TwitterSearchBox.vue', () => {
  let state
  let mutations
  let actions
  let store
  beforeEach(() => {
    state = {
      keywordsForSearch: '',
      isSameKeywords: false
    }
    mutations = {
      setKeywordsForSearch: jest.fn(),
      setIsTaiwanOnlyShowing: jest.fn()
    }
    actions = {
      fetchTweets: jest.fn()
    }
    store = new Vuex.Store({
      state,
      mutations,
      actions
    })
  })
  it('initial keywords is empty', () => {
    const wrapper = shallowMount(TwitterSearchBox, { store, localVue })
    expect(wrapper.vm.keywords).toBe('')
  })
  it('initial input is empty', () => {
    const wrapper = shallowMount(TwitterSearchBox, { store, localVue })
    expect(wrapper.find('.searchbox__input').text()).toBe('')
  })
  it('typing in input will commit setKeywordsForSearch', () => {
    const wrapper = shallowMount(TwitterSearchBox, { store, localVue })
    wrapper.find('.searchbox__input').setValue('生煎包')
    expect(mutations.setKeywordsForSearch).toHaveBeenCalled()
  })
  it('click search button will dispatches "fetchTweets"', () => {
    const wrapper = shallowMount(TwitterSearchBox, { store, localVue })
    const searchBtn = wrapper.find('.searchbox__btn')
    searchBtn.trigger('click')
    expect(actions.fetchTweets).toHaveBeenCalled()
  })
  it('click taiwanOnly checkbox will commit "setIsTaiwanOnlyShowing"', () => {
    const wrapper = shallowMount(TwitterSearchBox, { store, localVue })
    const searchBtn = wrapper.find('.searchbox__checkbox')
    searchBtn.setChecked()
    expect(mutations.setIsTaiwanOnlyShowing).toHaveBeenCalled()
  })
})
