import styled from "styled-components";

export const ColumnNames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: calibri;
  font-size: 1.6rem;
  color: #1877f2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const Wrapper = styled.div`
  padding-top: 0.5%;
`;

export const Rows = styled.div`
  max-height: 80vh;
  overflow-y: auto;
`;

export const MoreText = styled.span`
  margin-left: 50%;
  font-family: arial;
  font-size: 1rem;
  cursor: pointer;
`;
