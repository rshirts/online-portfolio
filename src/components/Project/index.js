import React from 'react';
import { btnLight, btnDark, item } from './Project.scss';
import { Link } from 'react-router-dom';
import { FaGithub, FaEye } from 'react-icons/fa';
import ExternalLink from '../ExternalLink';

const Project = (props) => {

  console.log(props);

  return (
    <div className={item}>
      {/* <Link to={props.localRoute}> */}
      <Link to="">
        <img src={require(`../../assets/img/${props.project.imageName}`)} alt="project" />
      </Link>
      <ExternalLink link={props.project.url} >
        <div className={btnLight}>
          <FaEye /> Project
        </div>
      </ExternalLink>
      <ExternalLink link={props.project.github} >
        <div className={btnDark}>
          <FaGithub /> Github
        </div>
      </ExternalLink>
    </div>
  )
}

export default Project;
