import { shallowMount } from '@vue/test-utils'
import TweetCard from '@/components/TweetCard.vue'

describe('TweetCard.vue', () => {
  const propsData = {
    tweet: {
      author_username: '白糖粿',
      id: 'postID',
      profile_image_url: 'https://pbs.twimg.com/profile_images/1066012008187781120/GmiuSZTO_normal.jpg',
      author_name: 'whiteSugar',
      text: 'RT @cwj_dustin: 掰掰台南😊😊 https://t.co/2nIoxzwHuJ',
      created_at: '2022-05-31T09:52:27.000Z'
    }
  }
  const wrapper = shallowMount(TweetCard, { propsData })
  const tweet = wrapper.props('tweet')
  it('href of tweet is made by author_username and id of the tweet', () => {
    expect(wrapper.find('a').attributes('href')).toBe(`https://twitter.com/${tweet.author_username}/status/${tweet.id}`)
  })
  it('img src is made by profile_image_url of the tweet', () => {
    expect(wrapper.find('img').attributes('src')).toBe(tweet.profile_image_url)
  })
  it('h3 is filled with author_name', () => {
    expect(wrapper.find('h3').text()).toBe(tweet.author_name)
  })
  it('first p is filled with tweet text', () => {
    expect(wrapper.findAll('p').at(0).text()).toBe(tweet.text)
  })
  it('first p is filled with created_at', () => {
    expect(wrapper.findAll('p').at(1).text()).toBe(tweet.created_at)
  })
})
