import React from 'react';
import styled from 'styled-components';

import HorizontalLine from "../horizontal-line";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.span`
  font-family: roboto;
  font-size: 2.4rem;
  color: #f0f2f5;
  font-weight: bold;
  text-align: center;
`;

interface NavHeaderProps {}

const NavHeader: React.FC<NavHeaderProps> = () => {
    return (
        <HeaderContainer>
            <LogoText>Aneta</LogoText>
            <HorizontalLine />
        </HeaderContainer>
    );
};

export default NavHeader;
