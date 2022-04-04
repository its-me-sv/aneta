import React, {useEffect} from "react";

import {
  MainContainer,
  RightContainer,
  ResourcesWrapper,
  TopButton,
} from "./styles";

import NavHR from "../../components/nav-hr";
import { StyledInput } from "../../components/input";
import Button from "../../components/button";
import {
  ActiveProjects, 
  StalledProjects, 
  CompleteProjects
} from '../../components/projects';

import { useUserNavContext } from "../../contexts/user-nav.context";

interface HRProjectsPageProps {}

const HRProjectsPage: React.FC<HRProjectsPageProps> = () => {
  const { changeUni } = useUserNavContext();

  useEffect(() => {
    changeUni!(3);
  }, []);

  return (
    <MainContainer>
      <NavHR />
      <RightContainer>
        <TopButton>
          <Button
            text="+ New Project"
            variant={2}
            onPress={() => {}}
            disabled={false}
          />
        </TopButton>
        <StyledInput placeholder="Name" />
        <ResourcesWrapper>
          <ActiveProjects />
          <StalledProjects />
          <CompleteProjects />
        </ResourcesWrapper>
      </RightContainer>
    </MainContainer>
  );
};

export default HRProjectsPage;
