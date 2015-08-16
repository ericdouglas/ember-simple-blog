import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(post) {
      this.sendAction('createPost', post);
      this.set('post', {});
    }
  }
});
