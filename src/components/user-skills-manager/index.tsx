import React, {useState, useEffect} from 'react';

import {
  SkillsContainer, 
  SkillHolder, 
  SkillName, 
  CloseIcon,
} from './styles';

import {useUserContext} from '../../contexts/user.context';

interface UserSkillsManangerProps {}

const UserSkillsManager: React.FC<UserSkillsManangerProps> = () => {
    const {setLoading} = useUserContext();
    const [skills, setSkills] = useState<Array<string>>([]);
    
    useEffect(() => {
      setLoading!(true);
      setTimeout(() => {
        setSkills(["JavaScript"]);
        setLoading!(false);
      }, 2000);
    }, []);

    return (
      <SkillsContainer>
        {skills.map((sn, idx) => (
          <SkillHolder key={idx}>
            <SkillName>{sn}</SkillName>
            <CloseIcon />
          </SkillHolder>
        ))}
      </SkillsContainer>
    );
};

export default UserSkillsManager;
