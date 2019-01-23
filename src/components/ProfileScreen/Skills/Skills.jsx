import React, { Fragment } from 'react';
import SkillBar from './SkillBar/SkillBar';

export default ({ title = 'Skills', skills = [] }) => (
  <Fragment>
    <h1>{title}</h1>
    {skills.map(skill => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </Fragment>
);
