// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'
const store = {
  state () {
    return {
      keywordsForSearch: '',
      tweetsFromFetching: { meta: {} },
      tweetsFromTaiwan: [],
      isTaiwanOnlyShowing: false,
      nextPage: { keywords: '', token: '' },
      isSameKeywords: false,
      isFreeToFetch: true
    }
  }
  // getters,
  // mutations,
  // actions
}

export default store
