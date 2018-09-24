import React, {Component} from 'react';
import {connect} from 'react-redux';
import {lgHeading, smHeading, frame, title, textSecondary} from './Work.scss';

class Work extends Component {
  render() {

    const projects = this.props.proj.map( project => {
      return null
    })

    return (
      <div className={frame}>
        <h1 className={`${lgHeading} ${title}`}>My <span className={textSecondary}>Work</span></h1>
        <h2 className={smHeading}>Check out some of my projects...</h2>
        <div className="projects">
          {projects}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  proj: state.work.projects
})

export default connect(mapStateToProps)(Work);