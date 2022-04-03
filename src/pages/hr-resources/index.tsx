import React, {useEffect} from 'react';
import styled from "styled-components";

import NavHR from "../../components/nav-hr";
import {StyledInput} from "../../components/input";
import Employee from '../../components/employee';
import Candidates from '../../components/candidates';

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

    useEffect(() => {
      changeUni!(4);
    }, []);

    return (
      <MainContainer>
        <NavHR />
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
