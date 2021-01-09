import React, { Fragment } from 'react';
import styled from 'styled-components';
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../Data/siteData.json';
import './History.scss';


const getUrls = (urls) => {
  if (!urls) return "";
  const stripUrl = (u) => (u || "").replace(/^[https:\/\/|http:\/\/]*/g, '');
  const linkFn = (url) => <a target="_blank" href={url}>{stripUrl(url)}</a>;
  
  const arr1 = !Array.isArray(urls) ? [urls] : urls; 
  
  return (
    <Fragment>
      {"("}
      {getChain(arr1, linkFn, <i></i>)} 
      {")"}
    </Fragment>
  );
};
function hasS(someArr) { return (someArr.length===1) ? '' : 's'; };
function techFn(tech, i) { return <span key={`tech_${i}`}>{tech}</span>; };
function projectFn(proj, j) { return (
  <li key={`proj_${j}`}>
    {proj.url?<a target="_blank" href={proj.url}>{proj.name}</a>:<b>{proj.name}</b>}{proj.description?' - ':''}<span className="history__projects-desc" dangerouslySetInnerHTML={{ __html: proj.description }} /> 
    <br />
    {proj.skills?<><b>Tech:</b>{getChain(proj.skills, (s, i) => <span key={`skill_${j}_${i}`}>{s}</span>, ', ')}</>:""}
  </li>
);};
function dateFn(date, di) { return <span key={`date_${di}`}>{date.start} - {date.end || "now"}</span>; };
function occupationFn(o, oi) { return <span key={`date_${oi}`}>{o}</span>; };

function getChain(arr, fnMap, separator) { 
  return (arr || [])
    .map(fnMap)
    .reduce((accu, elem) => {
      return accu === null ? [elem] : [...accu, separator, elem]
    }, null); 
};

const History = ({ className }) => (
  <div className={className}>
    {siteConfig.jobs && siteConfig.jobs.map((job, jj) => (
      <article id={`${job.hash}`} key={`art_${job.hash}_${jj}`} className="history__item">
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
            {(job.details || []).map((txt, ddi) => <li key={`details_${ddi}`} dangerouslySetInnerHTML={{ __html: txt }}/>)}
          </ul> 
          {job.stack?<p className="history__stack">
            <b>Tech: </b>{getChain(job.stack, techFn, ', ')}
          </p>:''}
      </article>
    ))}
  </div>
);

export default History;
