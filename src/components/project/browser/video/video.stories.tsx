import Video from '.';
import projects, {IProject} from '../../../../data/projects';

export default {title: 'Components/Project/Browser/Video'};

const project: IProject = {...projects[0]};

export const base: React.FC = () => (
    <Video project={project} />
);
