import React, { useEffect, useState } from 'react';
import { comment } from '../services/api';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    comment()
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error loading comments: {error.message}</p>;
  console.log(comment);
  return (
    <div>
      <h1>قائمة المقالات</h1>
      {comments.map((comment) => (
        <div >
          <h2>{comment.comment}</h2>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
