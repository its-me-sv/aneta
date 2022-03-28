import React from 'react';
import styled from "styled-components";

import Input from '../input';

export const RightMid = styled.div`
  display: flex;
  padding: 0.84rem;
  flex-direction: column;
`;

interface OrgFormProps {}

const OrganisationFormLogin: React.FC<OrgFormProps> = () => {
    return (
      <RightMid>
        <Input label="Organisation Name" />
        <Input label="Password" isPass/>
      </RightMid>
    );
};

export default OrganisationFormLogin;
