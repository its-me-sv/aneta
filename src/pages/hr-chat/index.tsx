import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NavHR from "../../components/nav-hr";
import ChatScreen from "../../components/chat-screen";
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

const NotSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: calibri;
  font-size: 4.2rem;
  opacity: 0.5;
  text-align: center;
`;

interface HRChatPageProps {}

const HRChatPage: React.FC<HRChatPageProps> = () => {
  const { changeUni } = useUserNavContext();
  const [currChat, setCurrChat] = useState<string>("");

  useEffect(() => {
    changeUni!(1);
  }, []);

  return (
    <MainContainer>
      <NavHR />
      <RightContainer>
        {currChat.length ? (
          <ChatScreen chatId={currChat} />
        ) : (
          <NotSelected>Choose a contact from the contacts</NotSelected>
        )}
        <Contacts setChat={setCurrChat} />
      </RightContainer>
    </MainContainer>
  );
};

export default HRChatPage;
