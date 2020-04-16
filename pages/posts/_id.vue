<template>
  <section>
    <div>
      <h2>{{post.id}}</h2>
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: ['auth'],
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}) {
      const post = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
      return {post}
    }
  }
</script>
<style scoped>
  div {
    width: 50%;
    margin: 30px auto 0;
    border: 1px solid aliceblue;
    padding: 20px;
  }

  div > h2,
  div > h3 {
    text-align: center;
    margin-bottom: 22px;
  }
</style>
