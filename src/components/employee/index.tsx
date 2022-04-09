import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Section from '../section';
import Resource from '../resource';
import Button from '../button';

import {useUserContext} from '../../contexts/user.context';

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
    const {setLoading} = useUserContext();
    const [resources, setResources] = useState<Array<any>>([]);
    
    const fetchResources = () => {
      setLoading!(true);
      setTimeout(() => {
        setResources((prev) => [...prev, ...Array(42).fill(0)]);
        setLoading!(false);
      }, 1000);
    };

    useEffect(() => {
      fetchResources();
    }, []);

    return (
      <div>
        <Section name="Employee" />
        <ResourcesContainer big={big}>
          {resources.map((_, idx) => (
            <Resource key={idx} />
          ))}
          <Button
            variant={4}
            text="Load more"
            disabled={false}
            onPress={fetchResources}
          />
        </ResourcesContainer>
      </div>
    );
};

export default Employee;
