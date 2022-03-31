import React from 'react';
import styled from 'styled-components';

import NavUser from '../../components/nav-user';
import {useUserNavContext} from '../../contexts/user-nav.context';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

interface UserDashboardPageProps {}

const UserDashboardPage: React.FC<UserDashboardPageProps> = () => {
    const {uni} = useUserNavContext();
    return (
      <MainContainer>
        <NavUser />
        <div className="right-container">{uni}</div>
      </MainContainer>
    );
};

export default UserDashboardPage;
