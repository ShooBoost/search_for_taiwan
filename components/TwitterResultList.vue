<template>
  <div />
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'TwitterSearchBox',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'tweetsFromFetching', 'isTaiwanOnlyShowing'
    ]),
    ...mapGetters([
      ''
    ])
    // tweets () {
    //   if (this.isTaiwanOnlyShowing) {
    //     return this.tweetsFromFetching.filter()
    //   } else {
    //     return this.tweetsFromFetching
    //   }
    // }
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['']),
    ...mapActions([''])
  }
}
</script>
