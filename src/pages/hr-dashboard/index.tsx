import React, {useEffect} from "react";
import styled from "styled-components";

import NavHr from '../../components/nav-hr';
import Logout from "../../components/logout";
import HRProjects from '../../components/hr-projects';
import HRResources from "../../components/hr-resources";
import HRFinancial from '../../components/hr-financial';

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  padding: 3% 4.2% 2% 3.6%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
`;

interface HRDashboardPageProps {}

const HRDashboardPage: React.FC<HRDashboardPageProps> = () => {
  const {changeUni} = useUserNavContext();

  useEffect(() => {
    changeUni!(0);
  }, []);

  return (
    <MainContainer>
      <NavHr />
      <Logout />
      <RightContainer>
        <HRProjects />
        <HRResources />
        <HRFinancial />
      </RightContainer>
    </MainContainer>
  );
};

export default HRDashboardPage;
