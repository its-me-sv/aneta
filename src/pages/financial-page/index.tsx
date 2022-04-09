import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {MainContainer, RightContainer} from './styles';

import NavHr from '../../components/nav-hr';
import Transactions from '../../components/transactions';

import {useUserNavContext} from '../../contexts/user-nav.context';
import {useOrganisationContext} from '../../contexts/organisation.context';
import {useAPIContext} from '../../contexts/api.context';

export interface TransactionType {
  id: string;
  amount: number;
  recipient: string;
}

interface FinancialPageProps {}

const FinancialPage: React.FC<FinancialPageProps> = () => {
    const {changeUni} = useUserNavContext();
    const {REST_API} = useAPIContext();
    const {setLoading, token, orgName} = useOrganisationContext();
    const [transactions, setTransactions] = useState<Array<TransactionType>>([]);
    const [page, setPage] = useState<string | null>('');

    const fetchTransactions = () => {
      if (page === null) return;
      setLoading!(true);
      const reqBody: {orgName: string; page?: string} = {orgName};
      if (page?.length) reqBody.page = page;
      axios.post(`${REST_API}/transactions/fetch`, {...reqBody}, {
        headers: {Authorization: `Bearer ${token}`,}
      }).then(({data}) => {
        setTransactions([...(data.transactions || []), ...transactions]);
        setPage(data.pageState);
        setLoading!(false);
      }).catch(() => setLoading!(false));
    };

    useEffect(() => {
      changeUni!(5);
      fetchTransactions();
    }, []);

    return (
      <MainContainer>
        <NavHr />
        <RightContainer>
          <Transactions 
            transactions={transactions}
            fetchTransactions={fetchTransactions}
            currPage={page}
          />
        </RightContainer>
      </MainContainer>
    );
};

export default FinancialPage;
