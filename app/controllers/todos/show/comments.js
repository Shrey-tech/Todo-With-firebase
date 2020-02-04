import Controller from '@ember/controller';
import {
  computed
} from "@ember/object";

export default Controller.extend({
  newComment: "",
  enableCommentSubmit: computed.empty("newComment"),
  actions: {
    createComment(todo) {
      const body = this.get('newComment');
      console.log("h", todo)
      let params = {

        todoId: todo.id,
        body: body,
        id: this.get('model.comments.length') + 1

      }
      let comment = this.store.createRecord('comment', params);
      comment.save();
      this.set('newComment', '');
    },
    removeComment(comment) {
      comment.deleteRecord();
      comment.save();
    }
  }
});
