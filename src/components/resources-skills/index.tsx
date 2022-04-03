import React from 'react';

import {SkillsContainer, SkillHolder, SkillName} from '../user-skills-manager/styles';

interface ResourcesSkillsProps {
  skills: Array<string>
}

const ResourcesSkills: React.FC<ResourcesSkillsProps> = ({skills}) => {
    return (
      <SkillsContainer>
        {skills.map((sn, idx) => (
          <SkillHolder key={idx}>
            <SkillName>{sn}</SkillName>
          </SkillHolder>
        ))}
      </SkillsContainer>
    );
};

export default ResourcesSkills;
