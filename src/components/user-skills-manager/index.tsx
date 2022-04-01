import React, {useState, useEffect, ChangeEvent} from 'react';

import {
  SkillsContainer,
  SkillHolder,
  SkillName,
  CloseIcon,
  NewSkillInput,
} from "./styles";
import {StyledInput} from '../input';

import {useUserContext} from '../../contexts/user.context';
import Button from '../button';

interface UserSkillsManangerProps {}

const UserSkillsManager: React.FC<UserSkillsManangerProps> = () => {
    const {setLoading} = useUserContext();
    const [skills, setSkills] = useState<Array<string>>([]);
    const [newSkill, setNewSkill] = useState<string>('');
    
    useEffect(() => {
      setLoading!(true);
      setTimeout(() => {
        setSkills(["JavaScript"]);
        setLoading!(false);
      }, 2000);
    }, []);

    const removeSkill = (idx: number) => {
      setSkills(prev => prev.splice(idx, 1));
    };

    const addSkill = () => {
      if (!newSkill.length) return;
      if (skills.map(v => v.toLowerCase()).includes(newSkill.toLowerCase())) {
        window.alert("Skill already exits");
        return;
      }
      setSkills(prev => [...prev, newSkill]);
      setNewSkill('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
      setNewSkill(event.target.value);

    return (
      <div>
        <SkillsContainer>
          {skills.map((sn, idx) => (
            <SkillHolder key={idx}>
              <SkillName>{sn}</SkillName>
              <CloseIcon onClick={() => removeSkill(idx)} />
            </SkillHolder>
          ))}
        </SkillsContainer>
        <NewSkillInput>
          <StyledInput
            type="text"
            name="new-skill"
            value={newSkill}
            onChange={handleChange}
          />
          <Button
            variant={2}
            text="Add skill"
            disabled={newSkill.length < 1}
            onPress={addSkill}
          />
        </NewSkillInput>
      </div>
    );
};

export default UserSkillsManager;
