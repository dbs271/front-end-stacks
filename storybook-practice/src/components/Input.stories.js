import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
  placeholder: "small",
  size: "sm",
};

export const MediumInput = Template.bind({});
MediumInput.args = {
  placeholder: "medium",
  size: "md",
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  placeholder: "large",
  size: "lg",
};
