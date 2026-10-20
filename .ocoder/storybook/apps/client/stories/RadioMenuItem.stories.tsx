import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Divider, Group, Menu, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import { RadioMenuItem } from '@source/apps/client/src/components/ui/radio-menu-item';

const users = ['Jane Cooper', 'Devon Lane', 'Esther Howard'];

const meta = {
  title: 'Components/RadioMenuItem',
  component: RadioMenuItem,
  // The app uses it as the `component` of Menu.Item in the search creator filter.
  render: () => (
    <Menu opened withinPortal={false} width={240}>
      <Menu.Target>
        <Button variant="default" size="xs">
          Creator
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component={RadioMenuItem} aria-checked={false}>
          <Text size="sm" fw={500}>
            Anyone
          </Text>
        </Menu.Item>
        <Divider my="xs" />
        {users.map((name, index) => (
          <Menu.Item key={name} component={RadioMenuItem} aria-checked={index === 0}>
            <Group flex="1" gap="xs">
              <Text size="sm" fw={500} style={{ flex: 1 }}>
                {name}
              </Text>
              {index === 0 && <IconCheck size={20} aria-hidden />}
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ),
} satisfies Meta<typeof RadioMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
