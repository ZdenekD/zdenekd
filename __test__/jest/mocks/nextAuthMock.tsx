import {Session} from 'next-auth';
import {useSession} from 'next-auth/react';

jest.mock('next-auth/react');

const mockSession: Session = {
    expires: '1',
    user: {
        name: 'Name',
        email: 'email@email.com ',
        image: '',
    },
};

(useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
