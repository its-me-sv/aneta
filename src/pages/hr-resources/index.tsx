import React, {
  useEffect,
  useRef,
  MutableRefObject,
  KeyboardEventHandler,
} from "react";
import {useSearchParams} from 'react-router-dom';

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
    const [searchParams] = useSearchParams();
    const fetched = useRef<boolean>(false);
    const projId = searchParams.get('id');
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
    }, []);

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
          <StyledInput
            placeholder="Name | Email | Role"
            ref={keywordRef}
            onKeyDown={fetchWithKeyword}
          />
          <ResourcesWrapper>
            <Employee big={(projId && projId?.length > 0) as boolean} />
            {!projId && <Candidates />}
          </ResourcesWrapper>
        </RightContainer>
      </MainContainer>
    );
};

export default HRResourcesPage;
