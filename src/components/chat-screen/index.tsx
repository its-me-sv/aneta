import React, {useEffect} from "react";

import {Container, Footer, Header, Body} from './styles';

import SimpleProfile from '../simple-profile';
import HorizontalLine from '../horizontal-line';
import {StyledTextArea} from '../input';
import Button from '../button';
import Message from '../message';

import {useMessagesContext} from '../../contexts/messages.context';
import {useUserContext} from '../../contexts/user.context';
import {useOrganisationContext} from '../../contexts/organisation.context';

interface ChatScreenProps {
  chatId: string;
}

const ChatScreen: React.FC<ChatScreenProps> = ({chatId}) => {
  const {id: oid} = useOrganisationContext();
  const {id: eid} = useUserContext();
  const {messages, msgPage, fetchMessages} = useMessagesContext();

  const sender = oid.length > 0 ? oid : eid;

  useEffect(() => {
    fetchMessages!(chatId, true);
  }, [chatId]);

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
        <StyledTextArea rows={2} placeholder="Message" />
        <Button variant={2} text="SEND" onPress={() => {}} disabled={false} />
      </Footer>
    </Container>
  );
};

export default ChatScreen;
