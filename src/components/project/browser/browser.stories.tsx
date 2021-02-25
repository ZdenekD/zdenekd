import Browser from '.';
import projects, {IProject} from '../../../data/projects';

export default {title: 'Components/Project/Browser'};

const project: IProject = {...projects[0]};

export const base: React.FC = () => (
    <Browser project={project} isFirst={false} isLast={false} />
);
