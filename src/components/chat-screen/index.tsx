import React, {useEffect, useState} from "react";

import {Container, Footer, Header, Body} from './styles';

import SimpleProfile from '../simple-profile';
import HorizontalLine from '../horizontal-line';
import {StyledTextArea} from '../input';
import Button from '../button';
import Message from '../message';

import {useMessagesContext} from '../../contexts/messages.context';
import {useUserContext} from '../../contexts/user.context';
import {useOrganisationContext} from '../../contexts/organisation.context';
import {useSocketContext} from "../../contexts/socket.context";

interface ChatScreenProps {
  chatId: string;
}

const ChatScreen: React.FC<ChatScreenProps> = ({chatId}) => {
  const {id: oid} = useOrganisationContext();
  const {id: eid} = useUserContext();
  const {socket} = useSocketContext();
  const {
    messages, msgPage, 
    fetchMessages, sendMessage
  } = useMessagesContext();
  const [newMsg, setNewMsg] = useState<string>('');

  const sender = oid.length > 0 ? oid : eid;
  const roomId = [chatId, sender].sort().join('');

  useEffect(() => {
    fetchMessages!(chatId, true);
  }, [chatId]);

  useEffect(() => {
    socket?.emit("joinRoom", roomId);
    return () => {
      socket?.emit("leaveRoom", roomId);
    };
  }, [roomId, socket]);

  const onMessageSend = () => {
    if (!newMsg.length) return;
    sendMessage!(newMsg, chatId);
    setNewMsg('');
  };

  return (
    <Container>
      <Header>
        <SimpleProfile variant={2} id={chatId} />
        <HorizontalLine variant={2} />
      </Header>
      <Body>
        {msgPage !== null && (
          <Button
            onPress={() => fetchMessages!(chatId)}
            text="Load more"
            variant={1}
            disabled={false}
          />
        )}
        {messages.map((props, idx) => (
          <Message
            key={idx}
            id={props.id}
            msg={props.message}
            owner={props.sender === sender}
          />
        ))}
      </Body>
      <Footer>
        <StyledTextArea
          rows={2}
          placeholder="Message"
          value={newMsg}
          onChange={(event) => setNewMsg(event.target.value)}
        />
        <Button
          variant={2}
          text="SEND"
          onPress={onMessageSend}
          disabled={newMsg.length < 1}
        />
      </Footer>
    </Container>
  );
};

export default ChatScreen;
