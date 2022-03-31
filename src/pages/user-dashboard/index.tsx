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

const LogoText = styled.text`
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
  gap: 1rem;
  position: absloute;
  margin-top: 21%;
  padding: 7%;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
`;

const OptionImage = styled.img.attrs({
  alt: "",
})`
  width: 2rem;
  height: 2rem;
  filter: invert(100%);
`;

const OptionText = styled.span`
  color: #f0f2f5;
  font-size: 1.2rem;
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
`;

const ProfileImage = styled.img.attrs({
    alt:""
})`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const NameText = styled.span`
  font-family: calibri;
  font-size: 1.4rem;
  color: #f0f2f5;
`;

const EmailText = styled.span`
  font-family: bahnschrift;
  font-size: 0.84rem;
  color: #f0f2f5;
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
              <OptionImage src={dashboardIcon} />
              <OptionText>Dashboard</OptionText>
            </OptionContainer>
            <OptionContainer>
              <OptionImage src={chatIcon} />
              <OptionText>Chat</OptionText>
            </OptionContainer>
          </LeftBody>
          <LeftFooter>
            <HorizontalLine />
            <SimpleProfile>
              <div>
                <ProfileImage src={suraj} />
                <div className="status" />
              </div>
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
