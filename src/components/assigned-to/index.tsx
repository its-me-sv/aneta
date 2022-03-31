import React from "react";
import styled from "styled-components";

import Section from '../section';
import ProjectName from "../project-name";

const Projects = styled.div`
  display: grid;
  padding: 0.5%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(7, 1fr);
  height: 7rem;
  overflow-y: auto;
`;

interface AssignedToProps {}

const AssignedTo: React.FC<AssignedToProps> = () => {
    return (
      <div>
        <Section name="Assigned to" />
        <Projects>
          {Array(42)
            .fill(0)
            .map((_, idx) => (
              <ProjectName key={idx} id="Project name" />
            ))}
        </Projects>
      </div>
    );
};

export default AssignedTo;
