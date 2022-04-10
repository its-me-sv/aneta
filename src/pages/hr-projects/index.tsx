import React, {
  useEffect, useState,
  KeyboardEventHandler, MutableRefObject, useRef
} from "react";
import axios from "axios";

import {
  MainContainer,
  RightContainer,
  ResourcesWrapper,
  TopButton,
} from "./styles";

import NavHR from "../../components/nav-hr";
import {StyledInput} from "../../components/input";
import Button from "../../components/button";
import ProjectForm from '../../components/project-form';
import ProjectBrief from "../../components/project-brief";
import {
  ActiveProjects, 
  StalledProjects, 
  CompleteProjects
} from '../../components/projects';

import {useUserNavContext} from "../../contexts/user-nav.context";
import {useProjectsContext} from "../../contexts/projects.context";
import {useAPIContext} from '../../contexts/api.context';
import {useOrganisationContext} from '../../contexts/organisation.context';

interface HRProjectsPageProps {}

const HRProjectsPage: React.FC<HRProjectsPageProps> = () => {
  const {changeUni} = useUserNavContext();
  const {
    currProject, setCurrProject,
    fetchActive, fetchStalled, fetchCompleted,
    resetProjects
  } = useProjectsContext();
  const {REST_API} = useAPIContext();
  const {setLoading, token, orgName} = useOrganisationContext();
  const [showForm, setShowForm] = useState<boolean>(false);
  const projRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    changeUni!(3);
    fetchActive!();
    fetchStalled!();
    fetchCompleted!();
    return resetProjects;
  }, []);

  const findByName: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key!== "Enter") return;
    if (projRef.current.value.length < 1) 
      return window.alert("Field empty");
    setLoading!(true);
    const projName = projRef.current.value;
    axios.post(
      `${REST_API}/projects/find`,
      {orgName, projName},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(({data}) => {
      setLoading!(false);
      setCurrProject!(data.id);
    }).catch(err => {
      setLoading!(false);
      window.alert(JSON.stringify(err?.response?.data));
    });
  };

  return (
    <MainContainer>
      <NavHR />
      {showForm && <ProjectForm onClose={() => setShowForm(false)} />}
      {currProject.length > 0 && <ProjectBrief />}
      <RightContainer>
        <TopButton>
          <Button
            text="+ New Project"
            variant={2}
            onPress={() => setShowForm(true)}
            disabled={false}
          />
        </TopButton>
        <StyledInput 
          placeholder="Name" 
          ref={projRef}
          onKeyDown={findByName}
        />
        <ResourcesWrapper>
          <ActiveProjects />
          <StalledProjects />
          <CompleteProjects />
        </ResourcesWrapper>
      </RightContainer>
    </MainContainer>
  );
};

export default HRProjectsPage;
