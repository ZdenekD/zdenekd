import Browser from '.';
import {IProject} from '../../../data/projects';

export default {title: 'Components/Browser'};

const project: IProject = {
    id: 'id',
    title: 'Project title',
    description: 'Project description',
    url: 'https://url.com',
    tools: ['react', 'webpack'],
};

export const base: React.FC = () => (
    <Browser project={project} />
);
