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
function projectFn(pp, j) { 
  const proj = pp;
  const hyphen = proj.description ? ' - ' : '';
  const title = proj.url ? <a target="_blank" href={proj.url}>{proj.name}</a> : <b>{proj.name}</b>;
  const content = <><span className="history__projects-desc" dangerouslySetInnerHTML={{ __html: proj.description }} ></span><br/></>;
  const skills = proj.skills ? (<><b>Tech:</b>{getChain([...proj.skills], (s, i) => <span key={`pro_skill_${j}_${i}`}>{s}</span>, ', ')}</>) : '';
    
  return (<Fragment key={`proj_${j}`}>
    <li
      id={`proj_${j}`}
    >
      {title}{hyphen}{content}
      {skills}
    </li>
  </Fragment>);
};
function dateFn(date, di) { return <span key={`date_${di}`}>{date.start} - {date.end || "now"}</span>; };
function occupationFn(o, oi) { return <span key={`ocup_${oi}`}>{o}</span>; };

function getChain(arr, fnMap, separator) { 
  return (arr || [])
    .map(fnMap)
    .reduce((accu, elem) => {
      return accu === null ? [elem] : [...accu, separator, elem]
    }, null); 
};

const ProjTitle = ({ items }) => <><b>{`Project${hasS(items)} :`}</b><br/></>;
const Projects = ({projs}) => (<p className="history__projects">
  <ProjTitle items={projs} />
  <ul>
    {getChain([...projs], projectFn, <></>)}
  </ul>
</p>);


class History extends React.Component {
  
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        {siteConfig.jobs && siteConfig.jobs.map((job, jj) => (
          <article id={`${job.hash}`} key={`art_${job.hash}_${jj}`} className="history__item">
              <h2 key={`${job.hash}_1`} className="history__title">{job.company} <span>{job.location} {getUrls(job.url)}</span></h2>
              <p key={`${job.hash}_2`} className="history__engagement">
                {getChain([...job.engagement], dateFn, <>{' & '}</>)} ({job.duration})
              </p>
              <p key={`${job.hash}_3`} className="history__occupation">
                {getChain([...job.occupation], occupationFn, <>{', '}</>)}
              </p>
              {job.projects ? <Projects key={`${job.hash}_4_pro`} projs={[...job.projects]} /> : '' }
              {job.details?(<ul className="history__details">
                {[...job.details].map((txt, ddi) => <li key={`details_${ddi}`} dangerouslySetInnerHTML={{ __html: txt }}></li>)}
              </ul>):''} 
              {(!!job.stack) ? (
                <p id={`stack_${job.hash}`}  key={`${job.hash}_5`}  className="history__stack">
                  <b>Tech:</b>&nbsp;
                  {getChain([...job.stack], techFn, ', ')}
                </p>) : ''}
          </article>
        ))}
      </div>
    );
  }
}

export default History;
