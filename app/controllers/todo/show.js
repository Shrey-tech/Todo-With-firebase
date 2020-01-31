import Controller from '@ember/controller';
import {
  computed
} from "@ember/object";

export default Controller.extend({
  newComment: "",
  enableCommentSubmit: computed.empty("newComment"),
  actions: {
    createComment(todo_id) {
      const body = this.get('newComment');
      let comment = this.store.createRecord('comment', {
        id: 1,
        todo: this.store.peekRecord("todo", todo_id),
        body: body
      });
      comment.save();
      this.set('newComment', '');
    }
  }
});
