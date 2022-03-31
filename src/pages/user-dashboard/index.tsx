import React from 'react';
import styled from 'styled-components';

import dashboardIcon from '../../assets/icons/dashboard.png';
import chatIcon from '../../assets/icons/chat.png';
import suraj from "../../assets/me.jpg";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const LeftContainer = styled.div`
  background-color: #1977f3;
  height: 100vh;
`;

const LeftHeader = styled.div`
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

const HorizontalLine = styled.div`
  border-bottom: 2px solid #f0f2f5;
  opacity: 0.6;
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;
  position: absloute;
  padding: 7%;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
`;

const OptionImage = styled.img<{curr?: boolean}>`
  width: 2rem;
  height: 2rem;
  filter: invert(100%);
  ${(props) => props?.curr && `filter: invert(100%) drop-shadow(0px 7px 3px black);`}
`;

const OptionText = styled.p<{curr?: boolean}>`
  color: #f0f2f5;
  font-size: 1.2rem;
  ${(props) => props.curr && `text-shadow: 10px 10px 24px #000000;`}
`;

const LeftFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const SimpleProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  margin-top: 0.2rem;
  padding-left: 3.5px;
`;

const ImageContainer = styled.div``;

const ProfileImage = styled.img.attrs({
    alt:""
})`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

type Statuses = 'online' | 'away' | 'offline';

const Status = styled.div<{status: Statuses}>`
  width: 0.84rem;
  height: 0.84rem;
  border: 0.18rem solid #1877f2;
  position: absolute;
  border-radius: 50%;
  bottom: 0;
  ${(props) => {
      switch(props.status) {
          case 'away': return "background-color: #d1d15b;";
          case 'offline': return "background-color: #c74040;";
          default: return "background-color: #42b72a;";
      }
  }};
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: #f0f2f5;
`;

const NameText = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
  opacity: 0.9;
`;

const EmailText = styled.span`
  font-family: bahnschrift;
  font-size: 0.84rem;
  opacity: 0.84;
`;

interface UserDashboardPageProps {}

const UserDashboardPage: React.FC<UserDashboardPageProps> = () => {
    return (
      <MainContainer>
        <LeftContainer>
          <LeftHeader>
            <LogoText>Aneta</LogoText>
            <HorizontalLine />
          </LeftHeader>
          <LeftBody>
            <OptionContainer>
              <OptionImage src={dashboardIcon} curr />
              <OptionText curr>Dashboard</OptionText>
            </OptionContainer>
            <OptionContainer>
              <OptionImage src={chatIcon} />
              <OptionText>Chat</OptionText>
            </OptionContainer>
          </LeftBody>
          <LeftFooter>
            <HorizontalLine />
            <SimpleProfile>
              <ImageContainer>
                <ProfileImage src={suraj} />
                <Status status="offline" />
              </ImageContainer>
              <ProfileDetails>
                <NameText>Suraj Vijay</NameText>
                <EmailText>surajvijay@email.com</EmailText>
              </ProfileDetails>
            </SimpleProfile>
          </LeftFooter>
        </LeftContainer>
        <div className="right-container">SOME RANDOM STUFF</div>
      </MainContainer>
    );
};

export default UserDashboardPage;
