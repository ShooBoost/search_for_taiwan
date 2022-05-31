<template>
  <ul class="twitterlist">
      <TweetCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
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
