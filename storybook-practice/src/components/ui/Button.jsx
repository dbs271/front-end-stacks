import S from "./style";

const Button = ({ ...args }) => {
  return <S.Button {...args}>{args.label}</S.Button>;
};

export default Button;
