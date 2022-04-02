import React, {Dispatch, SetStateAction, ChangeEvent} from "react";
import styled from 'styled-components';

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

export const StyledTextArea = styled.textarea`
  border-radius: 0.3rem;
  padding: 3px;
  font-size: 1.2rem;
  resize: none;
`;

interface InputProps {
  label: string;
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isPass?: boolean;
}

const Input: React.FC<InputProps> = ({label, name, value, setValue, isPass}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
    return (
      <InputField>
        <InputLabel>{label}</InputLabel>
        <StyledInput type={isPass ? "password": "text"} name={name} value={value} onChange={handleChange} />
      </InputField>
    );
};

export default Input;
