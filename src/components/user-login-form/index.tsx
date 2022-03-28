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

const UserFormLogin: React.FC<OrgFormProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (!email.length || !password.length) 
      return window.alert("Field empty");
    window.alert(JSON.stringify({email, password}));
  };

  return (
    <>
      <RightMid>
        <Input label="Email" name="email" value={email} setValue={setEmail} />
        <Input
          label="Password"
          isPass
          name="password"
          value={password}
          setValue={setPassword}
        />
      </RightMid>
      <RightEnd onClick={handleLogin}>Login</RightEnd>
    </>
  );
};

export default UserFormLogin;
