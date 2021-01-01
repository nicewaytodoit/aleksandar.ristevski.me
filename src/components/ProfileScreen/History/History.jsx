import React from 'react';
import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../Data/siteData.json';
import './History.scss';

const History = ({ className }) => (
  <div className={className}>
    {siteConfig.jobs && siteConfig.jobs.map(job => (
      <article id={`#{job.hash}`} key={job.begin.month + job.begin.year} className="timeline__item">
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p className="timeline__stack">
            {(job.stack || []).map((skill) => <span>{skill}</span>) }
          </p>
      </article>
    ))}
  </div>
);

export default History;
