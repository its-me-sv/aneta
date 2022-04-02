import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavHR from "../../components/nav-hr";
import Logout from '../../components/logout';
import EditOrgForms from '../../components/edit-org-form';
import EditUserForms from '../../components/edit-user-form';

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 7%;
`;

interface HRSettingsPageProps {}

const HRSettingsPage: React.FC<HRSettingsPageProps> = () => {
  const {changeUni} = useUserNavContext();

  useEffect(() => {
    changeUni!(5);
  }, []);

  return (
    <MainContainer>
      <NavHR />
      <Logout />
      <RightContainer>
        <EditOrgForms />
        <EditUserForms />
      </RightContainer>
    </MainContainer>
  );
};

export default HRSettingsPage;
