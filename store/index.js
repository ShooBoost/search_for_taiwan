import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      keywordsForSearch: ''
    },
    getters: {
      apiUrl (state) {
        return `https://api.twitter.com/2/tweets/search/recent?max_results=30&expansions=author_id,geo.place_id&place.fields=country,country_code&user.fields=profile_image_url&query=${state.keywordsForSearch}`
      }
    },
    mutations: {
      setKeywordsForSearch (state, payload) {
        state.keywordsForSearch = payload
      }
    },
    actions: {
    },
    modules: {
    }
  })
}

export default createStore
