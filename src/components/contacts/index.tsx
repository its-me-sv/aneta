import React, {KeyboardEvent} from 'react';

import {ContactsContainer , Container, Contact} from './styles';
import {StyledInput} from '../input';
import SimpleProfile from '../simple-profile';
import HorizontalLine from '../horizontal-line';
import Button from '../button';

import {useContactsContext} from '../../contexts/contacts.context';

interface ContactsProps {
  setChat: (val: string) => void;
}

const Contacts: React.FC<ContactsProps> = ({setChat}) => {
  const {contacts, contactsPage: page, fetchContacts} = useContactsContext();

  const handleSearch = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
    window.alert(event.key);
  };

  return (
    <ContactsContainer>
      <StyledInput 
        placeholder="Name" 
        onKeyDown={handleSearch} 
      />
      <Container>
        {contacts.map(({id}, idx) => (
          <Contact key={idx} onClick={() => setChat(`${idx}`)}>
            <SimpleProfile variant={2} id={id} />
            <HorizontalLine variant={2} />
          </Contact>
        ))}
        {page !== null && (
          <Button 
            variant={4}
            text="Load more"
            disabled={false}
            onPress={fetchContacts!}
          />
        )}
      </Container>
    </ContactsContainer>
  );
};

export default Contacts;
