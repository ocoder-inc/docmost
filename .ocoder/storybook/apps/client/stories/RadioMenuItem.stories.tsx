import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Badge, Button, Divider, Group, Menu, ScrollArea, Text, TextInput } from '@mantine/core';
import { IconCheck, IconChevronDown, IconFileDescription, IconSearch } from '@tabler/icons-react';

import { RadioMenuItem } from '@source/apps/client/src/components/ui/radio-menu-item';

const meta = {
  title: 'Components/RadioMenuItem',
  component: RadioMenuItem,
} satisfies Meta<typeof RadioMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;

const contentTypes = [
  { value: 'page', label: 'Pages' },
  { value: 'attachment', label: 'Attachments' },
];

// The search dialog's "Type" filter menu, opened: one RadioMenuItem per content type, "Pages" chosen.
export const Default: Story = {
  render: () => (
    <Menu shadow="md" width={220} position="bottom-start" opened>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          size="sm"
          rightSection={<IconChevronDown size={14} />}
          leftSection={<IconFileDescription size={16} />}
          fw={500}
        >
          Type: Pages
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {contentTypes.map((option) => (
          <Menu.Item key={option.value} component={RadioMenuItem} aria-checked={option.value === 'page'}>
            <Group flex="1" gap="xs">
              <div>
                <Text size="sm">{option.label}</Text>
              </div>
              {option.value === 'page' && <IconCheck size={20} aria-hidden />}
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  ),
};

const spaces = [
  { id: 'sp-eng', name: 'Engineering' },
  { id: 'sp-design', name: 'Design' },
  { id: 'sp-ops', name: 'Operations' },
];

// The label page's space filter menu, opened: "All spaces" plus one RadioMenuItem per space.
export const SpaceFilter: Story = {
  render: () => (
    <Menu shadow="md" width={280} position="bottom-start" opened>
      <Menu.Target>
        <Button variant="default" size="sm" rightSection={<IconChevronDown size={14} />}>
          Engineering
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <TextInput
          placeholder="Find a space"
          leftSection={<IconSearch size={16} />}
          size="sm"
          variant="filled"
          radius="sm"
          styles={{ input: { marginBottom: 8 } }}
        />
        <ScrollArea.Autosize mah={280}>
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
          {spaces.map((space) => (
            <Menu.Item key={space.id} component={RadioMenuItem} aria-checked={space.id === 'sp-eng'}>
              <Group flex="1" gap="xs">
                <Avatar color="initials" variant="filled" name={space.name} size={20} />
                <Text size="sm" fw={500} style={{ flex: 1 }} truncate>
                  {space.name}
                </Text>
                {space.id === 'sp-eng' && <IconCheck size={20} aria-hidden />}
              </Group>
            </Menu.Item>
          ))}
        </ScrollArea.Autosize>
      </Menu.Dropdown>
    </Menu>
  ),
};
