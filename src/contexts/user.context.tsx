import React, { createContext, useContext, useState } from "react";

import {useSocketContext} from './socket.context';

interface UserContextInterface {
  id: string;
  token: string;
  orgName: string;
  loading: boolean;
  setId?: (val: string) => void;
  setToken?: (val: string) => void;
  setOrgName?: (val: string) => void;
  setLoading?: (val: boolean) => void;
  userLogout?: () => void;
}

const defaultState: UserContextInterface = {
  id: "",
  token: "",
  orgName: "",
  loading: false,
};

export const UserContext = createContext<UserContextInterface>(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const {setSocket} = useSocketContext();
  const [id, setId] = useState<string>(defaultState.id);
  const [token, setToken] = useState<string>(defaultState.token);
  const [orgName, setOrgName] = useState<string>(defaultState.orgName);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  const userLogout = () => {
    setId('');
    setToken('');
    setOrgName('');
    setSocket!(null);
  };

  return (
    <UserContext.Provider
      value={{
        id, token, loading, orgName,
        setId, setToken, setLoading, setOrgName,
        userLogout
      }}
    >{children}</UserContext.Provider>
  );
};
