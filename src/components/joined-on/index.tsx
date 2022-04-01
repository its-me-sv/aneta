import React from 'react';

import Section, {SectionCaption} from '../section';
import prettyDate from "../../utils/pretty-date";
import {getDateObj} from "../../utils/timeuuid-to-date";

interface JoinedOnProps {}

const JoinedOn: React.FC<JoinedOnProps> = () => {
    return (
      <div>
        <Section name="Joined on" />
        <SectionCaption>
          {prettyDate(
            getDateObj("9467eb20-a622-11ec-9631-773bd57f3429").toISOString()
          )}
        </SectionCaption>
      </div>
    );
};

export default JoinedOn;
