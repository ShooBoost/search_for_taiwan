import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      keywordsForSearch: '',
      tweetsFromFetching: { meta: {} },
      tweetsFromTaiwan: [],
      isTaiwanOnlyShowing: false,
      nextPage: { keywords: '', token: '' }
    },
    getters: {
      apiUrl (state) {
        const nextPageToken = state.nextPage.token
        const nextPageQuery = nextPageToken ? `next_token=${nextPageToken}&` : ''
        return `http://cnekuoli.xyz:8000/2/tweets/search/recent?${nextPageQuery}tweet.fields=created_at&max_results=100&expansions=author_id,geo.place_id&place.fields=country,country_code&user.fields=profile_image_url&query=${state.keywordsForSearch}`
      }
    },
    mutations: {
      setKeywordsForSearch (state, payload) {
        state.keywordsForSearch = payload
      },
      setIsTaiwanOnlyShowing (state, payload) {
        state.isTaiwanOnlyShowing = payload
      },
      setNextPage (state) {
        const isSameKeywords = state.keywordsForSearch === state.nextPage.keywords
        const nextPageToken = state.tweetsFromFetching.meta.next_token
        state.nextPage.token = isSameKeywords && nextPageToken ? nextPageToken : ''
        state.nextPage.keywords = state.keywordsForSearch
        console.log(state.nextPage)
      },
      setTweetsFromTaiwan (state) {
        let tweetsFromTaiwan = []
        const tweetsInfo = state.tweetsFromFetching.includes
        const places = tweetsInfo ? state.tweetsFromFetching.includes.places : null
        if (places) {
          places.forEach((place) => {
            if (place.country_code === 'TW') {
              const taiwanTweet = state.tweetsFromFetching.data.filter((tweet) => {
                return tweet.geo && tweet.geo.place_id === place.id
              })
              tweetsFromTaiwan = tweetsFromTaiwan.concat(taiwanTweet)
            }
          })
        }
        state.tweetsFromTaiwan = tweetsFromTaiwan
        // console.log('setTweetsFromTaiwan', state.tweetsFromTaiwan)
      },
      setTweetsFromFetching (state, payload) {
        const tweets = payload.data
        if (tweets) {
          tweets.forEach((tweet) => {
            const author = payload.includes.users.find((user) => {
              return user.id === tweet.author_id
            })
            tweet.author_name = author.name
            tweet.author_username = author.username
            tweet.profile_image_url = author.profile_image_url
          })
        } state.tweetsFromFetching = payload
        // console.log('setTweetsFromFetching', state.tweetsFromFetching)
      }
    },
    actions: {
      async fetchTweets (context) {
        if (context.state.keywordsForSearch.trim()) {
          const token = process.env.token
          context.commit('setNextPage')
          try {
            const res = await this.$axios.$get(`${context.getters.apiUrl}`, {
              headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('fetchTweets', await res)
            await context.commit('setTweetsFromFetching', res)
            await context.commit('setTweetsFromTaiwan')
          } catch (err) {
            console.log(err)
          }
        }
      }
    },
    modules: {
    }
  })
}

export default createStore
