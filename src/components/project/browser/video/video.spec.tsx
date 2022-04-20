import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import {IProject} from '@/types/projects';
import Video from '.';

const project: IProject = {
    id: 'id',
    title: 'title',
    locale: {cs: {description: 'description'}},
    url: 'http://url',
    tools: ['tool', 'tool'],
};

describe('Project/Browser/Video', () => {
    it('renders without error', () => {
        render(<Video project={project} />);

        expect(screen.getByTestId('component-video')).toBeInTheDocument();
    });
});
