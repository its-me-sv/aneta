import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {Container, Body, Footer} from './styles';

import NavHeader from '../nav-header';
import Option from '../option';
import HorizontalLine from '../horizontal-line';
import SimpleProfile from '../simple-profile';

import {useUserNavContext} from '../../contexts/user-nav.context';

const destinationMapper = [
  "dashboard", 
  "chat",
  "projects",
  "resources",
  "financial",
  "settings"
];

interface NavHrProps {}

const NavHr: React.FC<NavHrProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { uni, changeUni } = useUserNavContext();
  const handleClick = (val: number) => {
    changeUni!(val);
    navigate(`../organisation/${params.orgName}/${destinationMapper[val]}`);
  };
  return (
    <Container>
      <NavHeader orgName={params.orgName} />
      <Body>
        {[0, 0, 0, 0, 0, 0].map((_, idx) => (
          <span key={idx} onClick={() => handleClick(idx)}>
            <Option fromHr={true} variant={idx} active={uni === idx} />
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

export default NavHr;
