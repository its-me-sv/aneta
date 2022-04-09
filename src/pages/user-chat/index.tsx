import React, {useEffect, useState} from "react";
import axios from "axios";

import {MainContainer, RightContainer, NotSelected} from './styles';

import NavUser from "../../components/nav-user";
import ChatScreen from "../../components/chat-screen";
import Contacts from "../../components/contacts";

import {useUserContext} from "../../contexts/user.context";
import {useAPIContext} from "../../contexts/api.context";
import {useUserNavContext} from "../../contexts/user-nav.context";

interface UserChatPageProps {}

const UserChatPage: React.FC<UserChatPageProps> = () => {
  const {changeUni} = useUserNavContext();
  const {REST_API} = useAPIContext();
  const {id, token, setLoading} = useUserContext();
  const [currChat, setCurrChat] = useState<string>('');
  const [joined, setJoined] = useState<boolean>(false);
  
  useEffect(() => {
    changeUni!(1);
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
        {currChat.length 
        ? <ChatScreen chatId={currChat} /> 
        : <NotSelected>Choose a contact from the contacts</NotSelected>}
        <Contacts setChat={setCurrChat} />
      </RightContainer>
    </MainContainer>
  );
};

export default UserChatPage;
