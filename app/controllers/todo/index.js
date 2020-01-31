import Controller from "@ember/controller";
import {
  computed
} from "@ember/object";

export default Controller.extend({
  newTodo: "",
  enableSubmit: computed.empty("newTodo"),
  actions: {
    createTodo() {
      const title = this.get("newTodo");
      const todo = this.store.createRecord("todo", {
        id: this.get("model.length") + 1,
        title: title
      });
      todo.save();
      this.set("newTodo", "");
    },
    removeTodo(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
});
