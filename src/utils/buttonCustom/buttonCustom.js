//styles
import "./buttonCustom.scss";

const ButtonCustom = ({ buttonText, data, color, disabled }) => {
  return <button className={color}>{buttonText}</button>;
};

export default ButtonCustom;
