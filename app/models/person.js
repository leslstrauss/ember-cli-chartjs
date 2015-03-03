import DS from 'ember-data';

var Person = DS.Model.extend({
  name: DS.attr('string'),
  hobby: DS.attr('string')
});

Person.reopenClass({
  FIXTURES: [{
    id: "1",
    name: 'leslie',
    hobby: 'dancing'
  }, {
    id: "2",
    name: 'nathan',
    hobby: 'traveling'
  }]
});

export default Person;
