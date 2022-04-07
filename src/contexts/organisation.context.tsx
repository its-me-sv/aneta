import React, { createContext, useContext, useState } from "react";

interface OrganisationContextInterface {
  id: string;
  token: string;
  orgName: string;
  loading: boolean;
  setId?: (val: string) => void;
  setToken?: (val: string) => void;
  setOrgName?: (val: string) => void;
  setLoading?: (val: boolean) => void;
}

const defaultState: OrganisationContextInterface = {
  id: "",
  token: "",
  orgName: "",
  loading: false,
};

export const OrganisationContext = createContext<OrganisationContextInterface>(defaultState);

export const useOrganisationContext = () => useContext(OrganisationContext);

export const OrganisationContextProvider: React.FC = ({ children }) => {
  const [id, setId] = useState<string>(defaultState.id);
  const [token, setToken] = useState<string>(defaultState.token);
  const [orgName, setOrgName] = useState<string>(defaultState.orgName);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);

  return (
    <OrganisationContext.Provider
      value={{
        id,
        token,
        loading,
        orgName,
        setId,
        setToken,
        setLoading,
        setOrgName
      }}
    >
      {children}
    </OrganisationContext.Provider>
  );
};
