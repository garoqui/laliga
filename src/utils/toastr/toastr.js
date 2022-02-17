//styles
import "./toastr.scss";

const Toastr = ({ type, text, title, display }) => {
  return (
    <div className={`container-toastr ${type} ${display}`}>
      <div className="container-toastr-header">
          <div>{title}</div>
      </div>
      <div className="container-toastr-body">
        <div >{text} </div>
      </div>
      <div className="container-toastr-footer"></div>
    </div>
  );
};

export default Toastr;
