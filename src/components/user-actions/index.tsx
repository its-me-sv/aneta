import React from "react";
import styled from "styled-components";

import Section from "../section";
import Button from "../button";

const ActionButtons = styled.div`
  margin-top: 1%;
  display: flex;
  gap: 1rem;
`;

interface UserActionsProps {}

const UserActions: React.FC<UserActionsProps> = () => {
    const onClick = () => window.alert("button clicked");
    return (
      <div>
        <Section name="Actions" />
        <ActionButtons>
          <Button
            onPress={onClick}
            disabled={false}
            variant={1}
            text="SET AWAY"
          />
          <Button
            onPress={onClick}
            disabled={false}
            variant={2}
            text="SET ONLINE"
          />
          <Button
            onPress={onClick}
            disabled={false}
            variant={3}
            text="REQUEST LEAVE"
          />
        </ActionButtons>
      </div>
    );
};

export default UserActions;
