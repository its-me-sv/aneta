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

const UserFormCreate: React.FC<OrgFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleCreate = () => {
    if (!name.length || !email.length || !password.length)
      return window.alert("Field empty");
    window.alert(JSON.stringify({ name, email, password }));
  };

  return (
    <>
      <RightMid>
        <Input label="Name" name="name" value={name} setValue={setName} />
        <Input label="Email" name="email" value={email} setValue={setEmail} />
        <Input
          label="Password"
          isPass
          name="password"
          value={password}
          setValue={setPassword}
        />
      </RightMid>
      <RightEnd onClick={handleCreate}>Create</RightEnd>
    </>
  );
};

export default UserFormCreate;
