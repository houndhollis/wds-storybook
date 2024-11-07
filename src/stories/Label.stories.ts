import type { Meta, StoryObj } from "@storybook/react";

import Label from "../components/Label";

const meta = {
  title: "TEXT/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "label 의 for 속성" },
    children: { control: "text", description: "label 이름" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
