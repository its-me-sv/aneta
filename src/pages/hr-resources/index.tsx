import React, {useEffect} from 'react';
import styled from "styled-components";

import NavHR from "../../components/nav-hr";
import {StyledInput} from "../../components/input";
import Section from '../../components/section';
import Resource from '../../components/resource';
import Button from '../../components/button';

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1% 1%;
`;

const ResourcesWrapper = styled.div`
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResourcesContainer = styled.div`
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 32vh;
  max-height: 32vh;
  overflow-y: auto;
  gap: 0.42rem;
`;

interface HRResourcesPageProps {}

const HRResourcesPage: React.FC<HRResourcesPageProps> = () => {
    const {changeUni} = useUserNavContext();

    useEffect(() => {
      changeUni!(4);
    }, []);

    return (
      <MainContainer>
        <NavHR />
        <RightContainer>
          <StyledInput placeholder="Name | Email | Role" />
          <ResourcesWrapper>
            <div>
              <Section name="Employee" />
              <ResourcesContainer>
                {Array(42)
                  .fill(0)
                  .map((_, idx) => (
                    <Resource key={idx} />
                  ))}
                <Button
                  variant={4}
                  text="Load more"
                  disabled={false}
                  onPress={() => {}}
                />
              </ResourcesContainer>
            </div>
            <div>
              <Section name="Candidates" />
              <ResourcesContainer>
                {Array(42)
                  .fill(0)
                  .map((_, idx) => (
                    <Resource key={idx} />
                  ))}
                <Button
                  variant={4}
                  text="Load more"
                  disabled={false}
                  onPress={() => {}}
                />
              </ResourcesContainer>
            </div>
          </ResourcesWrapper>
        </RightContainer>
      </MainContainer>
    );
};

export default HRResourcesPage;
