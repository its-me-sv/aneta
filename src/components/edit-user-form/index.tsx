import React, {useState} from 'react';

import Section from "../section";
import Input from '../input';
import Button from '../button';

import {Wrapper, ImageArea, ProfileImage} from './styles';

interface EditUserFormProps {
  fromOrg?: boolean;
}

const EditUserForms: React.FC<EditUserFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>();

  const getImageUrl = () => {
    setImageUrl(window.prompt("URL of image: ") as string);
  };

  return (
    <div>
      <Section name="Personal" />
      <Wrapper>
        <Input label="Name" name="Name" value={name} setValue={setName} />
        <Input
          label="Password"
          name="Password"
          value={password}
          setValue={setPassword}
          isPass
        />
        <ImageArea>
          <Button
            variant={4}
            text="Change profile picture"
            disabled={false}
            onPress={getImageUrl}
          />
          <ProfileImage src={imageUrl} />
        </ImageArea>
        <Button variant={2} text="UPDATE" disabled={false} onPress={() => {}} />
      </Wrapper>
    </div>
  );
};

export default EditUserForms;
