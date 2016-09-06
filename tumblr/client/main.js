Posts = new Mongo.Collection('posts');

/* Posts.insert({link: '', created: new Date(), description: ''}) */

if (Meteor.isClient) {
  Template.posts.helpers({
    posts: function() {
      return Posts.find({}, {sort: {created: -1}});
    }
  });
}

if (Meteor.isServer) {

}
