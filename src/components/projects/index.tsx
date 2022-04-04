import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Section from '../section';
import ProjectOverview from '../project-overview';
import Button from "../button";

import {useUserContext} from "../../contexts/user.context";

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
  const {setLoading} = useUserContext();
  const [projects, setProjects] = useState<Array<any>>([]);

  const fetchProjects = () => {
    setLoading!(true);
    setTimeout(() => {
      setProjects((prev) => [...prev, ...Array(42).fill(0)]);
      setLoading!(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Section name="Active" />
      <ProjectsContainer>
        {projects.map((_, idx) => (
          <ProjectOverview key={idx} />
        ))}
        <Button
          text="Load more"
          disabled={false}
          onPress={fetchProjects}
          variant={4}
        />
      </ProjectsContainer>
    </div>
  );
};

interface StalledProjectProps {}

export const StalledProjects: React.FC<StalledProjectProps> = () => {
  const { setLoading } = useUserContext();
  const [projects, setProjects] = useState<Array<any>>([]);

  const fetchProjects = () => {
    setLoading!(true);
    setTimeout(() => {
      setProjects((prev) => [...prev, ...Array(42).fill(0)]);
      setLoading!(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Section name="Stalled" />
      <ProjectsContainer>
        {projects.map((_, idx) => (
          <ProjectOverview key={idx} />
        ))}
        <Button
          text="Load more"
          disabled={false}
          onPress={fetchProjects}
          variant={4}
        />
      </ProjectsContainer>
    </div>
  );
};

interface CompleteProjectProps {}

export const CompleteProjects: React.FC<CompleteProjectProps> = () => {
  const { setLoading } = useUserContext();
  const [projects, setProjects] = useState<Array<any>>([]);

  const fetchProjects = () => {
    setLoading!(true);
    setTimeout(() => {
      setProjects((prev) => [...prev, ...Array(42).fill(0)]);
      setLoading!(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Section name="Complete" />
      <ProjectsContainer>
        {projects.map((_, idx) => (
          <ProjectOverview key={idx} />
        ))}
        <Button
          text="Load more"
          disabled={false}
          onPress={fetchProjects}
          variant={4}
        />
      </ProjectsContainer>
    </div>
  );
};
