import React, {useState, useEffect, useCallback} from "react";

import {Container, Footer, Header, Body} from './styles';

import SimpleProfile from '../simple-profile';
import HorizontalLine from '../horizontal-line';
import {StyledTextArea} from '../input';
import Button from '../button';
import Message from '../message';

import {useUserContext} from '../../contexts/user.context';

interface MessageType {
    id: string;
    msg: string;
}

const dummyMessages: Array<MessageType> = Array(42).fill({
    id: "9467eb20-a622-11ec-9631-773bd57f3429",
    msg: "Simple message"
});

interface ChatScreenProps {
  chatId: string;
}

const ChatScreen: React.FC<ChatScreenProps> = ({chatId}) => {
    const {setLoading} = useUserContext();
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    
    const fetchData = useCallback(() => {
      window.alert(chatId);
      setLoading!(true);
      setTimeout(() => {
        setMessages(prev => [...dummyMessages, ...prev]);
        setLoading!(false);
      }, 1000);
    }, [chatId, setLoading]);

    useEffect(() => {
      fetchData();
      return () => setMessages([]);
    }, [fetchData]);
    
    return (
      <Container>
        <Header>
          <SimpleProfile variant={2} />
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
            <Message 
              owner={Math.random()} 
              key={idx} 
              {...props} 
            />
           ))}
        </Body>
        <Footer>
          <StyledTextArea rows={2} placeholder="Message" />
          <Button 
            variant={2} 
            text="SEND" 
            onPress={() => {}} 
            disabled={false} />
        </Footer>
      </Container>
    );
};

export default ChatScreen;
