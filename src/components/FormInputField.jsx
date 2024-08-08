/* eslint-disable react/prop-types */

// Form input field component
function FormInputField({ label, type }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}

export default FormInputField;
