import React from 'react';
import { btnLight, btnDark, item } from './Project.scss';
import { Link } from 'react-router-dom';
import { FaGithub, FaEye } from 'react-icons/fa';

const Project = (props) => (
  <div className={item}>
    {/* <Link to={props.localRoute}> */}
    <Link to="">
      <img src={props.imagePath} alt="project" />
    </Link>
    <a href={props.url} className={btnLight}>
      <FaEye /> Project
    </a>
    <a href={props.github} className={btnDark}>
      <FaGithub /> Github
    </a>
  </div>
);

export default Project;
