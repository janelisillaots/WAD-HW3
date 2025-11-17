import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
    {id: 1, author: "John Doe", date:"Oct 22, 2024", message: "Tartu 2024", image: "res/images/tartu.jpg", likes: 0},
    {id: 2, author: "Katie Smith", date:"Sept 25, 2024", message: "Anyone knows in which room the lab is today?", likes: 0},
    {id: 3, author: "Olivia Moore", date:"Sept 1, 2024", message: "Happy new academic year to all fellow students! Be sure to make most of every given oportunity", likes: 0},
    {id: 4, author: "Alex Andrews", date:"Aug 19, 2024", message: "A beautiful August sunset in Tartu", image: "res/images/sunset.jpg", likes: 0},
    {id: 5, author: "Laura White", date:"Aug 16, 2024", message: "Make sure to enjoy the last weeks of summer.", likes: 0},
    {id: 6, author: "Maddison Cooper", date:"Aug 12, 2024", message: "Sunny summer morning:)", image: "res\\images\\summermorning.jpg", likes: 0},
    {id: 7, author: "Tom Johnson", date:"Aug 1, 2024", message: "Looking for teammates for a software project.", likes: 0},
    {id: 8, author: "Emily Brown", date:"July 10, 2024", message: "Finished my first Java project!", likes: 0},
    {id: 9, author: "Sarah Wilson", date:"June 30, 2024", message: "Nothing better than a long walk in nature", image: "res/images/nature.jpg", likes: 0},
    {id: 10, author: "David King", date:"June 15, 2024", message: "All exams finished for this year!", likes: 0}
    ]
  },
  getters: {
    allPosts: state => state.posts,
    getPostById: state => id => state.posts.find(p => p.id === id)
  },
  mutations: {
    LIKE_POST(state, postId) {
      const post = state.posts.find(p => p.id === postId);
      if (post) post.likes++;
    },
    RESET_LIKES(state) {
      state.posts.forEach(p => (p.likes = 0));
    }
  },
  actions: {},
  modules: {},
});
