import React from 'react';

import {
  HomePageContainer,
  FormContainer,
  FirstText,
  SecondText,
  LeftContainer,
  RightContainer,
  RightEnd,
} from "./styles";

import OrganisationFormLogin from '../../components/org-login-form';
import OrganisationFormCreate from '../../components/org-create-form';
import SwitchForm from "../../components/switch-form";

import {useSwitchContext} from "../../contexts/switch.context";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const {isLogin} = useSwitchContext();
    return (
      <HomePageContainer>
        <FormContainer>
          <LeftContainer>
            <div>
              <FirstText>A</FirstText>
              <SecondText>neta</SecondText>
            </div>
          </LeftContainer>
          <RightContainer>
            <SwitchForm />
            {!isLogin ? <OrganisationFormCreate /> : <OrganisationFormLogin />}
          </RightContainer>
        </FormContainer>
      </HomePageContainer>
    );
};

export default HomePage;
