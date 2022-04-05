import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useSearchParams} from 'react-router-dom';

import NavHR from "../../components/nav-hr";
import {StyledInput} from "../../components/input";
import Employee from '../../components/employee';
import Candidates from '../../components/candidates';
import ResourceOverview from '../../components/resource-overview';

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1% 1%;
`;

const ResourcesWrapper = styled.div`
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface HRResourcesPageProps {}

const HRResourcesPage: React.FC<HRResourcesPageProps> = () => {
    const {changeUni} = useUserNavContext();
    const [searchParams] = useSearchParams();
    const [crId, setCrId] = useState<string>('hello');

    useEffect(() => {
      changeUni!(4);
      console.log({id: searchParams.get('id')});
    }, []);

    return (
      <MainContainer>
        <NavHR />
        {crId && <ResourceOverview currId={crId} onClose={() => setCrId('')} />}
        <RightContainer>
          <StyledInput placeholder="Name | Email | Role" />
          <ResourcesWrapper>
            <Employee />
            <Candidates />
          </ResourcesWrapper>
        </RightContainer>
      </MainContainer>
    );
};

export default HRResourcesPage;
