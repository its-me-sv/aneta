import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Section from '../section';
import ProjectName from "../project-name";

import {useUserContext} from "../../contexts/user.context";

const Projects = styled.div`
  display: grid;
  padding: 0.5%;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(7, 1fr);
  height: auto;
  max-height: 7rem;
  overflow-y: auto;
  overflow-x: auto;
  gap: 0.5rem;
`;

interface AssignedToProps {
  fromHr?: Array<string>;
}

const AssignedTo: React.FC<AssignedToProps> = ({fromHr}) => {
    const {setLoading} = useUserContext();
    const [projects, setProjects] = useState<Array<string>>([]);

    useEffect(() => {
      if (fromHr?.length) {
        setProjects(fromHr);
        return;
      } 
      setLoading!(true);
      setTimeout(() => {
        setProjects(Array(42).fill("Project name"));
        setLoading!(false);
      }, 1000);
    }, []);

    return (
      <div>
        <Section name="Assigned to" />
        <Projects>
          {projects.map((pn, idx) => (
            <ProjectName key={idx} id={pn} />
          ))}
        </Projects>
      </div>
    );
};

export default AssignedTo;
