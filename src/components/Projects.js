import React,{useState} from "react";
import data from "../data";


function Projects() {
  const [inpdata, setInpdata] = useState(data)
  return inpdata[2].projects.map((project) => {
    return (
      <>
        <h4 className='small font-weight-bold'>
          {project.name} <span className='float-right'>{project.percent}</span>
        </h4>
        <div className='progress mb-4'>
          <div
            className={project.classnam}
            role='progressbar'
            style={{ width: `${project.percent}` }}
            aria-valuenow={process.percent}
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
      </>
    )
  })
}

export default Projects;
