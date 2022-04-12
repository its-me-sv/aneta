import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {MainContainer, RightContainer} from './styles';

import NavHr, {destinationMapper} from '../../components/nav-hr';
import Logout from "../../components/logout";
import HRProjects from '../../components/hr-projects';
import HRResources from "../../components/hr-resources";
import HRFinancial from '../../components/hr-financial';

import {useUserNavContext} from "../../contexts/user-nav.context";
import {useOrganisationContext} from "../../contexts/organisation.context";
import {useSocketContext} from "../../contexts/socket.context";

interface HRDashboardPageProps {}

const HRDashboardPage: React.FC<HRDashboardPageProps> = () => {
  const {orgName} = useOrganisationContext();
  const {socket} = useSocketContext();
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

  useEffect(() => {
    if (!orgName.length) return;
    socket?.emit("joinRoom", orgName);
  }, [orgName]);

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
