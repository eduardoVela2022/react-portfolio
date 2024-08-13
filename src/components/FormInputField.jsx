/* eslint-disable react/prop-types */

// Form input field component
function FormInputField({ label, type }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}

export default FormInputField;
