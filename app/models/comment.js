import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  todoId: DS.attr('string'),
  todo: DS.belongsTo('todo')
});
