import React, {useState} from 'react';
import styled from 'styled-components';

import Section from "../section";
import Input from '../input';
import Button from '../button';

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 50%;
  gap: 0.5rem;
`;

interface EditUserFormProps {}

const EditUserForms: React.FC<EditUserFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <Section name="Personal" />
      <Wrapper>
        <Input label="Name" name="Name" value={name} setValue={setName} />
        <Input label="Email" name="Email" value={email} setValue={setEmail} />
        <Input
          label="Password"
          name="Password"
          value={password}
          setValue={setPassword}
          isPass
        />
        <Button variant={4} text="Change profile picture" disabled={false} onPress={() => {}} />
        <Button variant={2} text="UPDATE" disabled={false} onPress={() => {}} />
      </Wrapper>
    </div>
  );
};

export default EditUserForms;
