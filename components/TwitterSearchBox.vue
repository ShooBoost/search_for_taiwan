<template>
  <div>
    <input
      v-model="keywords"
      type="text"
      class="searchbox__input"
    >
    <button type="button" class="searchbox__btn" @click="fetchfakeData">
      search
    </button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'TwitterSearchBox',
  data () {
    return {
      keywordsForSearching: '',
      searchingResult: []
    }
  },
  computed: {
    ...mapState([
      'keywordsForSearch'
    ]),
    ...mapGetters([
      ''
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
    fetchfakeData () {
      this.searchingResult = 'get it!' + this.keywordsForSearching
    }
  }
}
</script>
