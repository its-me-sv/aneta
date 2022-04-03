import React from "react";

import { Section, SectionContent, Content } from "../hr-sections/styles";

import HRSections from "../hr-sections";
import { VrtclLn } from "../switch-form";

interface HRFinancialProps {
  onPress: () => void;
}

const HRFinancial: React.FC<HRFinancialProps> = ({onPress}) => {
  return (
    <Section onClick={onPress}>
      <HRSections variant={5} />
      <SectionContent>
        <Content>
          <span>Total</span>
          <span>8</span>
        </Content>
        <div>
          <VrtclLn />
        </div>
        <Content>
          <span>Today</span>
          <span>4</span>
        </Content>
      </SectionContent>
    </Section>
  );
};

export default HRFinancial;
