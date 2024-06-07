const db = require(`../db/connection`);

exports.deleteComment = comment_id => {
  return db
    .query(`DELETE FROM comments WHERE comment_id = $1 RETURNING *`, [
      comment_id
    ])
    .then(({ rows }) => {
      if (rows.length === 1) {
        return rows;
      } else {
        return Promise.reject({
          status: 404,
          msg: "comment_id not found in the database"
        });
      }
    });
};

exports.updateCommentVotes = (comment_id, votes = 0) => {
  return db
    .query(
      `UPDATE comments SET votes = votes + $1 WHERE comment_id = $2 RETURNING *`,
      [votes, comment_id]
    )
    .then(({ rows }) => {
      if (rows.length === 1) {
        return rows[0];
      } else {
        return Promise.reject({
          status: 404,
          msg: "comment_id not found in the database"
        });
      }
    });
};
