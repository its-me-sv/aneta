import React, { useState } from 'react';
import styled from 'styled-components';

import Section from "../section";
import Input from '../input';
import Button from '../button';

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 50%;
  gap: 0.5rem;
`;

interface EditOrgFormProps {}

const EditOrgForms: React.FC<EditOrgFormProps> = () => {
    const [orgName, setOrgname] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    return (
      <div>
        <Section name="Organisation" />
        <Wrapper>
          <Input
            label="Name"
            name="Name"
            value={orgName}
            setValue={setOrgname}
          />
          <Input
            label="Password"
            name="Password"
            value={password}
            setValue={setPassword}
            isPass
          />
          <Button
            variant={2}
            text="UPDATE"
            disabled={false}
            onPress={() => {}}
          />
          <Button
            variant={1}
            text="LEAVE ORGANISATION"
            disabled={false}
            onPress={() => {}}
          />
          <Button
            variant={3}
            text="CLOSE ORGANISATION"
            disabled={false}
            onPress={() => {}}
          />
        </Wrapper>
      </div>
    );
};

export default EditOrgForms;
