import VariantsEnum from '../../enums/VariantsEnum';
import Alert from '.';

export default {title: 'UI/Alert'};

export const base: React.FC = () => (
    <Alert isOpen={true}>
        Alert message
    </Alert>
);

export const success: React.FC = () => (
    <Alert isOpen={true} variant={VariantsEnum.success}>Success message</Alert>
);

export const info: React.FC = () => (
    <Alert isOpen={true} variant={VariantsEnum.info}>Info message</Alert>
);

export const warning: React.FC = () => (
    <Alert isOpen={true} variant={VariantsEnum.warning}>Warning message</Alert>
);

export const danger: React.FC = () => (
    <Alert isOpen={true} variant={VariantsEnum.danger}>Danger message</Alert>
);

export const timeout: React.FC = () => (
    <Alert isOpen={true} timeout={3}>Alert hide after 3s</Alert>
);
