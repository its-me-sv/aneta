import React from "react";
import styled from "styled-components";

import Section from "../section";
import Button from "../button";

const ActionButtons = styled.div`
  margin-top: 1%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

interface HRActionsProps {}

const HRActions: React.FC<HRActionsProps> = () => {
  const onClick = () => window.alert("button clicked");
  return (
    <div>
      <Section name="Actions" />
      <ActionButtons>
        <Button
          onPress={onClick}
          disabled={false}
          variant={2}
          text="Promote"
        />
        <Button
          onPress={onClick}
          disabled={false}
          variant={1}
          text="Give salary"
        />
        <Button
          onPress={onClick}
          disabled={false}
          variant={4}
          text="Assign to project"
        />
        <Button
          onPress={onClick}
          disabled={false}
          variant={5}
          text="Provide holiday"
        />
        <Button
          onPress={onClick}
          disabled={false}
          variant={3}
          text="Accept leave request"
        />
      </ActionButtons>
    </div>
  );
};

export default HRActions;
