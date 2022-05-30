import { mount } from '@vue/test-utils'
import TwitterSearchBox from '@/components/TwitterSearchBox.vue'

describe('TwitterSearchBox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TwitterSearchBox)
    expect(wrapper.vm).toBeTruthy()
  })
  test('input initial to be empty', () => {
    const wrapper = mount(TwitterSearchBox)
    expect(wrapper.vm.keywordsForSearching).toBe('')
  })
  test('taping in input will change keywordsForSearching', () => {
    const wrapper = mount(TwitterSearchBox)
    wrapper.find('.searchbox__input').setValue('生煎包')
    expect(wrapper.vm.keywordsForSearching).toBe('生煎包')
  })
  test('click search button will change searchingResult', () => {
    const wrapper = mount(TwitterSearchBox)
    wrapper.find('.searchbox__input').setValue('生煎包')
    wrapper.find('.searchbox__btn').trigger('click')
    expect(wrapper.vm.searchingResult).toBe('get it!生煎包')
  })
})
