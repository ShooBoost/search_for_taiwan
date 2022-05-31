<template>
  <ul>
    <li v-for="tweet in tweets" :key="tweet.id">
      <!-- {{ tweet.text }} -->
      <TweetCard :tweet="tweet" />
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TwitterResultList',
  computed: {
    ...mapState([
      'tweetsFromFetching', 'isTaiwanOnlyShowing', 'tweetsFromTaiwan'
    ]),
    tweets () {
      if (this.isTaiwanOnlyShowing) {
        return this.tweetsFromTaiwan
      } else {
        return this.tweetsFromFetching.data
      }
    }
  }
}
</script>
