import React from 'react';
import styled from 'styled-components';

import NavUser from '../../components/nav-user';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

interface UserDashboardPageProps {}

const UserDashboardPage: React.FC<UserDashboardPageProps> = () => {
    return (
      <MainContainer>
        <NavUser />
        <div className="right-container">SOME RANDOM STUFF</div>
      </MainContainer>
    );
};

export default UserDashboardPage;
