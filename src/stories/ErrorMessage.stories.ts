import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "../components/ErrorMessage";

const meta = {
  title: "TEXT/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "ErrorMessage 이름" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러 메세지 내용",
  },
};
