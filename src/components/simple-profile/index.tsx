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
  showEmail?: boolean;
}

const SimpleProfile: React.FC<SimpleProfileProps> = ({variant, showEmail}) => {
    return (
      <Container>
        <ImageContainer>
          <ProfileImage src={suraj} />
          <Status variant={variant} status="offline" />
        </ImageContainer>
        <ProfileDetails>
          <NameText variant={variant}>Suraj Vijay</NameText>
          <div>
            <EmailText variant={variant}>
              {variant === 1 ? `surajvijay@email.com ` : `Developer `}
            </EmailText>
            {variant === 2 && showEmail && (
              <EmailText variant={variant}>
                | surajvijay@email.com
              </EmailText>
            )}
          </div>
        </ProfileDetails>
      </Container>
    );
};

export default SimpleProfile;
