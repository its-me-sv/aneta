import React from "react";

import { Section, SectionContent, Content } from "../hr-sections/styles";

import HRSections from "../hr-sections";
import { VrtclLn } from "../switch-form";

interface HRResourcesProps {
  onPress: () => void;
}

const HRResources: React.FC<HRResourcesProps> = ({onPress}) => {
  return (
    <Section onClick={onPress}>
      <HRSections variant={4} />
      <SectionContent>
        <Content>
          <span>Total</span>
          <span>8</span>
        </Content>
        <div>
          <VrtclLn />
        </div>
        <Content>
          <span>Employee</span>
          <span>4</span>
        </Content>
        <div>
          <VrtclLn />
        </div>
        <Content>
          <span>Candidates</span>
          <span>4</span>
        </Content>
      </SectionContent>
    </Section>
  );
};

export default HRResources;
