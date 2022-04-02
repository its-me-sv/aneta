import React from "react";
import styled from "styled-components";

import NavHr from '../../components/nav-hr';
import Logout from "../../components/logout";
import HRProjects from '../../components/hr-projects';
import HRResources from "../../components/hr-resources";

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
`;

interface HRDashboardPageProps {}

const HRDashboardPage: React.FC<HRDashboardPageProps> = () => {
  return (
    <MainContainer>
      <NavHr />
      <Logout />
      <RightContainer>
        <HRProjects />
        <HRResources />
      </RightContainer>
    </MainContainer>
  );
};

export default HRDashboardPage;
