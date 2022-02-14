//styles
import "./toastr.scss";

const Toastr = ({ type, text, title, display }) => {
  return (
    <div className={`container-toastr ${type} ${display}`}>
      <div class="container-toastr-header">
          <div>{title}</div>
      </div>
      <div class="container-toastr-body">
        <div >{text} </div>
      </div>
      <div class="container-toastr-footer"></div>
    </div>
  );
};

export default Toastr;
