export default {
  apiUrl (state) {
    const nextPageToken = state.nextPage.token
    const nextPageQuery = nextPageToken ? `next_token=${nextPageToken}&` : ''
    return `http://cnekuoli.xyz:8000/2/tweets/search/recent?${nextPageQuery}tweet.fields=created_at&max_results=10&expansions=author_id,geo.place_id&place.fields=country,country_code&user.fields=profile_image_url&query=${state.keywordsForSearch}`
  }
}
