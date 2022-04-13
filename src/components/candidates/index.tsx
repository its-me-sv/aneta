import React from "react";
import styled from "styled-components";

import Section from "../section";
import Resource from "../resource";
import Button from "../button";

import {useRescourcesContext} from "../../contexts/resources.context";

export const ResourcesContainer = styled.div`
  padding: 1%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(14, 1fr);
  height: 32vh;
  max-height: 32vh;
  overflow-y: auto;
  gap: 0.42rem;
`;

interface CandidatesProps {}

const Candidates: React.FC<CandidatesProps> = () => {
  const {candidates, fetchCandidates, candidatesPage} = useRescourcesContext();

  return (
    <div>
      <Section name="Candidates" />
      <ResourcesContainer>
        {candidates?.map(({id}, idx) => (
          <Resource key={idx} id={id} isCandidate/>
        ))}
        {candidatesPage !== null && (
          <Button
            variant={4}
            text="Load more"
            disabled={false}
            onPress={fetchCandidates!}
          />
        )}
      </ResourcesContainer>
    </div>
  );
};

export default Candidates;
