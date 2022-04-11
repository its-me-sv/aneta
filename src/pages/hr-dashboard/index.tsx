import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {MainContainer, RightContainer} from './styles';

import NavHr, {destinationMapper} from '../../components/nav-hr';
import Logout from "../../components/logout";
import HRProjects from '../../components/hr-projects';
import HRResources from "../../components/hr-resources";
import HRFinancial from '../../components/hr-financial';

import {useUserNavContext} from "../../contexts/user-nav.context";

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
