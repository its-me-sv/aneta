import React from 'react';

import {
  Container, Wrapper, Header, Body, CloseIcon
} from './styles';

import SimpleProfile from '../simple-profile';
import Button from '../button';
import JoinedOn from '../joined-on';
import AssignedTo from '../assigned-to';
import HRActions from '../hr-actions';
import Leaves from '../leaves';
import ResourcesSkills from "../resources-skills";
import Section from '../section';

interface ResourceOverviewProps {
  currId: string;
  onClose: () => void;
}

const ResourceOverview: React.FC<ResourceOverviewProps> = ({onClose}) => {
    return (
      <Container>
        <Wrapper>
          <CloseIcon onClick={onClose}>X</CloseIcon>
          <Header>
            <SimpleProfile variant={2} showEmail />
            <Button
              variant={4}
              text="Message"
              disabled={false}
              onPress={() => {}}
            />
          </Header>
          <Body>
            <JoinedOn />
            <Leaves />
            <Section name="Skills" />
            <ResourcesSkills skills={Array(42).fill("Javascript")} />
            <AssignedTo fromHr={Array(42).fill("ProjectName")} />
            <HRActions />
          </Body>
        </Wrapper>
      </Container>
    );
}

export default ResourceOverview;
