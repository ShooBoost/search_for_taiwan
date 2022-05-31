<template>
  <div>
    <input
      v-model="keywordsForSearching"
      type="text"
      class="searchbox__input"
    >
    <button type="button" class="searchbox__btn" @click="fetchfakeData">
      search
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
      'name'
    ])
  },
  mounted () {
  },
  methods: {
    fetchfakeData () {
      this.searchingResult = 'get it!' + this.keywordsForSearching
    }
  }
}
</script>
