import { useLoaderData } from "react-router-dom";

import { useState } from "react";

const RecipeComments = () => {
  const [RecipeCommentsLoader] = useLoaderData();
  const comments = RecipeCommentsLoader;
  const [commentData, setCommentData] = useState(comments);
  const CommentLikesLoader = async (id) => {
    const token = localStorage.getItem("access_token"); // Retrieve the token

    const res = await fetch(
      "http://localhost:5000/api/v1/likes/comment/" + id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw Error("there was an error liking the comments. Please try again");
    }
    const data = await res.json();

    const updatedComments = commentData.map((comment) => {
      if (comment._id === data.parentId) {
        return {
          ...comment,
          likesCount: data.likes,
        };
      }
      return comment;
    });
    setCommentData(updatedComments);
  };
  const handleDeleteComment = async (id) => {
    const token = localStorage.getItem("access_token"); // Retrieve the token
    try {
      const res = await fetch("http://localhost:5000/api/v1/comments/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw Error(
          "there was an error deleting the comments. Please try again"
        );
      }
      const data = await res.json();
      console.log(data);
      const updatedComments = commentData.filter(
        (comment) => comment._id !== id
      );
      setCommentData(updatedComments);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="comments-container">
      {comments && comments.length !== 0 ? (
        commentData.map((comment) => (
          <div key={comment._id} className="comment">
            <div className="user-profile-icon">
              <span>T</span>
            </div>
            <div className="comment-details">
              <p className="comment-user">Temi</p>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-extra-details">
                <p className="comment-date">
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div>
                  <img
                    src="../../src/assets/svg/thumbs-up.svg"
                    alt="like/no-like"
                    className="comment-img"
                    onClick={() => CommentLikesLoader(comment._id)}
                  />
                  <span className="comment-like">{comment.likesCount}</span>
                </div>

                <span onClick={() => handleDeleteComment(comment._id)}>
                  delete
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p class="no-comment">no comments yet. Be the first to say something</p>
      )}
    </div>
  );
};
export default RecipeComments;

const RecipeCommentsLoader = async (id) => {
  const res = await fetch("http://localhost:5000/api/v1/comments/" + id);
  if (!res.ok) {
    throw Error("there was an error getting the comments. Please try again");
  }
  const comments = await res.json();
  return comments;
};

export const CommentSectionLoader = async ({ params }) => {
  return Promise.all([RecipeCommentsLoader(params.id)]);
};
