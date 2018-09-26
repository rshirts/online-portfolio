import React, { Component } from 'react';
import { connect } from 'react-redux';
import Job from '../../components/Job';
import {
  lgHeading,
  smHeading,
  textSecondary,
  aboutInfo,
  bioImage,
  bio,
  frame,
  title,
  bioWord,
} from './About.scss';
import randeePic from '../../assets/img/RandeeNew500x500.jpg';

class About extends Component {

  render() {

    const jobs = this.props.jobs.map(job => {
      return (
        <Job key={job.company} job={job} />
      )
    })

    return (
      <div className={frame}>
        <h1 className={`${lgHeading} ${title}`}>
          About <span className={textSecondary}>Me</span>
        </h1>
        <h2 className={smHeading}>A few of the details...</h2>
        <div className={aboutInfo}>
          <img src={randeePic} alt="Randee Shirts" className={bioImage} />
          <div className={bio}>
            <h3 className={`${textSecondary} ${bioWord}`}>BIO</h3>
            <p>{this.props.bio}</p>
          </div>
          {jobs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bio  : state.about.bio,
  jobs : state.about.jobs
});

export default connect(mapStateToProps)(About);
