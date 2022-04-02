import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavUser from '../../components/nav-user';
import Logout from '../../components/logout';
import AssignedTo from '../../components/assigned-to';
import Leaves from '../../components/leaves';
import JoinedOn from '../../components/joined-on';
import UserActions from '../../components/user-actions';
import UserSkills from '../../components/user-skills';
import EditUserForms from "../../components/edit-user-form";

import {useUserNavContext} from '../../contexts/user-nav.context';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  padding: 3% 4.2% 2% 3.6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  max-height: 90vh;
`;

interface UserDashboardPageProps {}

const UserDashboardPage: React.FC<UserDashboardPageProps> = () => {
    const {changeUni} = useUserNavContext();
    
    useEffect(() => {
      changeUni!(0);
    }, []);
    
    return (
      <MainContainer>
        <NavUser />
        <Logout />
        <RightContainer>
          <AssignedTo />
          <UserActions />
          <UserSkills />
          <EditUserForms />
          <Leaves />
          <JoinedOn />
        </RightContainer>
      </MainContainer>
    );
};

export default UserDashboardPage;
