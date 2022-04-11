import React, {
  KeyboardEvent,
  useRef,
  MutableRefObject,
  KeyboardEventHandler,
} from "react";

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
  const keywordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const fetchWithKeyword: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter") return;
    if (keywordRef.current.value.length < 1) return window.alert("Field empty");
    fetchContacts!(keywordRef.current.value);
  };

  return (
    <ContactsContainer>
      <StyledInput
        placeholder="Name | Email | Role"
        ref={keywordRef}
        onKeyDown={fetchWithKeyword}
      />
      <Container>
        {contacts.map(({ id }, idx) => (
          <Contact key={idx} onClick={() => setChat(id)}>
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
