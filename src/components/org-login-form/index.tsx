import React, {useState} from 'react';
import styled from "styled-components";

import {RightEnd} from '../../pages/home/styles';

import Input from '../input';

export const RightMid = styled.div`
  display: flex;
  padding: 0.84rem;
  flex-direction: column;
`;

interface OrgFormProps {}

const OrganisationFormLogin: React.FC<OrgFormProps> = () => {
  const [orgName, setOrgname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  return (
    <>
      <RightMid>
        <Input label="Organisation Name" name="orgName" value={orgName} setValue={setOrgname} />
        <Input label="Password" isPass name="password" value={password} setValue={setPassword} />
      </RightMid>
      <RightEnd>Login</RightEnd>
    </>
  );
};

export default OrganisationFormLogin;
