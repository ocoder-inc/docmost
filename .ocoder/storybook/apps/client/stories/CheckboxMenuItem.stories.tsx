import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Group, Menu, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import { CheckboxMenuItem } from '@source/apps/client/src/components/ui/checkbox-menu-item';

const labels = [
  { name: 'engineering', color: '#228be6', checked: true },
  { name: 'onboarding', color: '#40c057', checked: false },
  { name: 'rfc', color: '#be4bdb', checked: true },
];

const meta = {
  title: 'Components/CheckboxMenuItem',
  component: CheckboxMenuItem,
  // The app uses it as the `component` of Menu.Item in the search label filter.
  render: () => (
    <Menu opened withinPortal={false} width={240}>
      <Menu.Target>
        <Button variant="default" size="xs">
          Labels
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {labels.map((label) => (
          <Menu.Item key={label.name} type="button" component={CheckboxMenuItem} aria-checked={label.checked}>
            <Group flex="1" gap="xs">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: label.color }} />
              <Text size="sm" fw={500} style={{ flex: 1 }} truncate>
                {label.name}
              </Text>
              {label.checked && <IconCheck size={20} aria-hidden />}
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ),
} satisfies Meta<typeof CheckboxMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
