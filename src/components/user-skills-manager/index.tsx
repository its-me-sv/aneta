import React from 'react';

import {
  SkillsContainer, 
  SkillHolder, 
  SkillName, 
  CloseIcon,
} from './styles';

interface UserSkillsManangerProps {}

const UserSkillsManager: React.FC<UserSkillsManangerProps> = () => {
    return (
      <SkillsContainer>
        {Array(42)
          .fill(0)
          .map((_, idx) => (
            <SkillHolder key={idx}>
              <SkillName>JavaScript</SkillName>
              <CloseIcon />
            </SkillHolder>
          ))}
      </SkillsContainer>
    );
};

export default UserSkillsManager;
