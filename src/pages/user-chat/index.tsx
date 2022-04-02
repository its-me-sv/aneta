import React, {useEffect} from "react";
import styled from "styled-components";

import NavUser from "../../components/nav-user";
import Contacts from "../../components/contacts";

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const ChatContainer = styled.div`
  padding: 1%;
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
      <RightContainer>
        <ChatContainer>Chat Screen</ChatContainer>
        <Contacts />
      </RightContainer>
    </MainContainer>
  );
};

export default UserChatPage;
