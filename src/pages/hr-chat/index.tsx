import React, {useEffect, useRef} from "react";

import {MainContainer, RightContainer, NotSelected} from './styles';

import NavHR from "../../components/nav-hr";
import ChatScreen from "../../components/chat-screen";
import Contacts from "../../components/contacts";

import {useUserNavContext} from "../../contexts/user-nav.context";
import {useContactsContext} from '../../contexts/contacts.context';

interface HRChatPageProps {}

const HRChatPage: React.FC<HRChatPageProps> = () => {
  const {changeUni} = useUserNavContext();
  const {currContact, setCurrContact, fetchContacts, resetContacts} = useContactsContext();
  const fetched = useRef<boolean>(false);

  useEffect(() => {
    changeUni!(1);
    if (fetched.current) return;
    fetched.current = true;
    fetchContacts!();
    return () => {
      resetContacts!();
      setCurrContact!('');
    };
  }, []);

  return (
    <MainContainer>
      <NavHR />
      <RightContainer>
        {currContact.length ? (
          <ChatScreen chatId={currContact} />
        ) : (
          <NotSelected>Choose a contact from the contacts</NotSelected>
        )}
        <Contacts setChat={setCurrContact!} />
      </RightContainer>
    </MainContainer>
  );
};

export default HRChatPage;
