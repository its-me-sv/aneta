import React from 'react';
import styled from 'styled-components';

import logoutIcon from "../../assets/icons/logout.png";

const LogoutSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.42rem;
  right: 1%;
  top: 1%;
  cursor: pointer;
`;

const LogoutIcon = styled.img.attrs({
  alt: '',
  src: logoutIcon
})`
  width: 2rem;
  height: 2rem;
`;

const LogoutText = styled.span`
  font-family: bahnschrift;
  font-size: 1.4rem;
  opacity: 0.7;
`;

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
    const onClick = () => {
      window.alert("Logout clicked");
    };
    
    return (
      <LogoutSection onClick={onClick}>
        <LogoutIcon />
        <LogoutText>Logout</LogoutText>
      </LogoutSection>
    );
};

export default Logout;
