import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Group, Menu, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import { CheckboxMenuItem } from '@source/apps/client/src/components/ui/checkbox-menu-item';

// Used as `component` of Menu.Item, as the search spotlight's label filter does. Shown in an open menu.
const labels = [
  { name: 'backend', checked: true },
  { name: 'design', checked: false },
  { name: 'onboarding', checked: true },
];

const meta = {
  title: 'Components/CheckboxMenuItem',
  component: CheckboxMenuItem,
  render: () => (
    <div style={{ height: 220 }}>
      <Menu opened width={220} position="bottom-start" withinPortal={false}>
        <Menu.Target>
          <Button variant="default" size="xs">
            Labels
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {labels.map((label) => (
            <Menu.Item key={label.name} type="button" component={CheckboxMenuItem} aria-checked={label.checked}>
              <Group flex="1" gap="xs">
                <Text size="sm" fw={500} style={{ flex: 1 }} truncate>
                  {label.name}
                </Text>
                {label.checked && <IconCheck size={20} aria-hidden />}
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  ),
} satisfies Meta<typeof CheckboxMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
