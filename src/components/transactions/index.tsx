import React from 'react';

import {
  Container, ColumnNames, Wrapper, Rows, MoreSection
} from './styles';

import HorizontalLine from '../horizontal-line';
import {StyledInput} from '../input';
import Transaction from '../transaction';
import Button from '../button';

import {TransactionType} from '../../pages/financial-page';

interface TransactionsProps {
  transactions: Array<TransactionType>;
  fetchTransactions: () => void;
  currPage: string | null;
}

const Transactions: React.FC<TransactionsProps> = ({
  transactions, fetchTransactions, currPage
}) => {
    return (
      <>
        <StyledInput placeholder="Recipient Email" />
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
            <MoreSection>
              {currPage !== null && (
                <Button 
                  onPress={fetchTransactions}
                  variant={1} 
                  disabled={false} 
                  text="Load more"
                />
              )}
            </MoreSection>
          </Rows>
        </Wrapper>
      </>
    );
};

export default Transactions;
