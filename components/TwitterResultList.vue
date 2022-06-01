<template>
  <ul class="twitterlist">
    <TweetCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
    <button v-if="isSameKeywords" type="button" @click="fetchTweets">
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
      'tweetsFromFetching',
      'isTaiwanOnlyShowing',
      'tweetsFromTaiwan',
      'isSameKeywords'
    ]),
    tweets () {
      if (this.isTaiwanOnlyShowing) {
        return this.tweetsFromTaiwan
      } else {
        return this.tweetsFromFetching.data
      }
    }
  },
  mounted () {
    const _this = this
    window.onscroll = function () {
      const twitterlist = document.querySelector('.twitterlist')
      if (window.innerHeight + window.scrollY >= twitterlist.scrollHeight) {
        _this.fetchTweets()
      }
    }
  },
  methods: {
    ...mapActions(['fetchTweets'])
  }
}
</script>
