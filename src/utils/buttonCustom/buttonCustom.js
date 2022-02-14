//styles
import "./buttonCustom.scss";

const ButtonCustom = ({ buttonText, data, color, name }) => {
  return <button className={color} name={name}>{buttonText}</button>;
};

export default ButtonCustom;
