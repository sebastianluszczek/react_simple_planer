import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro
            veniam et nesciunt alias ad iure repellat aliquam fugit odio quasi
            quos doloribus laudantium animi ipsa facilis dignissimos corrupti
            expedita temporibus, possimus sapiente. Minus quam enim similique
            itaque unde eaque est corrupti tempore explicabo, molestiae, quos
            porro accusamus provident exercitationem.
          </p>
          <p className='grey-text'>3rd September, 2am</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <p>Posted by The Net ninja</p>
          <p>2nd September, 3am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
