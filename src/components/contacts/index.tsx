import React, {
  KeyboardEvent, 
  useState, 
  useEffect
} from 'react';

import {ContactsContainer , Container, Contact} from './styles';
import {StyledInput} from '../input';
import SimpleProfile from '../simple-profile';
import HorizontalLine from '../horizontal-line';

import {useUserContext} from '../../contexts/user.context';

interface ContactsProps {
  setChat: (val: string) => void;
}

const Contacts: React.FC<ContactsProps> = ({setChat}) => {
    const {setLoading} = useUserContext();
    const [contacts, setContacts] = useState<Array<any>>([]);

    useEffect(() => {
        setLoading!(true);
        setTimeout(() => {
            setContacts(Array(42).fill(0));
            setLoading!(false);
        }, 1000);
    }, []);

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
          {contacts.map((_, idx) => (
            <Contact key={idx} onClick={() => setChat(`${idx}`)}>
              <SimpleProfile variant={2} />
              <HorizontalLine variant={2} />
            </Contact>
          ))}
        </Container>
      </ContactsContainer>
    );
};

export default Contacts;
