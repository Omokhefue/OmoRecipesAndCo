import { Link } from "react-router-dom";

const Preview = ({ resources }) => {
  return (
    <section className="preview-section">
      {resources &&
        resources.map((resource) => (
          <Link className="preview" key={resource._id} to={`${resource._id}`}>
            <img
              src={`http://localhost:5000/${resource.image}`}
              alt={resource.name}
            />
            <p>{resource.name}</p>
          </Link>
        ))}
    </section>
  );
};
export default Preview;
