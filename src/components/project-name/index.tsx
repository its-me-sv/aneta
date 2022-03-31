import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
  opacity: 0.9;
`;

interface ProjectNameProps {
  id: string;
}

const ProjectName: React.FC<ProjectNameProps> = ({id}) => {
    return <Title>{id}</Title>;
};

export default ProjectName;
