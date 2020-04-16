<template>
  <div class="m-4">
    <ul>
      <li :key="post.id" v-for="post of posts">
        <span>{{post.title}}</span>
        <button @click.prevent="openUser(post)" class="btn-primary btn">Post</button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    middleware: ['auth'],
    async fetch({store}) {
      if (store.getters['posts/getPosts'].length === 0) {
        await store.dispatch('posts/fetch')
      }
    },
    computed: {
      posts() {
        return this.$store.getters['posts/getPosts']
      }
    },
    methods: {
      openUser(post) {
        this.$router.push('/posts/' + post.id)
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    margin-top: 20px;
  }

  button {
    margin-left: 20px;
    padding: 3px 15px;

  }
</style>

