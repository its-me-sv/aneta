import React, {useEffect} from "react";
import styled from "styled-components";

import NavUser from "../../components/nav-user";

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

interface UserChatPageProps {}

const UserChatPage: React.FC<UserChatPageProps> = () => {
  const {changeUni} = useUserNavContext();
  
  useEffect(() => {
    changeUni!(1);
  }, []);

  return (
    <MainContainer>
      <NavUser />
      <h1>User Chat Area</h1>
    </MainContainer>
  );
};

export default UserChatPage;
