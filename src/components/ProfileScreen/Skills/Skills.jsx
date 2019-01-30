import React from 'react';
import SkillBar from './SkillBar/SkillBar';

export default ({ title = 'Skills', skills = [] }) => (
  <>
    <h1>{title}</h1>
    {skills.map(skill => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </>
);
