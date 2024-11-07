import type { Meta, StoryObj } from "@storybook/react";

import DefaultTextField from "../components/DefaultTextField";
import { fn } from "@storybook/test";

const meta = {
  title: "TEXT/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "Input 아이디" },
    isError: { control: "boolean", description: "에러 발생 유/무" },
    type: { control: "text", description: "Input 타입" },
    placeholder: { control: "text", description: "Input Placeholder" },
    value: { control: "text", description: "Input 값" },
    errorMessage: { control: "text", description: "Error Message" },
    iconPath: { control: "text", description: "이미지 경로" },
    iconAlt: { control: "text", description: "이미지의 alt 속성" },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
    onChange: { action: "changed", description: "Input 값 변경 이벤트" },
  },
  args: {
    onChange: fn(),
    onIconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    isError: false,
    type: "text",
    placeholder: "이메일",
    value: "",
    errorMessage: "이메일을 입력해주세요.",
    iconAlt: "삭제 이미지",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
  },
};
