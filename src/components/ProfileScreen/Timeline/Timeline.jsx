import React from 'react';
import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../Data/siteData.json';

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
            {job.company}
            {' '}
            <br />
            <small className="timeline__title--small">
            ({job.duration || 'present'})
            </small>
          </h2>
          <p className="timeline__text">{job.description}</p>
          <p className="timeline__stack">
            {(job.stack || []).map((skill) => <span>{skill}</span>) }
            <a href={`/work/#${job.hash}`}><strong>...</strong></a>
          </p>
        </div>
      </article>
    ))}
  </div>
);

const bcg = `#396c9f`;
const bcg_border = `#27313a`;

export default styled(Timeline)`

  position: relative;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin: 70px 0 0 -1px;
    width: 1px;
    height: calc(100% - 70px);
    background: ${bcg};
  }
  .timeline__item {
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;
  }
  .timeline__item:after {
    content: '';
    display: block;
    clear: both;
  }
  .timeline__item div.inner {
    width: 100%;
    float: left;
    margin: 85px 0 0 0;
    border-radius: 6px;
    border: 1px solid ${bcg_border};
  }
  .timeline__text {
    padding-top: 5px !important;
    padding-bottom: 15px !important;
    line-height: 1.3rem;
  }
  .timeline__stack {
    position: relative;
    padding-top: 0px !important;
    padding-bottom: 15px !important;
    line-height: 1.3rem;
  }
  .timeline__stack span {
    font-size: 0.7em;
    border: 1px solid #777;
    background-color: #d4ebf2;
    margin-right: 4px;
    padding: 3px;
    white-space:nowrap;
    border-radius: 3px;
  }
  .timeline__stack a {
    position: absolute;
    right: 15px;
    bottom: 12px;
  }

  .timeline__date {
    display: block;
    width: 60px;
    padding: 5px 5px;
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -30px;
    border-radius: 100%;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    background: ${bcg};
    color: #fff;
    box-shadow: 0 0 0 7px #fff;
  }
  .timeline__date span {
    display: block;
    text-align: center;
  }
  .timeline__month {
    font-size: 18px;
    padding-top: 4px;
  }
  .timeline__year {
    font-size: 10px;
  }
  .timeline__title {
    padding: 15px;
    margin: 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    border-radius: 3px 3px 0 0;
    position: relative;
  }
  .timeline__title:after {
    content: '';
    position: absolute;
    top: -5px;
    left: 30%;
    width: 10px; 
    height: 10px;
    transform: rotate(-45deg);
  }
  .timeline__item div.inner p {
    padding: 15px;
    margin: 0;
    font-size: 14px;
    background: #fff;
    color: #656565;
    border-radius: 0 0 6px 6px;
  }
  .timeline__item:nth-child(2n+2) div.inner {
    float: right;
  }
  .timeline__title {
    background: ${bcg};
  }
  .timeline__title:after {
    background: ${bcg};
  }

  .timeline__title--small {
    font-size: 10px;
  }

  ${p => config().media.sm`
  .timeline__item div.inner {
    width: 40%;
    margin: 5px 0 0 0;
  }

  .timeline__item div.inner h2:after {
    top: 20px;
    left: unset;
    right: -5px;
  }
  .timeline__item:nth-child(2n+2) div.inner h2:after {
    left: -5px;
  }

  `}
`;
