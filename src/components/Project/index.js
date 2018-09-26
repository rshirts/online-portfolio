import React from 'react';
import { btnLight, btnDark, item, btnDisabled } from './Project.scss';
import { Link } from 'react-router-dom';
import { FaGithub, FaEye } from 'react-icons/fa';
import ExternalLink from '../ExternalLink';

const Project = (props) => {

  const project = props.project.url ? (
    <ExternalLink link={props.project.url} >
      <div className={btnLight}>
        <FaEye /> Project
      </div>
    </ExternalLink>
  ) : (
      <div className={`${btnLight} ${btnDisabled}` }>
        <FaEye /> Project Coming Soon
      </div>
  )

  return (
    <div className={item}>
      {/* <Link to={props.localRoute}> */}
      <Link to="">
        <img src={require(`../../assets/img/${props.project.imageName}`)} alt="project" />
      </Link>
      {project}
      <ExternalLink link={props.project.github} >
        <div className={btnDark}>
          <FaGithub /> Github
        </div>
      </ExternalLink>
    </div>
  )
}

export default Project;
