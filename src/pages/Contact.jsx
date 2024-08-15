import { useState } from "react";
import FormInputField from "../components/FormInputField";
import PageTitle from "../components/PageTitle";

// The contact page
function Contact() {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Checks if all the form values are valid
  function validateInformation() {
    // Checks if values are not empty
    if (!name || !email || !message) {
      return true;
    }

    // Checks if the entered email is valid
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return true;
    }

    // If everything is correct activate the submit button
    return false;
  }

  // Functions
  function handleSubmit(e) {
    // Prevent default page reload
    e.preventDefault();

    // Alert message
    alert(`This feature has still no been implemented yet!
      
      Name: ${name}
      Email: ${email}
      Message: ${message}`);

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  }

  // View
  return (
    <div className="content-container">
      <PageTitle title="Contact" />

      <form>
        <FormInputField
          label="Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormInputField
          label="Email address:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInputField
          label="Message:"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div
          className={
            validateInformation()
              ? "submit-button-container-disabled"
              : "submit-button-container"
          }
        >
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={validateInformation()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
