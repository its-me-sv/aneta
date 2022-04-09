import React, {useState, useEffect, useRef} from "react";
import axios from 'axios';

import {ActionButtons} from './styles';

import Section from "../section";
import Button from "../button";

import {useAPIContext} from '../../contexts/api.context';
import {useUserContext} from '../../contexts/user.context';

interface UserActionsProps {}

const UserActions: React.FC<UserActionsProps> = () => {
  const {REST_API} = useAPIContext();
  const {token, id, setLoading} = useUserContext();
  const [status, setStatus] = useState<number>(2);
  const [request, setRequest] = useState<boolean>(false);
  const fetched = useRef<boolean>(false);

  useEffect(() => {
    if (!token.length || !id.length) return;
    if (fetched.current) return;
    fetched.current = true;
    setLoading!(true);
    axios.post(`${REST_API}/employee/stat-req`, {id}, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(({data}) => {
      setStatus(data.status);
      setRequest(data.request);
      setLoading!(false);
    })
    .catch(() => setLoading!(false));
  }, [token, id]);
  
  const onClick = () => window.alert("button clicked");
  
  return (
    <div>
      <Section name="Actions" />
      <ActionButtons>
        <Button
          onPress={onClick}
          disabled={status===1}
          variant={1}
          text="SET AWAY"
        />
        <Button
          onPress={onClick}
          disabled={status===2}
          variant={2}
          text="SET ONLINE"
        />
        <Button
          onPress={onClick}
          disabled={request}
          variant={3}
          text="REQUEST LEAVE"
        />
      </ActionButtons>
    </div>
  );
};

export default UserActions;
