export default {
  setKeywordsForSearch (state, payload) {
    state.keywordsForSearch = payload
  },
  setIsTaiwanOnlyShowing (state, payload) {
    state.isTaiwanOnlyShowing = payload
  },
  setIsFreeToFetch (state) {
    state.isFreeToFetch = !state.isFreeToFetch
  },
  setIsSameKeywords (state) {
    state.isSameKeywords = state.keywordsForSearch === state.nextPage.keywords
  },
  setNextPage (state) {
    const isSameKeywords = state.isSameKeywords
    const nextPageToken = state.tweetsFromFetching.meta.next_token
    state.nextPage.token = isSameKeywords && nextPageToken ? nextPageToken : ''
    state.nextPage.keywords = state.keywordsForSearch
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
      if (state.isSameKeywords) {
        payload.data = [...state.tweetsFromFetching.data, ...tweets]
        const oldPlaces = state.tweetsFromFetching.includes.places || []
        const nowPlaces = payload.includes.places || []
        payload.includes.places = [...oldPlaces, ...nowPlaces]
      }
    }
    state.tweetsFromFetching = payload
  }
}
