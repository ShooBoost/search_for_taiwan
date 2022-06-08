export default {
  async fetchTweets (context) {
    const isFreeToFetch = context.state.isFreeToFetch
    const isKeywordsExist = context.state.keywordsForSearch.trim()
    if (isFreeToFetch && isKeywordsExist) {
      const token = process.env.token
      context.commit('setIsFreeToFetch')
      context.commit('setIsSameKeywords')
      context.commit('setNextPage')
      try {
        const res = await this.$axios.$get(`${context.getters.apiUrl}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        await context.commit('setTweetsFromFetching', res)
        await context.commit('setTweetsFromTaiwan')
        context.commit('setIsSameKeywords')
        setTimeout(() => { context.commit('setIsFreeToFetch') }, 3000)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
