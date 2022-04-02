import styled from "styled-components";

export const Container = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
  margin: 0rem 0rem;
  height: 70vh;
  max-height: 70vh;
  overflow-y: auto;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;
  align-items: center;
  gap: 1rem;
`;