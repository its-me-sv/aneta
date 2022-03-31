import React from 'react';
import styled from 'styled-components';

import NavUser from '../../components/nav-user';
import Section from '../../components/section';
import AssignedTo from '../../components/assigned-to';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  padding: 4.2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface UserDashboardPageProps {}

const UserDashboardPage: React.FC<UserDashboardPageProps> = () => {
    return (
      <MainContainer>
        <NavUser />
        <RightContainer>
          <AssignedTo />
          <div>
            <Section name="Skills" />
          </div>
          <div>
            <Section name="Leaves taken" />
          </div>
          <div>
            <Section name="Actions" />
          </div>
          <div>
            <Section name="Joined on" />
          </div>
        </RightContainer>
      </MainContainer>
    );
};

export default UserDashboardPage;
