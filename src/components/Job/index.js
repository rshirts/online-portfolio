import React from 'react';
import { job } from './Job.scss';

const Job = (props) => (
  <div className={job}>
    <h3>{props.job.company}</h3>
    <h6>{props.job.title}</h6>
    <p>{props.job.description}</p>
  </div>
);

export default Job;
