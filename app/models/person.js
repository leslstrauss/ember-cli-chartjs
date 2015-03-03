import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hobby: DS.attr('string')
});

Person.reopenClass({
  FIXTURES: [
  {
    id: "1",
    name: 'Leslie',
    hobby: 'dancing'
  }, {
    id: "2",
    name: 'Nathan',
    hobby: 'clothes'
  }, {
    id: "3",
    name: 'Steven',
    hobby: 'biking'
  }
]});
