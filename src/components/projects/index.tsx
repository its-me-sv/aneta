import React from "react";
import styled from "styled-components";

import Section from '../section';
import ProjectOverview from '../project-overview';
import Button from "../button";

import {useProjectsContext} from "../../contexts/projects.context";

const ProjectsContainer = styled.div`
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 17.8vh;
  max-height: 17.8vh;
  overflow: auto;
  gap: 0.42rem;
`;

interface ActiveProjectProps {}

export const ActiveProjects: React.FC<ActiveProjectProps> = () => {
  const {
    active: projects,
    activePage: page,
    fetchActive: fetchProjects,
  } = useProjectsContext();

  return (
    <div>
      <Section name="Active" />
      <ProjectsContainer>
        {projects.map((val, idx) => (
          <ProjectOverview key={idx} {...val} />
        ))}
        {page !== null && (
          <Button
            text="Load more"
            disabled={false}
            onPress={fetchProjects!}
            variant={4}
          />
        )}
      </ProjectsContainer>
    </div>
  );
};

interface StalledProjectProps {}

export const StalledProjects: React.FC<StalledProjectProps> = () => {
  const {
    stalled: projects,
    stalledPage: page,
    fetchStalled: fetchProjects,
  } = useProjectsContext();

  return (
    <div>
      <Section name="Stalled" />
      <ProjectsContainer>
        {projects.map((val, idx) => (
          <ProjectOverview key={idx} {...val} />
        ))}
        {page !== null && (
          <Button
            text="Load more"
            disabled={false}
            onPress={fetchProjects!}
            variant={4}
          />
        )}
      </ProjectsContainer>
    </div>
  );
};

interface CompleteProjectProps {}

export const CompleteProjects: React.FC<CompleteProjectProps> = () => {
  const {
    completed: projects,
    completedPage: page,
    fetchCompleted: fetchProjects,
  } = useProjectsContext();

  return (
    <div>
      <Section name="Complete" />
      <ProjectsContainer>
        {projects.map((val, idx) => (
          <ProjectOverview key={idx} {...val} />
        ))}
        {page !== null && (
          <Button
            text="Load more"
            disabled={false}
            onPress={fetchProjects!}
            variant={4}
          />
        )}
      </ProjectsContainer>
    </div>
  );
};
