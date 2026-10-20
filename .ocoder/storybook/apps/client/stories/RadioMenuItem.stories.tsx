import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Button, Group, Menu, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import { RadioMenuItem } from '@source/apps/client/src/components/ui/radio-menu-item';
import { spaces } from '../fixtures/data';

// Used as `component` of Menu.Item, as the space filter menu does. Shown in an open menu.
const selected = spaces[0].id;

const meta = {
  title: 'Components/RadioMenuItem',
  component: RadioMenuItem,
  render: () => (
    <div style={{ height: 240 }}>
      <Menu opened width={250} position="bottom-start" withinPortal={false}>
        <Menu.Target>
          <Button variant="default" size="xs">
            Space
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {spaces.map((space) => (
            <Menu.Item key={space.id} component={RadioMenuItem} aria-checked={space.id === selected}>
              <Group flex="1" gap="xs">
                <Avatar color="initials" variant="filled" name={space.name} size={20} />
                <Text size="sm" fw={500} style={{ flex: 1 }} truncate>
                  {space.name}
                </Text>
                {space.id === selected && <IconCheck size={20} aria-hidden />}
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  ),
} satisfies Meta<typeof RadioMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
