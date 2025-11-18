<template>
    <article class="post">
            <div class="post-header">
                <img src="res/images/icon.jpg" alt="user" class="user">
                <p class="date">{{ post.date }}</p>
            </div>
            <img v-if="post.image" :src="post.image" class="image">
            <p class="message">{{ post.message }}</p>
            <div class="like-text">
                <img @click="likePost" src="res/images/like.svg" alt="like" class="like"/>
                <p>{{ post.likes }} likes</p>
            </div>
           
        </article>
</template>

<script>

export default {
    props: {
        postId: {
            type: Number,
            required: true
        }
    },
    computed: {
        post() {
            return this.$store.getters.getPostById(this.postId);
        }
    },
    methods: {
        likePost() {
            this.$store.commit("LIKE_POST", this.post.id);
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

.post {
    background-color: #d3d3d3;
    border-radius: 10px;
    padding: 8px;
}

.post > div { 
    display: flex;
    justify-content: space-between;
}

.user {
    width: 2em;
    height: 2em;
    border-radius: 5px;
}

main > article > div > p {
    font-size: 14px;
}

.image {
    width: 100%;
    height: auto;
    margin: 0;
}

.message {
    padding-left: 3px;
    margin: 0px, 5px;
    text-align: left;
}

.like {
    width: 2em;
    height: 2em;
    margin-left: 3px;
}

</style>