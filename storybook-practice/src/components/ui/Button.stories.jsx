import Button from "./Button";

export default {
  title: "ui/Button",
  tags: ["autodocs"],
  component: Button,
};

export const Small = {
  args: {
    label: "중복확인",
    size: "small",
    variant: "primary",
    fontSize: "18px",
  },
};

export const Medium = {
  args: {
    label: "분석 보러가기",
    size: "medium",
    variant: "primary",
    fontSize: "30px",
  },
};

export const Large = {
  args: {
    label: "게임하기",
    size: "large",
    variant: "secondary",
    fontSize: "50px",
  },
};
