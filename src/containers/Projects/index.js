import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lgHeading, smHeading, frame, title, textSecondary, projects, responsiveGrid } from './Projects.scss';
import Project from '../../components/Project';

class Projects extends Component {
  render() {
    const projectView = this.props.proj.map((project) => {
      return <Project key={project.name} project={project} />;
    });

    return (
      <div className={frame}>
        <h1 className={`${lgHeading} ${title}`}>
          My <span className={textSecondary}>Projects</span>
        </h1>
        <h2 className={smHeading}>Here is what I've been up to...</h2>
        <div className={`${projects} ${responsiveGrid}`}>{projectView}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  proj: state.projects.projects
});

export default connect(mapStateToProps)(Projects);
