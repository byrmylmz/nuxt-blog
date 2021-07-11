<template>
  <Tutorial />
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      posts: state.post.posts,
    }),
  },
}
</script>
