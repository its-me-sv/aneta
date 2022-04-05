import React from 'react';
import {useNavigate} from "react-router-dom";

import {Container, Body, Footer} from './styles';

import NavHeader from '../nav-header';
import Option from '../option';
import HorizontalLine from '../horizontal-line';
import SimpleProfile from '../simple-profile';

import {useUserNavContext} from '../../contexts/user-nav.context';

const destinationMapper = [
  "user/dashboard",
  "user/chat",
];

interface NavUserProps {}

const NavUser: React.FC<NavUserProps> = () => {
    const navigate = useNavigate();
    const {uni, changeUni} = useUserNavContext();
    const handleClick = (val: number) => {
      changeUni!(val);
      navigate(`../${destinationMapper[val]}`);
    };
    return (
      <Container>
        <NavHeader orgName={"Organisation name"} />
        <Body>
          {[0, 0].map((_, idx) => (
            <span key={idx} onClick={() => handleClick(idx)}>
              <Option variant={idx} active={uni === idx} />
            </span>
          ))}
        </Body>
        <Footer>
          <HorizontalLine />
          <SimpleProfile variant={1} />
        </Footer>
      </Container>
    );
};

export default NavUser;
