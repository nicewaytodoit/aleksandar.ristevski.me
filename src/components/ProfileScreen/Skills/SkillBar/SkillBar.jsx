import React from 'react';
import styled from 'styled-components';

const SkillBar = ({ className, name, level }) => (
  <div className={className}>
    <label htmlFor={`${name}-bar`}>{name}</label>
    <div id={`${name}-bar`} className="skill__bar">
      <div className="skill__level" style={{ width: `${level || 0}%` }} />
    </div>
  </div>
);

SkillBar.displaName = 'SkillBar';

export default styled(SkillBar)`
  
  .skill__bar {
    height: 10px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill__level {
    background-color: #25303B;
       width: ${p => p.level || 0}%;
       height: 8px;
  }
`;
