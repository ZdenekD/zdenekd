import VariantsEnum from '@/enums/VariantsEnum';
import Alert from '.';

export default {
    title: 'UI/Alert',
    parameters: {chromatic: {delay: 1400}},
};

export const component: React.FC = () => (
    <Alert isOpen>Alert message</Alert>
);

export const title: React.FC = () => (
    <Alert isOpen title="Alert with title">Ham hock cupim sausage ball tip tenderloin shank.</Alert>
);

export const success: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.success} title="Success message">
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const successWithTimeout: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.success} title="Success message" timeout={5}>
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const info: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.info} title="Info message">
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const infoWithTimeout: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.info} title="Info message" timeout={5}>
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const warning: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.warning} title="Warning message">
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const warningWithTimeout: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.warning} title="Warning message" timeout={5}>
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const danger: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.danger} title="Danger message">
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const dangerWithTimeout: React.FC = () => (
    <Alert isOpen variant={VariantsEnum.danger} title="Danger message" timeout={5}>
        Ham hock cupim sausage ball tip tenderloin shank.
    </Alert>
);

export const timeout: React.FC = () => (
    <Alert isOpen timeout={3}>Alert message hide after 3s</Alert>
);

export const longtext: React.FC = () => (
    <Alert isOpen title="Alert message with long text">
        Ham hock cupim sausage ball tip tenderloin shank. Tri-tip pastrami jowl doner meatloaf tenderloin buffalo.
        Pastrami pancetta short ribs fatback shoulder, corned beef spare ribs. Tri-tip filet mignon beef ribs meatball
        cupim tenderloin sausage shankle beef chuck meatloaf capicola. Shoulder boudin brisket pork belly, kielbasa
        shank swine buffalo hamburger andouille. Strip steak brisket meatloaf, biltong boudin capicola picanha rump
        jowl pig alcatra turducken ham hock pork loin
    </Alert>
);
