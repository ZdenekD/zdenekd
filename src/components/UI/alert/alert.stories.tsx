import {VariantsEnum} from '@/enums';
import Alert from '.';

export default {title: 'UI/Alert'};

const data = {content: 'Ham hock cupim sausage ball tip tenderloin shank.'};

export const component = () => (
    <Alert isVisible>{data.content}</Alert>
);

component.parameters = {chromatic: {delay: 1400}};

export const title = () => (
    <Alert isVisible title="Alert with title">{data.content}</Alert>
);

title.parameters = {chromatic: {delay: 1400}};

export const success = () => (
    <Alert isVisible variant={VariantsEnum.success} title="Success message">
        {data.content}
    </Alert>
);

success.parameters = {chromatic: {delay: 1400}};

export const successWithTimeout = () => (
    <Alert isVisible variant={VariantsEnum.success} title="Success message" timeout={5}>
        {data.content}
    </Alert>
);

successWithTimeout.parameters = {chromatic: {disableSnapshot: true}};

export const info = () => (
    <Alert isVisible variant={VariantsEnum.info} title="Info message">
        {data.content}
    </Alert>
);

info.parameters = {chromatic: {delay: 1400}};

export const infoWithTimeout = () => (
    <Alert isVisible variant={VariantsEnum.info} title="Info message" timeout={5}>
        {data.content}
    </Alert>
);

infoWithTimeout.parameters = {chromatic: {disableSnapshot: true}};

export const warning = () => (
    <Alert isVisible variant={VariantsEnum.warning} title="Warning message">
        {data.content}
    </Alert>
);

warning.parameters = {chromatic: {delay: 1400}};

export const warningWithTimeout = () => (
    <Alert isVisible variant={VariantsEnum.warning} title="Warning message" timeout={5}>
        {data.content}
    </Alert>
);

warningWithTimeout.parameters = {chromatic: {disableSnapshot: true}};

export const danger = () => (
    <Alert isVisible variant={VariantsEnum.danger} title="Danger message">
        {data.content}
    </Alert>
);

danger.parameters = {chromatic: {delay: 1400}};

export const dangerWithTimeout = () => (
    <Alert isVisible variant={VariantsEnum.danger} title="Danger message" timeout={5}>
        {data.content}
    </Alert>
);

dangerWithTimeout.parameters = {chromatic: {disableSnapshot: true}};

export const timeout = () => (
    <Alert isVisible timeout={3}>{data.content} hide after 3s</Alert>
);

timeout.parameters = {chromatic: {disableSnapshot: true}};

export const longtext = () => (
    <Alert isVisible title={`${data.content} with long text`}>
        {data.content} Tri-tip pastrami jowl doner meatloaf tenderloin buffalo.
        Pastrami pancetta short ribs fatback shoulder, corned beef spare ribs. Tri-tip filet mignon beef ribs meatball
        cupim tenderloin sausage shankle beef chuck meatloaf capicola. Shoulder boudin brisket pork belly, kielbasa
        shank swine buffalo hamburger andouille. Strip steak brisket meatloaf, biltong boudin capicola picanha rump
        jowl pig alcatra turducken ham hock pork loin
    </Alert>
);

longtext.parameters = {chromatic: {delay: 1400}};
