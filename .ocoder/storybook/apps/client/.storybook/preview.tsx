import type { Decorator, Preview } from '@storybook/react-vite';

// The app's global stylesheets, in the order its entry module imports them.
import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@source/apps/client/src/styles/a11y-overrides.css';

// What the app's entry module runs first, for its effect (translations, locales, polyfills).
import '@source/apps/client/src/i18n';

import { Providers } from './providers';

/** The capture sets the `theme` global per case; providers decide what a theme means for this app. */
const withProviders: Decorator = (Story, context) => (
  <Providers theme={String(context.globals.theme ?? 'light')}>
    <Story />
  </Providers>
);

const preview: Preview = {
  decorators: [withProviders],
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: { title: 'Theme', items: ["light","dark"], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: { layout: 'padded' },
};

export default preview;
