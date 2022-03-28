import React from 'react';
import {useParams} from 'react-router-dom';

import {
  HomePageContainer,
  FormContainer,
  LeftContainer,
  FirstText,
  SecondText,
  RightContainer,
  RightEnd,
  CaptionText,
} from "../home/styles";

import UserFormLogin from "../../components/user-login-form";
import UserFormCreate from "../../components/user-create-form";
import SwitchForm from "../../components/switch-form";

import {useSwitchContext} from "../../contexts/switch.context";

interface UserHomeProps {}

const UserHomePage: React.FC<UserHomeProps> = () => {
    const {isLogin} = useSwitchContext();
    const params = useParams();

    return (
      <HomePageContainer>
        <FormContainer>
          <LeftContainer>
            <div>
              <FirstText>A</FirstText>
              <SecondText>neta</SecondText>
            </div>
            <CaptionText>for</CaptionText>
            <CaptionText>{params.orgName}</CaptionText>
          </LeftContainer>
          <RightContainer>
            <SwitchForm />
            {!isLogin ? <UserFormCreate /> : <UserFormLogin />}
            <RightEnd>{isLogin ? "Login" : "Create"}</RightEnd>
          </RightContainer>
        </FormContainer>
      </HomePageContainer>
    );
};

export default UserHomePage;
