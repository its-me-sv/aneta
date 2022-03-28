import React from 'react';

import {
  HomePageContainer,
  FormContainer,
  FirstText,
  SecondText,
  LeftContainer,
  RightContainer,
  VrtclLn,
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
            <div className="right-top">
              <span>Login</span>
              <VrtclLn />
              <span>Create</span>
            </div>
            <div className="right-mid">
              <div className="input-field">
                <label>Organisation Name</label>
                <input type="text" />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input type="password" />
              </div>
            </div>
            <div className="right-end"></div>
          </RightContainer>
        </FormContainer>
      </HomePageContainer>
    );
};

export default HomePage;
