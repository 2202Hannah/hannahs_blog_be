const {
  deleteComment,
  updateCommentVotes
} = require(`../models/comments.model`);

exports.removeComment = (request, response, next) => {
  const { comment_id } = request.params;

  deleteComment(comment_id)
    .then(() => {
      response.status(204).send();
    })
    .catch(err => {
      next(err);
    });
};

exports.patchCommentVotes = (request, response, next) => {
  const { comment_id } = request.params;
  const { inc_votes: votes } = request.body;

  updateCommentVotes(comment_id, votes)
    .then(comment => {
      response.status(200).send({ comment });
    })
    .catch(err => {
      next(err);
    });
};
