import Route from '@ember/routing/route';
import RSVP from "rsvp";


export default Route.extend({
  model() {
    // debugger
    // let todo =  this.store.findRecord('todo', params.todo_id);
    // let comments =  this.store.query("comment", {todoId: todo.id})
    const id = this.modelFor('todos.show').id;
    return RSVP.hash({
      todo: this.store.findRecord("todo", id),
      comments: this.store.query("comment", {
        todoId: id
      })


    });
    // let todo = this.modelFor('todo');

    // const id = this.modelFor('todos.show').id;

    // return this.store.query("comment", {
    //   todoId: id
    // })
  }
});
