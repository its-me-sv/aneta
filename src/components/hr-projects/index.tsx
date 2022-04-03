import React from 'react';

import {
  Section,
  SectionContent,
  Content,
} from '../hr-sections/styles';

import HRSections from '../hr-sections';
import {VrtclLn} from '../switch-form';

interface HRProjectsProps {
  onPress: () => void;
}

const HRProjects: React.FC<HRProjectsProps> = ({onPress}) => {
    return (
      <Section onClick={onPress}>
        <HRSections variant={3} />
        <SectionContent>
          <Content>
            <span>Active</span>
            <span>4</span>
          </Content>
          <div>
            <VrtclLn />
          </div>
          <Content>
            <span>Stalled</span>
            <span>4</span>
          </Content>
          <div>
            <VrtclLn />
          </div>
          <Content>
            <span>Completed</span>
            <span>4</span>
          </Content>
        </SectionContent>
      </Section>
    );
};

export default HRProjects;
