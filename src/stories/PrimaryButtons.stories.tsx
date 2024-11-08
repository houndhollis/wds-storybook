import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
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
    children: { control: "text", description: "버튼 이름" },
    theme: {
      control: "select",
      options: ["dark", "light", "social", "text"],
      description: "버튼 타입",
    },
    isDisabled: {
      control: "boolean",
      description: "사용 가능 유무 ",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDisabled: false,
    theme: "dark",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    isDisabled: false,
    theme: "social",
    children: "구매가능 ",
  },
};
