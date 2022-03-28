import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #1877f2;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 1rem;
  background-color: #f0f2f5;
`;

export const LeftContainer = styled.div`
  padding: 3.6rem 1.8rem;
  padding-right: 1rem;
  border-right: 1px solid rgba(0, 0, 0, 0.8);
`;

export const FirstText = styled.span`
  font-family: roboto;
  color: #1877f2;
  font-weight: bold;
  font-size: 6rem;
`;

export const SecondText = styled.span`
  font-family: roboto;
  color: #1877f2;
  font-weight: bold;
  font-size: 3rem;
`;

export const VrtclLn = styled.span`
  border-left: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 2rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  padding: 3.5px 0px;
`;

export const SwitchText = styled.span<{ active: boolean }>`
  font-family: calibri;
  font-size: 1.8rem;
  opacity: 0.9;
  cursor: pointer;
  ${(props) => props.active && `color: #1877f2;`}
`;

export const RightMid = styled.div`
  display: flex;
  padding: 0.84rem;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

export const InputField = styled.div`
  display: grid;
`;

export const InputLabel = styled.label`
  font-family: "bahnschrift";
  font-size: 1.2rem;
  opacity: 0.84;
`;

export const StyledInput = styled.input`
  border-radius: 0.3rem;
  padding: 3px;
  font-size: 1.2rem;
  height: 1.8rem;
`;

export const RightEnd = styled.div`
  background-color: #42b72a;
  display: flex;
  justify-content: center;
  color: #f1f2f6;
  padding: 0.1rem;
  font-family: calibri;
  font-size: 1.4rem;
  cursor: pointer;
`;
