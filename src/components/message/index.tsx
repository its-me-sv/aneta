import React from 'react';

import prettyDate from "../../utils/pretty-date";
import {getDateObj} from "../../utils/timeuuid-to-date";
import {MessageContainer, Msg, Time} from './styles';

interface MessageProps {
  id: string;
  msg: string;
  owner: number;
}

const Message: React.FC<MessageProps> = ({id, msg, owner}) => {
    return (
      <MessageContainer owner={owner >= 0.5}>
        <Msg>{msg}</Msg>
        <Time>
          {prettyDate(
            getDateObj(id).toISOString()
          )}
        </Time>
      </MessageContainer>
    );
};

export default Message;
