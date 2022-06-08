import mutations from '../store/mutations'
import '@vue/test-utils'

describe('mutations test', () => {
  const state = {
    keywordsForSearch: ''
  }
  it('setKeywordsForSearch can set keywords', () => {
    mutations.setKeywordsForSearch(state, 666)
    expect(state.keywordsForSearch).toBe(666)
  })
})
