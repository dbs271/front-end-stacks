import S from "./style";
import PropTypes from "prop-types";

const Button = ({ ...args }) => {
  return <S.Button {...args}>{args.label}</S.Button>;
};

Button.propTypes = {
  /**
   * 버튼내의 글자를 입력해주세요
   */
  label: PropTypes.string.isRequired,
  /**
   * 버튼의 사이즈를 골라주세요.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * 버튼의 형식을 골라주세요
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * 텍스트의 크기를 골라주세요.
   */
  fontSize: PropTypes.oneOf(["18px", "30px", "50px"]),
};

export default Button;
