import FormInputField from "../components/FormInputField";
import PageTitle from "../components/PageTitle";

// The contact page
function Contact() {
  return (
    <div>
      <PageTitle title="Contact" />

      <form>
        <FormInputField label="Name:" type="text" />
        <FormInputField label="Email address:" type="email" />
        <FormInputField label="Message:" type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
