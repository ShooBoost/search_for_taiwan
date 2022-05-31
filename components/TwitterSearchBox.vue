<template>
  <div>
    <input
      v-model="keywords"
      type="text"
      class="searchbox__input"
    >
    <button type="button" class="searchbox__btn" @click="fetchTweets">
      search
    </button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'TwitterSearchBox',
  computed: {
    ...mapState([
      'keywordsForSearch'
    ]),
    keywords: {
      get () {
        return this.keywordsForSearch
      },
      set (value) {
        this.setKeywordsForSearch(value)
      }
    }
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['setKeywordsForSearch']),
    ...mapActions(['fetchTweets'])
  }
}
</script>
