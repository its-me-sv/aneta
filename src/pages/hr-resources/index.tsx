import React, {
  useEffect,
  useRef,
  MutableRefObject,
  KeyboardEventHandler,
} from "react";
import {useLocation} from 'react-router-dom';

import {MainContainer, ResourcesWrapper, RightContainer} from './styles';

import NavHR from "../../components/nav-hr";
import {StyledInput} from "../../components/input";
import Employee from '../../components/employee';
import Candidates from '../../components/candidates';
import ResourceOverview from '../../components/resource-overview';

import {useUserNavContext} from "../../contexts/user-nav.context";
import {useRescourcesContext} from "../../contexts/resources.context";

interface HRResourcesPageProps {}

const HRResourcesPage: React.FC<HRResourcesPageProps> = () => {
    const {changeUni} = useUserNavContext();
    const {
      currResource, setCurrResource,
      fetchEmployee, fetchCandidates, 
      resetEmployee, resetCandidates
    } = useRescourcesContext();
    const fetched = useRef<boolean>(false);
    const {state: projs} = useLocation();
    const keywordRef =
      useRef() as MutableRefObject<HTMLInputElement>;
    const fetchWithKeyword: KeyboardEventHandler<HTMLInputElement> = (
      event
    ) => {
      if (event.key !== "Enter") return;
      if (keywordRef.current.value.length < 1)
        return window.alert("Field empty");
      fetchEmployee!(keywordRef.current.value);
      fetchCandidates!(keywordRef.current.value);
    };

    useEffect(() => {
      changeUni!(4);
      if (projs) return;
      if (fetched.current) return;
      fetched.current = true;
      fetchEmployee!();
      fetchCandidates!();
      return () => {
        fetched.current = false;
        resetEmployee!();
        resetCandidates!();
        setCurrResource!('');
      };
    }, [projs]);

    return (
      <MainContainer>
        <NavHR />
        {currResource && (
          <ResourceOverview
            currId={currResource}
            onClose={() => setCurrResource!("")}
          />
        )}
        <RightContainer>
          {!projs && (
            <StyledInput
              placeholder="Name | Email | Role"
              ref={keywordRef}
              onKeyDown={fetchWithKeyword}
            />
          )}
          <ResourcesWrapper>
            <Employee
              big={(projs && (projs as Array<string>)?.length > 0) as boolean}
              fromHr={projs as Array<string>}
            />
            {!projs && <Candidates />}
          </ResourcesWrapper>
        </RightContainer>
      </MainContainer>
    );
};

export default HRResourcesPage;
