import React from 'react';

import {Container, Body, Footer} from './styles';

import NavHeader from '../nav-header';
import Option from '../option';
import HorizontalLine from '../horizontal-line';
import SimpleProfile from '../simple-profile';

import {useUserNavContext} from '../../contexts/user-nav.context';

interface NavUserProps {}

const NavUser: React.FC<NavUserProps> = () => {
    const {uni, changeUni} = useUserNavContext();
    return (
      <Container>
        <NavHeader />
        <Body>
          {[0, 0].map((_, idx) => (
            <span key={idx} onClick={() => changeUni!(idx)}>
              <Option variant={idx} active={uni === idx} />
            </span>
          ))}
        </Body>
        <Footer>
          <HorizontalLine />
          <SimpleProfile />
        </Footer>
      </Container>
    );
};

export default NavUser;
