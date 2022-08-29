import Project from '.';

export default {title: 'Project'};

export const component = () => (
    <Project />
);

component.parameters = {chromatic: {delay: 5000}};
