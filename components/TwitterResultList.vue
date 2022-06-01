<template>
  <ul class="twitterlist">
    <TweetCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
    <button type="button" v-if="isSameKeywords" @click="fetchTweets">
      more
    </button>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TwitterResultList',
  computed: {
    ...mapState([
      'tweetsFromFetching', 'isTaiwanOnlyShowing', 'tweetsFromTaiwan', 'isSameKeywords'
    ]),
    tweets () {
      if (this.isTaiwanOnlyShowing) {
        return this.tweetsFromTaiwan
      } else {
        return this.tweetsFromFetching.data
      }
    }
  },
  methods: {
    ...mapActions(['fetchTweets'])
  }
}
</script>
