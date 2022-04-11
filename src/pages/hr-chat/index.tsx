import React, { useEffect, useState } from "react";

import {MainContainer, RightContainer, NotSelected} from './styles';

import NavHR from "../../components/nav-hr";
import ChatScreen from "../../components/chat-screen";
import Contacts from "../../components/contacts";

import {useUserNavContext} from "../../contexts/user-nav.context";

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
