<template>
  <div class="searchbox">
    <input
      v-model="keywords"
      type="text"
      class="searchbox__input"
    >
    <button type="button" class="searchbox__btn" @click="search">
      search
    </button>
    <input id="searchbox__checkbox" v-model="isTaiwan" type="checkbox" class="searchbox__checkbox">
    <label for="searchbox__checkbox" class="searchbox__checklabel" /> 只顯示台灣地區推文
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'TwitterSearchBox',
  computed: {
    ...mapState([
      'keywordsForSearch', 'isTaiwanOnlyShowing', 'nextPage'
    ]),
    keywords: {
      get () {
        return this.keywordsForSearch
      },
      set (value) {
        this.setKeywordsForSearch(value)
      }
    },
    isTaiwan: {
      get () {
        return this.isTaiwanOnlyShowing
      },
      set (value) {
        this.setIsTaiwanOnlyShowing(value)
      }
    }
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['setKeywordsForSearch', 'setIsTaiwanOnlyShowing']),
    ...mapActions(['fetchTweets']),
    search () {
      const isNewKeywords = this.keywords !== this.nextPage.keywords
      if (isNewKeywords) {
        this.fetchTweets()
      }
    }
  }
}
</script>
