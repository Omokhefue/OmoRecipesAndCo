import { useLoaderData } from "react-router-dom";

const RecipeComments = () => {
  const comments = useLoaderData();
  console.log(comments);
  return (
    <div>
      {comments ? (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <span>
              {comment.likesCount === 0 ? "no likes" : comment.likesCount}
            </span>
          </div>
        ))
      ) : (
        <p>no comments yet. Be the first to add something</p>
      )}
    </div>
  );
};
export default RecipeComments;

export const RecipeCommentsLoader = async ({ params }) => {
  console.log(params);

  const res = await fetch("http://localhost:5000/api/v1/comments/" + params.id);
  if (!res.ok) {
    throw Error("there was an error getting the comments. Please try again");
  }
  const data = await res.json();
  return data.comments;
};
