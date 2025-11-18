<template>
  <body>
    <section class="bars">
      <aside class="sidebar"></aside>
      <main>
        <Post v-for="post in posts" :key="post.id" :postId="post.id"/>
        <button class="reset-btn" @click="resetLikes">Reset likes</button>
      </main>
      <aside class="sidebar"></aside>
    </section>
  </body>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "../components/BlogPost.vue";
export default { 
  name: "MainView",
  components: { Post },
  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    }
  },
  methods: {
    resetLikes() {
      this.$store.commit("RESET_LIKES");
    }
  }
};
</script>

<style scoped>
* {
    font-family: monospace;
    font-size: 17px;
    box-sizing: border-box;
}

body {
    line-height: 1.6;
    margin: 0;
}

.bars {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.sidebar {
    width: 200px;
    background-color: #bfbfbf;
    margin: 3px;
    border-radius: 10px;
}

main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 3px;
}

@media (max-width: 600px) {
    .sidebar {
        display: none;
    }
    #header {
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .nav {
        flex-direction: column;
        gap: 10px;
    }
    main {
        margin: 10px;
    }
}

.reset-btn {
  max-width: 150px;
  height: 35px;
  align-content: center;
  margin: auto;
  border-radius: 5px;
  background-color: rgb(36, 147, 202);
  border: 0;
}

.reset-btn:hover {
  background-color: rgb(43, 177, 244);
}
</style>