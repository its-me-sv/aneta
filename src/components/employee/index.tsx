import React from 'react';
import styled from 'styled-components';

import Section from '../section';
import Resource from '../resource';
import Button from '../button';

import {useRescourcesContext} from '../../contexts/resources.context';

export const ResourcesContainer = styled.div<{big?: boolean}>`
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 32vh;
  max-height: 32vh;
  overflow-y: auto;
  gap: 0.42rem;
  ${(props) => props.big && `
    height: 77vh;
    max-height: 77vh;
  `}
`;

interface EmployeeProps {
  big?: boolean;
}

const Employee: React.FC<EmployeeProps> = ({big}) => {
    const {employee, fetchEmployee, employeePage} = useRescourcesContext();

    return (
      <div>
        <Section name="Employee" />
        <ResourcesContainer big={big}>
          {employee?.map(({id}, idx) => (
            <Resource key={idx} id={id} />
          ))}
          {employeePage !== null && (
            <Button
              variant={4}
              text="Load more"
              disabled={false}
              onPress={fetchEmployee!}
            />
          )}
        </ResourcesContainer>
      </div>
    );
};

export default Employee;
