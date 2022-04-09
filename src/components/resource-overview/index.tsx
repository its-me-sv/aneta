import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  Container, Wrapper, Header, Body, CloseIcon
} from './styles';

import SimpleProfile from '../simple-profile';
import Button from '../button';
import JoinedOn from '../joined-on';
import AssignedTo from '../assigned-to';
import HRActions from '../hr-actions';
import Leaves from '../leaves';
import ResourcesSkills from "../resources-skills";
import Section from '../section';

import {useAPIContext} from '../../contexts/api.context';
import {useOrganisationContext} from '../../contexts/organisation.context';

interface ResourceOverviewProps {
  currId: string;
  onClose: () => void;
}

const ResourceOverview: React.FC<ResourceOverviewProps> = ({onClose, currId}) => {
    const {REST_API} = useAPIContext();
    const {token, setLoading} = useOrganisationContext();
    const [skills, setSkills] = useState<Array<string>>([]);
    const [projects, setProjects] = useState<Array<string>>([]);
    const [joined, setJoined] = useState<boolean>(false);

    useEffect(() => {
      setLoading!(true);
      axios.post(
        `${REST_API}/organisation/resource-overview`, 
        {id: currId},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(({data}) => {
        setSkills(data.skills);
        setProjects(data.projects);
        setJoined(data.joined);
        setLoading!(false);
      }).catch(() => setLoading!(false));
    }, []);
    
    return (
      <Container>
        <Wrapper>
          <CloseIcon onClick={onClose}>X</CloseIcon>
          <Header>
            <SimpleProfile id={currId} variant={2} showEmail />
            <Button
              variant={4}
              text="Message"
              disabled={false}
              onPress={() => {}}
            />
          </Header>
          <Body>
            {joined && <JoinedOn id={currId} />}
            {joined && <Leaves id={currId} />}
            <Section name="Skills" />
            <ResourcesSkills skills={skills} />
            {joined && <AssignedTo fromHr={projects} />}
            <HRActions />
          </Body>
        </Wrapper>
      </Container>
    );
}

export default ResourceOverview;
