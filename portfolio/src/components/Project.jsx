import React from "react";

function Projects() {
  return (
    <section className="projects">

      <h1 className="project-title">Projects</h1>

      <div className="project-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio website built using React and JavaScript.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Todo App</h3>
          <p>
            A simple Todo application to manage daily tasks.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>E-commerce UI</h3>
          <p>
            Modern e-commerce frontend design built using React.
          </p>
          <button>View Project</button>
        </div>

      </div>

    </section>
  );
}

export default Projects;