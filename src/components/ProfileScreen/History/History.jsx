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

const hasS = (arr) => (arr.length===1) ? '' : 's';
const techFn = (tech) => <span>{tech}</span>;
const projectFn = (proj) => (
  <li>
    {proj.url?<a href={proj.url}>{proj.name}</a>:<b>{proj.name}</b>}{proj.description?' - ':''}<span className="history__projects-desc" dangerouslySetInnerHTML={{ __html: proj.description }} /> 
    <br />
    {proj.skills?<><b>Tech:</b>{getChain(proj.skills, s => <span>{s}</span>, ', ')}</>:""}
  </li>
);
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
      <article id={`${job.hash}`} key={job.begin.month + job.begin.year} className="history__item">
          <h2 className="history__title">{job.company} <span>{job.location} {getUrls(job.url)}</span></h2>
          <p className="history__engagement">
            {getChain(job.engagement, dateFn, ' & ')} ({job.duration})
          </p>
          <p className="history__occupation">
            {getChain(job.occupation, occupationFn, ', ')}
          </p>
          {job.projects?<p className="history__projects">
            <b>Project{hasS(job.projects)}:</b><br/>
              <ul>
                {getChain(job.projects, projectFn, '')}
              </ul>
          </p>:''}
          <ul className="history__details">
            {(job.details || []).map((txt) => <li dangerouslySetInnerHTML={{ __html: txt }}/>)}
          </ul> 
          {job.stack?<p className="history__stack">
            <b>Tech: </b>{getChain(job.stack, techFn, ', ')}
          </p>:''}
      </article>
    ))}
  </div>
);

export default History;
