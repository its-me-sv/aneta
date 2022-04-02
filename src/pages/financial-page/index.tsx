import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavHr from '../../components/nav-hr';
import Transactions from '../../components/transactions';

import {useUserNavContext} from '../../contexts/user-nav.context';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 1%;
`;

interface FinancialPageProps {}

const FinancialPage: React.FC<FinancialPageProps> = () => {
    const {changeUni} = useUserNavContext();

    useEffect(() => {
        changeUni!(4);
    }, []);

    return (
      <MainContainer>
        <NavHr />
        <RightContainer>
          <Transactions />
        </RightContainer>
      </MainContainer>
    );
};

export default FinancialPage;
