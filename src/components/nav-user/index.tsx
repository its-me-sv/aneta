import React from 'react';

import {Container, Body, Footer} from './styles';

import NavHeader from '../nav-header';
import Option from '../option';
import HorizontalLine from '../horizontal-line';
import SimpleProfile from '../simple-profile';

interface NavUserProps {}

const NavUser: React.FC<NavUserProps> = () => {
    return (
      <Container>
        <NavHeader />
        <Body>
          <Option variant={0} active={true} />
          <Option variant={1} active={false} />
        </Body>
        <Footer>
          <HorizontalLine />
          <SimpleProfile />
        </Footer>
      </Container>
    );
};

export default NavUser;
