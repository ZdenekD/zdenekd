/* eslint-disable react/display-name */
import React from 'react';

const accumulator = (AccumulatedComponents: React.FC, CurrentComponent: React.FC) => ({children}: React.ComponentProps<React.FC>): JSX.Element => (
    <AccumulatedComponents>
        <CurrentComponent>{children}</CurrentComponent>
    </AccumulatedComponents>
);

const compbineProviders = (...components: React.FC[]): React.FC => components.reduce(
    accumulator,
    ({children}) => <>{children}</>
);

export default compbineProviders;
