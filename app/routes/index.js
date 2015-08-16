import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      data: this.store.findAll('post'),
      post: {}
    }
  },

  actions: {
    createPost(info) {
      let newPost = this.store.createRecord('post', {
        title: info.title,
        text: info.text,
        author: info.author,
        createdDate: new Date()
      });

      newPost.save();
    }
  }
});
