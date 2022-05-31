import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      keywordsForSearch: '',
      tweetsFromFetching: []
    },
    getters: {
      apiUrl (state) {
        return `http://cnekuoli.xyz:8000/2/tweets/search/recent?max_results=30&expansions=author_id,geo.place_id&place.fields=country,country_code&user.fields=profile_image_url&query=${state.keywordsForSearch}`
      }
    },
    mutations: {
      setKeywordsForSearch (state, payload) {
        state.keywordsForSearch = payload
      },
      setTweetsFromFetching (state, payload) {
        payload.data.forEach((tweet) => {
          const author = payload.includes.users.find((user) => {
            return user.id === tweet.author_id
          })
          tweet.author_name = author.name
          tweet.author_username = author.username
          tweet.profile_image_url = author.profile_image_url
        })
        state.tweetsFromFetching = payload.data
        // console.log('setTweetsFromFetching', state.tweetsFromFetching)
      }
    },
    actions: {
      async fetchTweets (context) {
        if (context.state.keywordsForSearch.trim()) {
          const token = process.env.token
          try {
            const res = await this.$axios.$get(`${context.getters.apiUrl}`, {
              headers: { Authorization: `Bearer ${token}` }
            })
            context.commit('setTweetsFromFetching', await res)
            // console.log('fetchTweets', await res)
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
