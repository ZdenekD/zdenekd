/* eslint-disable react/display-name */
type IProps = {
    children: React.ReactNode
}

type IAccumulator = (components: React.FC<IProps>, current: React.FC<IProps>) => ({children}: {children: React.ReactNode}) => JSX.Element

const accumulator: IAccumulator = (AccumulatedComponents, CurrentComponent) => ({children}) => (
    <AccumulatedComponents>
        <CurrentComponent>{children}</CurrentComponent>
    </AccumulatedComponents>
);

const compbineProviders = (...components: React.FC<IProps>[]): React.FC<IProps> => components.reduce(
    accumulator,
    ({children}) => <>{children}</>
);

export default compbineProviders;
