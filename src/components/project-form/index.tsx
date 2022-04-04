import React, {useState} from 'react';
import styled from 'styled-components';

import {Container, Wrapper, CloseIcon} from '../resource-overview/styles';
import Input from '../input';
import Button from '../button';

const Footer = styled.div`
  align-self: flex-end;
  margin-top: 1%;
`;

const TitleText = styled.span`
  font-family: calibri;
  font-size: 1.8rem;
  align-self: center;
`;

interface ProjectFormProps {
  onClose: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({onClose}) => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const onCreate = () => {
    window.alert(JSON.stringify({name, desc}));
  };

  return (
    <Container>
      <Wrapper>
        <CloseIcon onClick={onClose}>X</CloseIcon>
        <TitleText>New Project</TitleText>
        <Input label="Name" name="Name" value={name} setValue={setName} />
        <Input
          isDesc
          label="Description"
          name="Description"
          value={desc}
          setValue={setDesc}
        />
        <Footer>
          <Button
            text="Create"
            variant={2}
            disabled={false}
            onPress={onCreate}
          />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default ProjectForm;
