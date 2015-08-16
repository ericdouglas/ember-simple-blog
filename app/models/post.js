import DS from 'ember-data';

let {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  author: attr('string'),
  createdDate: attr('date'),
  text: attr('string')
});
