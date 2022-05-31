<template>
  <ul>
    <li v-for="tweet in tweets" :key="tweet.id">
      {{ tweet.text }}
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TwitterSearchBox',
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
