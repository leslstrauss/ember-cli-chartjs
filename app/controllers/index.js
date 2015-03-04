import Ember from 'ember';

export default Ember.ArrayController.extend({
  name: null,
  score: null,
  actions: {
    createPerson: function () {
      var name = this.store.createRecord('person', {
        name: this.get('name'),
        hobby: this.get('hobby')
      }).save();

      this.setProperties({
        name: null,
        score: null
      });
    }
  }
});

