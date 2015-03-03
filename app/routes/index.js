import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('person');
  },

  actions: {
    creatPerson: function() {
      this.stroe.createRecord('person', {
        name: this.get('name'),
        hobby: this.get('hobby')
      }).save();

    }
  }
});

export default IndexRoute;

