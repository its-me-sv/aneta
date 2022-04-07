import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";

import {RightEnd} from '../../pages/home/styles';
import {useAPIContext} from '../../contexts/api.context';
import {useOrganisationContext} from '../../contexts/organisation.context';

import Input from '../input';

export const RightMid = styled.div`
  display: flex;
  padding: 0.84rem;
  flex-direction: column;
`;

interface OrgFormProps {}

const OrganisationFormLogin: React.FC<OrgFormProps> = () => {
  const {REST_API} = useAPIContext();
  const {setId, setToken, setOrgName, setLoading} = useOrganisationContext();
  const [orgName, setOrgname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleLogin = () => {
    if (!orgName.length || !password.length)
      return window.alert("Field empty");
    setLoading!(true);
    const formBody = {
      orgName,
      password
    };
    axios.post(`${REST_API}/auth/org-login`, formBody)
    .then(({data}) => {
      setLoading!(false);
      setId!(data.id);
      setToken!(data.token);
      setOrgName!(data.orgName);
    })
    .catch(err => {
      setLoading!(false);
      window.alert(JSON.stringify(err.response.data));
    });
  };

  return (
    <>
      <RightMid>
        <Input label="Organisation Name" name="orgName" value={orgName} setValue={setOrgname} />
        <Input label="Password" isPass name="password" value={password} setValue={setPassword} />
      </RightMid>
      <RightEnd onClick={handleLogin}>Login</RightEnd>
    </>
  );
};

export default OrganisationFormLogin;
