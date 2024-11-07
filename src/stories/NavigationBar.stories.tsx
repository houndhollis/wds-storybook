import type { Meta, StoryObj } from "@storybook/react";

import NavigationBar from "../components/NavigationBar";
import { fn } from "@storybook/test";

const meta = {
  title: "NAVIGATION/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showBackButton: { control: "boolean", description: "뒤로가기 버튼 유/무" },
    showCloseButton: { control: "boolean", description: "닫기 버튼 유/무" },
    showTitle: { control: "boolean", description: " 페이지 이름 유/무" },
    title: { control: "text", description: "페이지 이름" },
    isDark: { control: "boolean", description: "다크 모드 토글" },
  },
  args: {
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "가입하기",
  },
};
