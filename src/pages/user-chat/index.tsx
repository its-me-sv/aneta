import React, {useEffect, useState, useRef} from "react";
import axios from "axios";

import {MainContainer, RightContainer, NotSelected} from './styles';

import NavUser from "../../components/nav-user";
import ChatScreen from "../../components/chat-screen";
import Contacts from "../../components/contacts";

import {useUserContext} from "../../contexts/user.context";
import {useAPIContext} from "../../contexts/api.context";
import {useUserNavContext} from "../../contexts/user-nav.context";
import {useContactsContext} from '../../contexts/contacts.context';


interface UserChatPageProps {}

const UserChatPage: React.FC<UserChatPageProps> = () => {
  const {changeUni} = useUserNavContext();
  const {REST_API} = useAPIContext();
  const {id, token, setLoading} = useUserContext();
  const {currContact, setCurrContact, fetchContacts, resetContacts} = useContactsContext();
  const [joined, setJoined] = useState<boolean>(false);
  const fetched = useRef<boolean>(false);
  
  useEffect(() => {
    changeUni!(1);
    if (fetched.current) return;
    fetched.current = true;
    fetchContacts!();
    return () => {
      resetContacts!();
      setCurrContact!("");
    };
  }, []);

  useEffect(() => {
    if (!id.length || !token.length) return;
    setLoading!(true);
    axios.post(`${REST_API}/employee/joined`, {id}, {
      headers: {Authorization: `Bearer ${token}`}
    }).then(({data}) => {
      setJoined(data.joined);
      setLoading!(false);
    }).catch(() => setLoading!(false));
  }, [id, token]);

  return (
    <MainContainer>
      <NavUser joined={joined} />
      <RightContainer>
        {currContact.length 
        ? <ChatScreen /> 
        : <NotSelected>Choose a contact from the contacts</NotSelected>}
        <Contacts setChat={setCurrContact!} />
      </RightContainer>
    </MainContainer>
  );
};

export default UserChatPage;
