import React from 'react';
import {format} from 'timeago.js';

import {Container, Title, Description, Date} from './styles';

import {getDateObj} from '../../utils/timeuuid-to-date';
import {TermsAndConditions} from '../home-nav/data';

interface ProjectOverviewProps {}

const ProjectOverview: React.FC<ProjectOverviewProps> = () => {
  const timeStamp = getDateObj(
    "9467eb20-a622-11ec-9631-773bd57f3429"
  ).toISOString();
  return (
    <Container>
      <Title>Big project name</Title>
      <Description>{TermsAndConditions}</Description>
      <Date>{format(timeStamp)}</Date>
    </Container>
  );
};

export default ProjectOverview;
