<template>
  <a :href="`https://twitter.com/${tweet.author_username}/status/${tweet.id}`" class="tweetcard tweetcard--dark" target="_blank">
    <img :src="tweet.profile_image_url" :alt="tweet.author_name" class="tweetcard__img">
    <div class="tweetcard__info">
      <h3>{{ tweet.author_name }}</h3>
      <p>{{ tweet.text }}</p>
      <p>{{ tweet.created_at }}</p>
    </div>
  </a>
</template>
<script>
export default {
  name: 'TweetCard',
  props: ['tweet']
}
</script>
