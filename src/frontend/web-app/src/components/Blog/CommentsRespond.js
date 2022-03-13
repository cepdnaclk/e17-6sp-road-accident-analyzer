import React from "react";

const CommentsRespond = () => (
  <div id="respond" className="comment-respond">
    <h2 id="reply-title" className="comment-reply-title">
      Post a comment
    </h2>
    <form method="post" id="form-comments" className="comment-form">
      <div className="form-floating">
        <textarea
          name="comment"
          id="comment-field"
          className="form-control"
          placeholder="Comment"
          rows="5"
        ></textarea>
        <label htmlFor="comment">Comment</label>
      </div>
      <div className="row-form row">
        <div className="col-form col-md-6">
          <div className="form-floating">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="col-form col-md-6">
          <div className="form-floating">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
      </div>
      <p className="form-submit">
        <input
          name="submit"
          type="submit"
          id="submit-btn"
          className="btn btn-color btn-square"
          value="Post Comment"
        />
        <input type="hidden" name="comment_post_ID" />
        <input
          type="hidden"
          name="comment_parent"
          id="comment_parent"
          value="0"
        />
      </p>
    </form>
  </div>
);

export default CommentsRespond;
