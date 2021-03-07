import {addons} from '@storybook/addons';
import {themes} from '@storybook/theming';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: false,
    isToolshown: true,
    theme: themes.dark,
    selectedPanel: undefined,
});
