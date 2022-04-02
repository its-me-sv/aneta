import React, {useState, useEffect} from 'react';

import {
  Container, 
  ColumnNames, 
  Wrapper,
  Rows,
  MoreText,
} from './styles';

import HorizontalLine from '../horizontal-line';
import {StyledInput} from '../input';
import Transaction from '../transaction';
import {useUserContext} from '../../contexts/user.context';

interface TransactionType {
  id: string;
  recipient: string;
  amount: number;
}

const dummyData: Array<TransactionType> = Array(42).fill({
  id: "9467eb20-a622-11ec-9631-773bd57f3429",
  recipient: "9467eb20-a622-11ec-9631-773bd57f3429",
  amount: 500
});

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = () => {
    const {setLoading} = useUserContext();
    const [transactions, setTransactions] = useState<Array<TransactionType>>([]);

    const fetchData = () => {
      setLoading!(true);
      setTimeout(() => {
        setTransactions(prev => [...prev, ...dummyData]);
        setLoading!(false);
      }, 1000);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <>
        <StyledInput placeholder="Recipient Name" />
        <Wrapper>
          <Container>
            <ColumnNames>
              <span>Transaction ID</span>
              <span>Date</span>
              <span>Recipient</span>
              <span>Amount</span>
            </ColumnNames>
            <HorizontalLine variant={2} />
          </Container>
          <Rows>
            {transactions.map((val, idx) => (
              <Transaction key={idx} {...val} />
            ))}
            <MoreText onClick={fetchData}>Load more</MoreText>
          </Rows>
        </Wrapper>
      </>
    );
};

export default Transactions;
