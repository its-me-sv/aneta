import React from "react";
import styled from "styled-components";

import NavHr from '../../components/nav-hr';
import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

interface HRDashboardPageProps {}

const HRDashboardPage: React.FC<HRDashboardPageProps> = () => {
  const {uni} = useUserNavContext();
  return (
    <MainContainer>
      <NavHr />
      <div className="right-container">{uni}</div>
    </MainContainer>
  );
};

export default HRDashboardPage;
