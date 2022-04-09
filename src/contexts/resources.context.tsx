import React, {createContext, useContext, useState} from "react";
import axios from "axios";

import {useAPIContext} from './api.context';
import {useOrganisationContext} from './organisation.context';

interface ResourcesContextInterface {
  candidates: Array<{ id: string }>;
  candidatesPage: string | null;
  employee: Array<{ id: string }>;
  employeePage: string | null;
  currResource: string;
  setCurrResource?: (val: string) => void;
  fetchCandidates?: () => void;
  fetchEmployee?: () => void;
  resetCandidates?: () => void;
  resetEmployee?: () => void;
}

const defaultState: ResourcesContextInterface = {
  candidates: [],
  candidatesPage: "",
  employeePage: "",
  employee: [],
  currResource: ''
};

export const ResourcesContext = createContext<ResourcesContextInterface>(defaultState);

export const useRescourcesContext = () => useContext(ResourcesContext);

export const ResourcesContextProvider: React.FC = ({children}) => {
    const {REST_API} = useAPIContext();
    const {token, orgName, setLoading} = useOrganisationContext();
    const [employee, setEmployee] = useState<Array<{id: string}>>(defaultState.employee);
    const [candidates, setCandidates] = useState<Array<{id: string}>>(defaultState.candidates);
    const [employeePage, setEmployeePage] = useState<string|null>(defaultState.employeePage);
    const [candidatesPage, setCandidatesPage] = useState<string|null>(defaultState.candidatesPage);
    const [currResource, setCurrResource] = useState<string>('');
    
    const fetchEmployee = () => {
        if (employeePage === null) return;
        setLoading!(true);
        const reqBody: {orgName: string; page?: string} = {orgName};
        if (employeePage?.length) reqBody.page = employeePage;
        axios.post(`${REST_API}/organisation/employee?joined=true`, {...reqBody}, {
          headers: {Authorization: `Bearer ${token}`,}
        }).then(({data}) => {
            setEmployee([...employee, ...data.resource]);
            setEmployeePage(data.pageState);
            setLoading!(false);
        }).catch(() => setLoading!(false));
    };
    
    const resetEmployee = () => {
        setEmployee([]);
        setEmployeePage('');
    }
    
    const fetchCandidates = () => {
        if (candidatesPage === null) return;
        setLoading!(true);
        const reqBody: {orgName: string; page?: string} = {orgName};
        if (candidatesPage?.length) reqBody.page = candidatesPage;
        axios.post(`${REST_API}/organisation/employee?joined=false`, {...reqBody}, {
          headers: {Authorization: `Bearer ${token}`,}
        }).then(({data}) => {
            setCandidates([...candidates, ...data.resource]);
            setCandidatesPage(data.pageState);
            setLoading!(false);
        }).catch(() => setLoading!(false));
    };

    const resetCandidates = () => {
        setCandidates([]);
        setCandidatesPage('');
    };

    return (
        <ResourcesContext.Provider
          value={{
            employee, candidates, employeePage, candidatesPage, currResource,
            fetchEmployee, fetchCandidates, resetEmployee, resetCandidates,
            setCurrResource
          }}
        >{children}</ResourcesContext.Provider>
    );
};
