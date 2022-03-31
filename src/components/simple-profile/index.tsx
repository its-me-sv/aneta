import React from 'react';

import suraj from "../../assets/me.jpg";

import {
    Container,
    ImageContainer,
    ProfileImage,
    Status,
    ProfileDetails,
    NameText,
    EmailText
} from './styles';

interface SimpleProfileProps {}

const SimpleProfile: React.FC<SimpleProfileProps> = () => {
    return (
      <Container>
        <ImageContainer>
          <ProfileImage src={suraj} />
          <Status status="offline" />
        </ImageContainer>
        <ProfileDetails>
          <NameText>Suraj Vijay</NameText>
          <EmailText>surajvijay@email.com</EmailText>
        </ProfileDetails>
      </Container>
    );
};

export default SimpleProfile;
