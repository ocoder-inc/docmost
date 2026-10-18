import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Group, Menu, ScrollArea, Text, TextInput, useComputedColorScheme } from '@mantine/core';
import { IconCheck, IconChevronDown, IconSearch, IconTag } from '@tabler/icons-react';

import { CheckboxMenuItem } from '@source/apps/client/src/components/ui/checkbox-menu-item';
import { getLabelColor } from '@source/apps/client/src/features/label/utils/label-colors';

const labels = [
  { id: 'lb-1', name: 'engineering' },
  { id: 'lb-2', name: 'design' },
  { id: 'lb-3', name: 'roadmap' },
  { id: 'lb-4', name: 'onboarding' },
];

/** The search dialog's "Labels" filter menu, opened, with the items rendered as CheckboxMenuItem. */
function LabelFilter({ selected }: { selected: string[] }) {
  const scheme = useComputedColorScheme('light');
  return (
    <Menu shadow="md" width={250} position="bottom-start" opened closeOnItemClick={false}>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="sm"
          rightSection={<IconChevronDown size={14} />}
          leftSection={<IconTag size={16} />}
          fw={500}
        >
          {selected.length > 0 ? `Labels (${selected.length})` : 'Labels'}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <TextInput
          placeholder="Find a label"
          leftSection={<IconSearch size={16} />}
          size="sm"
          variant="filled"
          radius="sm"
          styles={{ input: { marginBottom: 8 } }}
        />
        <ScrollArea.Autosize mah={280}>
          {labels.map((label) => {
            const isChecked = selected.includes(label.id);
            const color = getLabelColor(label.name, scheme);
            return (
              <Menu.Item key={label.id} type="button" component={CheckboxMenuItem} aria-checked={isChecked}>
                <Group flex="1" gap="xs">
                  <span
                    style={{ width: 8, height: 8, borderRadius: '50%', background: color.dot, flexShrink: 0 }}
                  />
                  <Text size="sm" fw={500} style={{ flex: 1 }} truncate>
                    {label.name}
                  </Text>
                  {isChecked && <IconCheck size={20} aria-hidden />}
                </Group>
              </Menu.Item>
            );
          })}
        </ScrollArea.Autosize>
      </Menu.Dropdown>
    </Menu>
  );
}

const meta = {
  title: 'Components/CheckboxMenuItem',
  component: CheckboxMenuItem,
} satisfies Meta<typeof CheckboxMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

// Each label in the search dialog's "Labels" filter menu; two labels are selected.
export const Default: Story = {
  render: () => <LabelFilter selected={['lb-1', 'lb-3']} />,
};
