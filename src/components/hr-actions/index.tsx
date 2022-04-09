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

interface HRActionsProps {
  joined?: boolean;
}

const HRActions: React.FC<HRActionsProps> = ({joined}) => {
  const onClick = () => window.alert("button clicked");
  return (
    <div>
      <Section name="Actions" />
      <ActionButtons>
        {!joined && (
          <>
            <Button
              onPress={onClick}
              disabled={false}
              variant={2}
              text="Hire"
            />
            <Button
              onPress={onClick}
              disabled={false}
              variant={3}
              text="Deny"
            />
          </>
        )}
        {joined && (
          <>
            <Button onPress={onClick} disabled={false} variant={2} text="Give salary" />
            <Button onPress={onClick} disabled={false} variant={1} text="Assign to project" />
            <Button onPress={onClick} disabled={false} variant={5} text="Accept leave request" />
            <Button onPress={onClick} disabled={false} variant={3} text="Fire" />
          </>          
        )}
      </ActionButtons>
    </div>
  );
};

export default HRActions;
