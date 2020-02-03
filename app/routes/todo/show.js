import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    // let todo =  this.store.findRecord('todo', params.todo_id);
    // let comments =  this.store.query("comment", {todoId: todo.id})
    return RSVP.hash({
      todo: this.store.findRecord("todo", params.todo_id),
      comments: this.store.query("comment", { todoId: params.todo_id })
    });
  }
});
