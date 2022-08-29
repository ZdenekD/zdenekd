import Projects from '.';

export default {title: 'Pages/Projects'};

export const component = () => (
    <Projects />
);

component.parameters = {chromatic: {disableSnapshot: true}};
