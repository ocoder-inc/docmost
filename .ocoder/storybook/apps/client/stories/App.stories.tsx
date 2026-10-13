import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@source/apps/client/src/App';
import { publicWorkspace } from '../fixtures/data';
import { withQueryData, withRoute } from '../fixtures/decorators';

const meta = {
  title: 'Components/App',
  component: App,
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

// A signed-out visitor lands on the login page. The signed-in shell opens a realtime socket on mount,
// which this sandbox cannot serve, so the app is shown at its public entry point.
export const Default: Story = {
  decorators: [
    withRoute('/login'),
    withQueryData([
      [['currentUser'], null],
      [['workspace-public'], publicWorkspace],
    ]),
  ],
};
