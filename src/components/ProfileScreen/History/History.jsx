import React, { Fragment } from 'react';
import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../Data/siteData.json';
import './History.scss';


const getUrl = (url) => {
  if (!url) return "";
  const titleUrl = (url || "").replace(/^[https:\/\/|http:\/\/]*/g, '');
  return (
    <Fragment>
      {"( "}<a href={url}>{titleUrl}</a>{" )"}
    </Fragment>
  );
};

const History = ({ className }) => (
  <div className={className}>
    {siteConfig.jobs && siteConfig.jobs.map(job => (
      <article id={`#{job.hash}`} key={job.begin.month + job.begin.year} className="history__item">
          <h2 className="history__title">{job.company} <span>{job.location} {getUrl(job.url)}</span></h2>
          <p>{job.location}</p>
          <p className="history__stack">
            {(job.stack || [])
              .map((skill) => <span>{skill}</span>)
              .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, ', ', elem]
              }, null)
            }
          </p>
      </article>
    ))}
  </div>
);

export default History;
