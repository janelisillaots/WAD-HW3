<template>
  <div class="posts">
    <Post v-for="post in posts" :key="post.id" :postId="post.id"/>
  </div>
  <button @click="resetLikes">Reset likes</button>
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
