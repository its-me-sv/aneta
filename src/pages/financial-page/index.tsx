import React, {useEffect} from 'react';
import styled from 'styled-components';

import NavHr from '../../components/nav-hr';

import {useUserNavContext} from '../../contexts/user-nav.context';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
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
                Finance Page
            </RightContainer>
        </MainContainer>
    );
};

export default FinancialPage;
