import React from 'react';
import styled from 'styled-components';

import Section from '../section';
import Resource from '../resource';
import Button from '../button';

export const ResourcesContainer = styled.div`
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 32vh;
  max-height: 32vh;
  overflow-y: auto;
  gap: 0.42rem;
`;

interface EmployeeProps {}

const Employee: React.FC<EmployeeProps> = () => {
    return (
      <div>
        <Section name="Employee" />
        <ResourcesContainer>
          {Array(42)
            .fill(0)
            .map((_, idx) => (
              <Resource key={idx} />
            ))}
          <Button
            variant={4}
            text="Load more"
            disabled={false}
            onPress={() => {}}
          />
        </ResourcesContainer>
      </div>
    );
};

export default Employee;
