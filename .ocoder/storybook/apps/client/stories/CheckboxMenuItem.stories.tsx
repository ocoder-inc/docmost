import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Group, Menu, Text } from '@mantine/core';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';

import { CheckboxMenuItem } from '@source/apps/client/src/components/ui/checkbox-menu-item';

const labels = [
  { name: 'infrastructure', color: 'var(--mantine-color-blue-6)', checked: true },
  { name: 'rfc', color: 'var(--mantine-color-grape-6)', checked: true },
  { name: 'onboarding', color: 'var(--mantine-color-teal-6)', checked: false },
  { name: 'postmortem', color: 'var(--mantine-color-red-6)', checked: false },
];

const meta = {
  title: 'Components/CheckboxMenuItem',
  component: CheckboxMenuItem,
} satisfies Meta<typeof CheckboxMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

// The `component` of each item in the search's label filter menu, shown open with two labels checked.
export const Default: Story = {
  render: () => (
    <Menu opened withinPortal={false} position="bottom-start" width={240} shadow="md">
      <Menu.Target>
        <Button variant="default" size="xs" rightSection={<IconChevronDown size={14} />}>
          Labels
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {labels.map((label) => (
          <Menu.Item key={label.name} type="button" component={CheckboxMenuItem} aria-checked={label.checked}>
            <Group flex="1" gap="xs">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: label.color, flexShrink: 0 }} />
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
};
