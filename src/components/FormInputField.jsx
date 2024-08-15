/* eslint-disable react/prop-types */

// Form input field component
function FormInputField({ label, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default FormInputField;
