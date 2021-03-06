import combineProviders from './utils/combineProviders';
import {AnimationProvider} from './animation';
import {CursorProvider} from './cursor';
import {MenuProvider} from './menu';
import {MessageProvider} from './message';
import {ProjectProvider} from './project';

const providers = [
    AnimationProvider,
    CursorProvider,
    MenuProvider,
    MessageProvider,
    ProjectProvider,
];

const Provider = combineProviders(...providers);

export {Provider};
