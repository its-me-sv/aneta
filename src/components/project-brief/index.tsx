import React, {useEffect, useState, useRef, ChangeEvent} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

import {Container, Wrapper, CloseIcon} from "../resource-overview/styles";
import {Text, ActionsContainer, DescBox} from './styles';

import Section from '../section';
import Button from '../button';
import JoinedOn from '../joined-on';

import {useProjectsContext} from '../../contexts/projects.context';
import {useAPIContext} from '../../contexts/api.context';
import {useOrganisationContext} from '../../contexts/organisation.context';

interface ProjectBriefProps {}

const ProjectBrief: React.FC<ProjectBriefProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {currProject: projId, setCurrProject} = useProjectsContext();
  const {REST_API} = useAPIContext();
  const {setLoading, token} = useOrganisationContext();
  const [name, setName] = useState<string>('-------');
  const [desc, setDesc] = useState<string>('-------');
  const descRef = useRef<string>("-------");
  const [resc, setResc] = useState<Array<string>>([]);
  const [stat, setStat] = useState<number>(0);

  useEffect(() => {
    if (!projId.length) return;
    setLoading!(true);
    axios.post(`${REST_API}/projects/overview`, {id: projId}, {
      headers: {Authorization: `Bearer ${token}`}
    }).then(({data}) => {
      setName(data.name);
      setDesc(data.description);
      descRef.current = data.description;
      setStat(data.status);
      setResc(data.resources || []);
      setLoading!(false);
    }).catch(() => setLoading!(false));
  }, [projId]);

  const onClose = () => setCurrProject!('');
  const handleDesc = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setDesc(event.target.value);

  const takeToRescources = () => {
    navigate(`../organisation/${params.orgName}/resources?id=${projId}`);
    setCurrProject!('');
  };

  const addResource = () => {
    const resourceEmail = window.prompt("Email of resource");
    window.alert(resourceEmail);
  };

  return (
    <Container>
      <Wrapper>
        <CloseIcon onClick={onClose}>X</CloseIcon>
        <Section name="Name" />
        <Text>{name}</Text>
        <Section name="Description" />
        <DescBox 
          value={desc} 
          onChange={handleDesc}
          rows={7}
          cols={84}
        />
        <Button
          variant={2}
          text="Update"
          onPress={() => {}}
          disabled={descRef.current === desc}
        />
        <Section name="Actions" />
        <ActionsContainer>
          <Button
            variant={3}
            text="Stall"
            onPress={() => {}}
            disabled={stat === 0}
          />
          <Button
            variant={4}
            text="Resume"
            onPress={() => {}}
            disabled={stat === 1}
          />
          <Button
            variant={5}
            text="Complete"
            onPress={() => {}}
            disabled={stat === 2}
          />
        </ActionsContainer>
        <JoinedOn id={projId} forProject />
        <Section name="Resources" />
        <ActionsContainer>
          <span>{resc.length}</span>
          <Button
            variant={0}
            text="Add resource"
            onPress={addResource}
            disabled={false}
          />
        </ActionsContainer>
        <Button
          variant={0}
          text="View resources"
          onPress={takeToRescources}
          disabled={false}
        />
      </Wrapper>
    </Container>
  );
};

export default ProjectBrief;
