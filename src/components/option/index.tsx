import React from 'react';
import styled from 'styled-components';

import dashboardIcon from "../../assets/icons/dashboard.png";
import chatIcon from "../../assets/icons/chat.png";

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
`;

const OptionImage = styled.img<{ curr?: boolean }>`
  width: 2rem;
  height: 2rem;
  filter: invert(100%);
  ${(props) =>
    props?.curr && `filter: invert(100%) drop-shadow(0px 7px 3px black);`}
`;

const OptionText = styled.p<{ curr?: boolean }>`
  color: #f0f2f5;
  font-size: 1.2rem;
  ${(props) => props.curr && `text-shadow: 10px 10px 24px #000000;`}
`;

interface Variant {
  src: string,
  text: string
}

const variants: Array<Variant> = [
  {
    src: dashboardIcon,
    text: "Dashboard"
  },
  {
    src: chatIcon,
    text: "Chat"
  }
];

interface OptionProps {
  variant: number;
  active: boolean;
}

const Option: React.FC<OptionProps> = ({variant, active}) => {
    const {src, text} = variants[variant];
    return (
      <OptionContainer>
        <OptionImage src={src} curr={active} />
        <OptionText curr={active} >{text}</OptionText>
      </OptionContainer>
    );
};

export default Option;
