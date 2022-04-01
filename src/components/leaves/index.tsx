import React from "react";

import Section, {SectionCaption} from '../section';

interface LeavesProps {}

const Leaves: React.FC<LeavesProps> = () => {
    return (
      <div>
        <Section name="Leaves taken" />
        <SectionCaption>14</SectionCaption>
      </div>
    );
};

export default Leaves;
