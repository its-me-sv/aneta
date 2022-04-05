import React from "react";
import {useNavigate, useParams} from 'react-router-dom';

import {Container, Wrapper, CloseIcon} from "../resource-overview/styles";
import {Text, ActionsContainer} from './styles';

import Section from '../section';
import Button from '../button';
import JoinedOn from '../joined-on';
import {PrivacyAndPolicies} from '../home-nav/data';

interface ProjectBriefProps {
  projId: string;
  onClose: () => void;
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({onClose}) => {
  const navigate = useNavigate();
  const params = useParams();

  const takeToRescources = () => {
    navigate(
      `../organisation/${params.orgName}/resources?id=${'9467eb20-a622-11ec-9631-773bd57f3429'}`
    );
  };

  const addResource = () => {
    const resourceEmail = window.prompt("Email of resource");
    window.alert(resourceEmail);
  };

  return (
    <Container>
      <Wrapper>
        <CloseIcon onClick={onClose}>X</CloseIcon>
        <Section name="Name" />
        <Text>Big Project Name</Text>
        <Section name="Description" />
        <Text isDesc>{PrivacyAndPolicies}</Text>
        <Section name="Actions" />
        <ActionsContainer>
          <Button
            variant={1}
            text="Stall"
            onPress={() => {}}
            disabled={false}
          />
          <Button
            variant={2}
            text="Complete"
            onPress={() => {}}
            disabled={false}
          />
          <Button
            variant={3}
            text="Update"
            onPress={() => {}}
            disabled={false}
          />
        </ActionsContainer>
        <JoinedOn forProject />
        <Section name="Resources" />
        <ActionsContainer>
          <span>42</span>
          <Button
            variant={0}
            text="Add resource"
            onPress={addResource}
            disabled={false}
          />
        </ActionsContainer>
        <Button
          variant={0}
          text="View resources"
          onPress={takeToRescources}
          disabled={false}
        />
      </Wrapper>
    </Container>
  );
};

export default ProjectBrief;
