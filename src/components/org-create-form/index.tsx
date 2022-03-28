import React, {useState} from "react";
import styled from "styled-components";

import {RightEnd} from '../../pages/home/styles';

import Input from "../input";

export const RightMid = styled.div`
  display: flex;
  padding: 0.84rem;
  flex-direction: column;
`;

interface OrgFormProps {}

const OrganisationFormCreate: React.FC<OrgFormProps> = () => {
  const [orgName, setOrgname] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleCreate = () => {
    if (!orgName.length || !name.length || !email.length || !password.length)
      return window.alert("Field empty");
    window.alert(JSON.stringify({orgName, name, email, password}));
  };

  return (
    <>
      <RightMid>
        <Input label="Organisation Name" name="orgName" value={orgName} setValue={setOrgname} />
        <Input label="Name" name="name" value={name} setValue={setName} />
        <Input label="Email" name="email" value={email} setValue={setEmail} />
        <Input label="Password" isPass name="password" value={password} setValue={setPassword} />
      </RightMid>
      <RightEnd onClick={handleCreate}>Create</RightEnd>
    </>
  );
};

export default OrganisationFormCreate;
