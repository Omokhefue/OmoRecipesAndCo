import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SubmitComment = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token"); // Retrieve the token
    const formData = new FormData(e.currentTarget);
    formData.append("recipe", id);
    const commentData = Object.fromEntries(formData);
    console.log(commentData);
    const res = await fetch("http://localhost:5000/api/v1/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    });
    if (!res.ok) {
      throw Error("there was an error adding the comments. Please try again");
    }
    const data = await res.json();
    navigate(`/recipes/${id}/comments`);
  };
  const addCommentRef = useRef();
  useEffect(() => {
    addCommentRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <form onSubmit={handleSubmit} id="add-comment-form" ref={addCommentRef}>
      <div className="form-group">
        <label htmlFor="text">Comment</label>
        <textarea id="text" name="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default SubmitComment;
