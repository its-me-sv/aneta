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
  hire: () => void;
  deny: () => void;
}

const HRActions: React.FC<HRActionsProps> = ({joined, hire, deny}) => {
  const onClick = () => window.alert("button clicked");
  return (
    <div>
      <Section name="Actions" />
      <ActionButtons>
        {!joined && (
          <>
            <Button
              onPress={hire}
              disabled={false}
              variant={2}
              text="Hire"
            />
            <Button
              onPress={deny}
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
          </>          
        )}
      </ActionButtons>
    </div>
  );
};

export default HRActions;
