/* eslint-disable react/prop-types */

// The project component
function Project({ name, link, imageSrc, imageAlt }) {
  return (
    <div className="project-container">
      <p>{name}</p>

      <a href={link}>
        <img className="project-image" src={imageSrc} alt={imageAlt} />
      </a>
    </div>
  );
}

export default Project;
