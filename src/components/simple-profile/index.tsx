import React, {useEffect, useState} from 'react';
import axios from 'axios';

import defaultImg from "../../assets/me.jpg";

import {
  Container, ImageContainer, ProfileImage, Status,
  ProfileDetails, NameText, EmailText, Statuses
} from './styles';

import {useAPIContext} from '../../contexts/api.context';
import {useOrganisationContext} from '../../contexts/organisation.context';
import {useUserContext} from '../../contexts/user.context';

interface SimpleProfileProps {
  variant: number;
  showEmail?: boolean;
  id?: string;
}

const statusMapper: Array<Statuses>  = ["offline", "away", "online"];

const SimpleProfile: React.FC<SimpleProfileProps> = ({variant, showEmail, id}) => {
    const {REST_API} = useAPIContext();
    const {token: otkn, id: hrId} = useOrganisationContext();
    const {token: utkn} = useUserContext();

    const [imageUrl, setImageUrl] = useState<string>('');
    const [status, setStatus] = useState<number>(0);
    const [name, setName] = useState<string>('-------');
    const [email, setEmail] = useState<string>('-------');
    const [role, setRole] = useState<string>('-------');
    
    useEffect(() => {
      const token = hrId.length > 0 ? otkn : utkn;
      axios.post(`${REST_API}/organisation/info`, {oid: id}, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(({data}) => {
        setImageUrl(data.profile_picture);
        setStatus(data.status);
        setName(data.creator_name);
        setEmail(data.email);
      }).catch(err => {
        if (err.response.data !== "Not found") return;
        axios.post(`${REST_API}/employee/info`, {id}, {
          headers: {Authorization: `Bearer ${token}`},
        })
        .then(({data}) => {
          setImageUrl(data.profile_picture);
          setStatus(data.status);
          setEmail(data.email);
          setName(data.name);
          setRole(data.role);
        })
        .catch(() => {});
      });
    }, []);

    return (
      <Container>
        <ImageContainer>
          <ProfileImage src={imageUrl.length ? imageUrl : defaultImg} />
          <Status variant={variant} status={statusMapper[status]} />
        </ImageContainer>
        <ProfileDetails>
          <NameText variant={variant}>{name}</NameText>
          <div>
            <EmailText variant={variant}>
              {variant === 1 ? `${email} ` : `${role} `}
            </EmailText>
            {variant === 2 && showEmail && (
              <EmailText variant={variant}>| {email}</EmailText>
            )}
          </div>
        </ProfileDetails>
      </Container>
    );
};

export default SimpleProfile;
