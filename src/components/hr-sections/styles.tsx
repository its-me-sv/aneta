import styled from "styled-components";

export const Section = styled.div`
  border: 2px solid #1877f2;
  padding: 1%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.84);
  -webkit-box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.84);
  -moz-box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.84);
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.8rem;
  padding-top: 2%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: bahnschrift;
  font-size: 1.2rem;
  opacity: 0.8;
`;
