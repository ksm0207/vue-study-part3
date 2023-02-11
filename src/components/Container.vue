<template>
  <Post :instagram="this.instagram" />
</template>

<script>

import Post from '../components/Post.vue'

export default {
  data() {
    return {
      return: {}
    }
  },
  props : {
    instagram : Object
  },
  components : {
    Post
  },
  mounted() {

  }


}

</script>

<style scoped>

</style>