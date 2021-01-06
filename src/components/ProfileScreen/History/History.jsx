import React, { Fragment } from 'react';
import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../Data/siteData.json';
import './History.scss';


const getUrls = (urls) => {
  if (!urls) return "";
  const stripUrl = (u) => (u || "").replace(/^[https:\/\/|http:\/\/]*/g, '');
  const linkFn = (url) => <a target="_blank" href={url}>{stripUrl(url)}</a>;
  
  const arr = !Array.isArray(urls) ? [urls] : urls; 
  
  return (
    <Fragment>
      {"("}
      {getChain(arr, linkFn, <i></i>)} 
      {")"}
    </Fragment>
  );
};

const techFn = (tech) => <span>{tech}</span>
const dateFn = (date) => <span>{date.start} - {date.end || "now"}</span>
const occupationFn = (o) => <span>{o}</span>

const getChain = (arr, fnMap, separator) => (arr || [])
              .map(fnMap)
              .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, separator, elem]
              }, null)

const History = ({ className }) => (
  <div className={className}>
    {siteConfig.jobs && siteConfig.jobs.map(job => (
      <article id={`#{job.hash}`} key={job.begin.month + job.begin.year} className="history__item">
          <h2 className="history__title">{job.company} <span>{job.location} {getUrls(job.url)}</span></h2>
          <p className="history__engagement">
            {getChain(job.engagement, dateFn, ' & ')} ({job.duration})
          </p>
          <p className="history__occupation">
            {getChain(job.occupation, occupationFn, ', ')}
          </p>
          <p className="history__stack">
            {getChain(job.stack, techFn, ', ')}
          </p>
      </article>
    ))}
  </div>
);

export default History;
