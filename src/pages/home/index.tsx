import React from 'react';

import {
  HomePageContainer,
  FormContainer,
  FirstText,
  SecondText,
  LeftContainer,
  RightContainer,
  VrtclLn,
  RightTop,
  SwitchText,
  InputField,
  InputLabel,
  StyledInput,
  RightMid,
  RightEnd,
} from "./styles";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
      <HomePageContainer>
        <FormContainer>
          <LeftContainer>
            <FirstText>A</FirstText>
            <SecondText>neta</SecondText>
          </LeftContainer>
          <RightContainer>
            <RightTop>
              <SwitchText active={true}>Login</SwitchText>
              <VrtclLn />
              <SwitchText active={false}>Create</SwitchText>
            </RightTop>
            <RightMid>
              <InputField>
                <InputLabel>Organisation Name</InputLabel>
                <StyledInput type="text" />
              </InputField>
              <InputField>
                <InputLabel>Password</InputLabel>
                <StyledInput type="password" />
              </InputField>
            </RightMid>
            <RightEnd>Login</RightEnd>
          </RightContainer>
        </FormContainer>
      </HomePageContainer>
    );
};

export default HomePage;
