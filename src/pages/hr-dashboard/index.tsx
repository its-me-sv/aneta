import React, {useEffect} from "react";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";

import NavHr, {destinationMapper} from '../../components/nav-hr';
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
`;

interface HRDashboardPageProps {}

const HRDashboardPage: React.FC<HRDashboardPageProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {changeUni} = useUserNavContext();

  const handleClick = (val: number) => {
    changeUni!(val);
    navigate(`../organisation/${params.orgName}/${destinationMapper[val]}`);
  };

  useEffect(() => {
    changeUni!(0);
  }, []);

  return (
    <MainContainer>
      <NavHr />
      <Logout />
      <RightContainer>
        <HRProjects onPress={() => handleClick(3)} />
        <HRResources onPress={() => handleClick(4)} />
        <HRFinancial onPress={() => handleClick(5)} />
      </RightContainer>
    </MainContainer>
  );
};

export default HRDashboardPage;
