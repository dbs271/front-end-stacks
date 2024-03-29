import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: { handleClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red",
  backgroundColor: "red",
  size: "md",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue",
  backgroundColor: "blue",
  size: "md",
};

export const SmButton = Template.bind({});
SmButton.args = {
  label: "Small Button",
  backgroundColor: "gray",
  size: "sm",
};
