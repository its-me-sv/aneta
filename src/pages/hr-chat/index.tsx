import React, {useEffect} from "react";
import styled from "styled-components";

import NavHr from "../../components/nav-hr";

import {useUserNavContext} from "../../contexts/user-nav.context";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

interface HRChatPageProps {}

const HRChatPage: React.FC<HRChatPageProps> = () => {
    const {changeUni} = useUserNavContext();

    useEffect(() => {
      changeUni!(1);
    }, []);

    return (
        <MainContainer>
            <NavHr />
            <h1>HR Chat Area</h1>
        </MainContainer>
    );
};

export default HRChatPage;
