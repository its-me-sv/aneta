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

interface SimpleProfileProps {
  variant: number;
}

const SimpleProfile: React.FC<SimpleProfileProps> = ({variant}) => {
    return (
      <Container>
        <ImageContainer>
          <ProfileImage src={suraj} />
          <Status variant={variant} status="offline" />
        </ImageContainer>
        <ProfileDetails>
          <NameText variant={variant}>Suraj Vijay</NameText>
          <EmailText variant={variant}>
            {variant === 1 ? `surajvijay@email.com` : `Developer`}
          </EmailText>
        </ProfileDetails>
      </Container>
    );
};

export default SimpleProfile;
