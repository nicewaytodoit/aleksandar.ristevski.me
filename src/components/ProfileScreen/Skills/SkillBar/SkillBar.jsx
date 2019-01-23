import React from 'react';
import './SkillBar.scss';

const SkillBar = ({ className, name, level }) => (
  <div className={className}>
    <label htmlFor={`${name}-bar`}>{name}</label>
    <div id={`${name}-bar`} className="skill__bar">
      <div className="skill__level" style={{ width: `${level || 0}%` }} />
    </div>
  </div>
);

SkillBar.displaName = 'SkillBar';

export default SkillBar;
