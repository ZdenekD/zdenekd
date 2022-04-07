import {addons} from '@storybook/addons';
import {themes} from '@storybook/theming';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: false,
    isToolshown: true,
    theme: themes.dark,
    selectedPanel: undefined,
});
