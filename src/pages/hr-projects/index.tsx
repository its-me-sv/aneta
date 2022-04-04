import React, {useEffect, useState} from "react";

import {
  MainContainer,
  RightContainer,
  ResourcesWrapper,
  TopButton,
} from "./styles";

import NavHR from "../../components/nav-hr";
import { StyledInput } from "../../components/input";
import Button from "../../components/button";
import ProjectForm from '../../components/project-form';
import {
  ActiveProjects, 
  StalledProjects, 
  CompleteProjects
} from '../../components/projects';

import { useUserNavContext } from "../../contexts/user-nav.context";

interface HRProjectsPageProps {}

const HRProjectsPage: React.FC<HRProjectsPageProps> = () => {
  const { changeUni } = useUserNavContext();
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    changeUni!(3);
  }, []);

  return (
    <MainContainer>
      <NavHR />
      {showForm && <ProjectForm onClose={() => setShowForm(false)} />}
      <RightContainer>
        <TopButton>
          <Button
            text="+ New Project"
            variant={2}
            onPress={() => setShowForm(true)}
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