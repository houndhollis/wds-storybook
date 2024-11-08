import type { Meta, StoryObj } from "@storybook/react";

import TagList from "../components/TagList";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
  argTypes: {
    tagList: { options: ["tag1", "tag2", "tag3"], description: "버튼 이름" },
  },
  args: {
    onTagClick: fn(),
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
  },
};
