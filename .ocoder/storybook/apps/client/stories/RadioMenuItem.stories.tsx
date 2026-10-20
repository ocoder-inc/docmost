import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Button, Divider, Group, Menu, Text } from '@mantine/core';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';

import { RadioMenuItem } from '@source/apps/client/src/components/ui/radio-menu-item';
import { spaces } from '../fixtures/data';

const meta = {
  title: 'Components/RadioMenuItem',
  component: RadioMenuItem,
} satisfies Meta<typeof RadioMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

// The `component` of each choice in the search's space filter menu, shown open with one space chosen.
export const Default: Story = {
  render: () => (
    <Menu opened withinPortal={false} position="bottom-start" width={260} shadow="md">
      <Menu.Target>
        <Button variant="default" size="xs" rightSection={<IconChevronDown size={14} />}>
          Engineering
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component={RadioMenuItem} aria-checked={false}>
          <Group flex="1" gap="xs">
            <Avatar color="initials" variant="filled" name="All spaces" size={20} />
            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                All spaces
              </Text>
              <Text size="xs" c="dimmed">
                Search in all your spaces
              </Text>
            </div>
          </Group>
        </Menu.Item>
        <Divider my="xs" />
        {spaces.map((space, index) => (
          <Menu.Item key={space.id} component={RadioMenuItem} aria-checked={index === 0}>
            <Group flex="1" gap="xs">
              <Avatar color="initials" variant="filled" name={space.name} size={20} />
              <Text size="sm" fw={500} style={{ flex: 1 }} truncate>
                {space.name}
              </Text>
              {index === 0 && <IconCheck size={20} aria-hidden />}
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ),
};
