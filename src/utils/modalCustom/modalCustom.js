import { useState, useEffect } from "react";
import ButtonCustom from "../buttonCustom/buttonCustom";

//styles
import "./modalCustom.scss";

//services
import { isEmpty } from "../../services/validations/form.validations";
import { editUser } from "../../services/users/users.service";


const ModalCustom = ({ title, data, display, openModal, openToastr }) => {
  const [errores, setErrores] = useState({});
  const [user, setUser] = useState(data);
  const [isValidate, setIsValidate] = useState(1);

  useEffect(() => {
    if (!user.hasOwnProperty("email")) {
      setUser(data);
    }
    if (Object.keys(errores).length > 0) {
      setIsValidate(0);
    } else {
      setIsValidate(1);
    }
  }, [data, errores, isValidate, user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (isEmpty(e.target.value)) {
      setErrores({ ...errores, [e.target.name]: "El campo es requerido" });
    } else {
      const { [e.target.name]: id, ...errorsTemp } = errores;
      setErrores({ ...errorsTemp });
    }
  };

  //changing class from parent component
  const closeModal = () => {
    openModal("novisible");
  };

  const editCurrentUser = async () => {
    const resu = await editUser(user).then((res) => res);
    if(resu.email){
      openToastr("visible")
      openModal("novisible");
    }    
  };

  return (
    <div className={`container-modalcustom ${display}`}>
      <div class="container-modalcustom-center">
        <div class="container-modalcustom-header">
          <h2>{title}</h2>
        </div>

        <div class="container-modalcustom-body">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={user.email}
              name="email"
              id="email"
            ></input>
          </div>

          {errores.email && (
            <div class="errortext">The field email is required</div>
          )}

          <div>
            <label htmlFor="first_name">First Name</label>
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={user.first_name}
              name="first_name"
              id="first_name"
            ></input>
          </div>
          {errores.first_name && (
            <div class="errortext">The field First Name is required</div>
          )}

          <div>
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={user.last_name}
              name="last_name"
              id="last_name"
            ></input>
          </div>
          {errores.last_name && (
            <div class="errortext">The field last_name is required</div>
          )}
        </div>

        <div class="container-modalcustom-footer">
          {isValidate ? (
            <div onClick={() => editCurrentUser()}>
              <ButtonCustom color="green" buttonText="Aceptar"></ButtonCustom>
            </div>
          ) : false}
          <div onClick={() => closeModal()}>
            <ButtonCustom color="red" buttonText="Cancelar"></ButtonCustom>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default ModalCustom;
