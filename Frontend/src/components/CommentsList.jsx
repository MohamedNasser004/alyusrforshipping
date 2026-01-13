"use client";
import AddComment from "./AddComment";

const CommentsList = ({ comments, articleName }) => {
  const handleAddReply = (newReply, parentId) => {
    // اختر الطريقة المناسبة لتحديث الحالة إذا لزم الأمر
  };

  const renderComments = (comments, level = 0) =>
    comments.map(comment => (
      <div key={comment.id} className={`card mb-3 ${level > 0 ? "ms-5" : ""}`}>
        <div className="card-body">
          <h5 className="card-title">{comment.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{new Date(comment.date).toLocaleString()}</h6>
          <p className="card-text">{comment.comment}</p>

          <button
            className="btn btn-outline-primary btn-sm"
            data-bs-toggle="collapse"
            data-bs-target={`#replyForm${comment.id}`}
          >
            الرد على التعليق
          </button>

          <div className="collapse mt-3" id={`replyForm${comment.id}`}>
            <AddComment articleName={articleName} parentId={comment.id} onAddReply={handleAddReply} />
          </div>

          {comment.replies?.length > 0 && (
            <div className="mt-3">
              {renderComments(comment.replies, level + 1)}
            </div>
          )}
        </div>
      </div>
    ));

  return <>{renderComments(comments)}</>;
};

export default CommentsList;
