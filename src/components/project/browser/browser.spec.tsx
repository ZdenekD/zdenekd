import {render, screen} from '@testing-library/react';
import '@/test/mocks/nextRouterMock';
import {IProject} from '@/types/projects';
import Browser from '.';

const project: IProject = {
    id: 'id',
    title: 'title',
    locale: {cs: {description: 'description'}},
    url: 'http://url',
    tools: ['tool', 'tool'],
};

describe('Project/Browser', () => {
    it('renders without error', () => {
        render(
            <Browser
                isFirst={false}
                isLast={false}
                project={project}
            />
        );

        expect(screen.getByTestId('component-browser')).toBeInTheDocument();
    });
});
