import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import numeral from 'numeral';

import {Section, SectionContent, Content} from "../hr-sections/styles";

import HRSections from "../hr-sections";
import {VrtclLn} from "../switch-form";

import {useAPIContext} from '../../contexts/api.context';
import {useOrganisationContext} from '../../contexts/organisation.context';

interface FinancialStats {
  today: string;
  total: string;
  transactions: string;
}

const defaultState: FinancialStats = {
  today: "-",
  total: "-",
  transactions: "-",
};

interface HRFinancialProps {
  onPress: () => void;
}

const HRFinancial: React.FC<HRFinancialProps> = ({onPress}) => {
  const {REST_API} = useAPIContext();
  const {token, orgName} = useOrganisationContext();
  const [state, setState] = useState<FinancialStats>(defaultState);
  const fetched = useRef<boolean>(false);

  const fetchData = () => {
    axios.post(`${REST_API}/transactions/stats`, {orgName}, {
      headers: {Authorization: `Bearer ${token}`,}
    }).then(({data}) => {
      setState(data);
    }).catch(() => {});
  };

  useEffect(() => {
    if (!token.length || !orgName.length) return;
    if (fetched.current) return;
    fetched.current = true;
    fetchData();
  }, [orgName, token]);
  
  return (
    <Section onClick={onPress}>
      <HRSections variant={5} />
      <SectionContent>
        <Content>
          <span>Today</span>
          <span>{numeral(state.today).format("($ 0.000 a)")}</span>
        </Content>
        <div>
          <VrtclLn />
        </div>
        <Content>
          <span>Total</span>
          <span>{numeral(state.total).format("($ 0.000 a)")}</span>
        </Content>
        <div>
          <VrtclLn />
        </div>
        <Content>
          <span>No. of Transactions</span>
          <span>{state.transactions}</span>
        </Content>
      </SectionContent>
    </Section>
  );
};

export default HRFinancial;
