import React from 'react';
import './Timeline.scss';
import siteConfig from '../../../Data/siteData.json';
// import { config } from 'react-awesome-styled-grid';

const Timeline = ({ className }) => (
  <div className={className}>
    <h1>Experience</h1>
    {siteConfig.jobs && siteConfig.jobs.map(job => (
      <article key={job.begin.month + job.begin.year} className="timeline__item">
        <div className="inner">
          <span className="timeline__date">
            <span className="timeline__month">{job.begin.month}</span>
            <span className="timeline__year">{job.begin.year}</span>
          </span>
          <h2 className="timeline__title">
            {job.occupation}
            {' '}
            at
            {' '}
            {job.company}
            {' '}
            <br />
            <small className="timeline__title--small">
            (
              {job.duration || 'present'}
            )
            </small>
          </h2>
          <p>{job.description}</p>
        </div>
      </article>
    ))}
  </div>
);

export default Timeline;
