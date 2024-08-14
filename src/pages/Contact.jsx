import FormInputField from "../components/FormInputField";
import PageTitle from "../components/PageTitle";

// The contact page
function Contact() {
  return (
    <div className="content-container">
      <PageTitle title="Contact" />

      <form>
        <FormInputField label="Name:" type="text" />
        <FormInputField label="Email address:" type="email" />
        <FormInputField label="Message:" type="text" />

        <div className="submit-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
