import React, {
  useState, 
  useEffect, 
  useCallback,
} from "react";

import {Container, Footer, Header, Body} from './styles';

import SimpleProfile from '../simple-profile';
import HorizontalLine from '../horizontal-line';
import {StyledTextArea} from '../input';
import Button from '../button';
import Message from '../message';

import {useUserContext} from '../../contexts/user.context';
import {useContactsContext} from '../../contexts/contacts.context';

interface MessageType {
    id: string;
    msg: string;
}

const dummyMessages: Array<MessageType> = Array(42).fill({
    id: "9467eb20-a622-11ec-9631-773bd57f3429",
    msg: "Simple message"
});

interface ChatScreenProps {}

const ChatScreen: React.FC<ChatScreenProps> = ({}) => {
    const {setLoading} = useUserContext();
    const {currContact: chatId} = useContactsContext();
    const [messages, setMessages] = useState<Array<MessageType>>([]);

    const fetchData = useCallback(() => {
      setLoading!(true);
      setTimeout(() => {
        setMessages(prev => [...dummyMessages, ...prev]);
        setLoading!(false);
      }, 1000);
    }, [setLoading]);

    useEffect(() => {
      fetchData();
      return () => setMessages([]);
    }, [fetchData]);
    
    return (
      <Container>
        <Header>
          <SimpleProfile variant={2} id={chatId} />
          <HorizontalLine variant={2} />
        </Header>
        <Body>
          <Button
            onPress={fetchData}
            text="Load more"
            variant={1}
            disabled={false}
          />
          {messages.map((props, idx) => (
            <Message owner={Math.random()} key={idx} {...props} />
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
