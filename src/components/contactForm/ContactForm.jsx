import React from "react";

const ContactForm = (props) => {
  const initialValues = { full_name: "", phone_number: "" };
  const [form, setForm] = React.useState(initialValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.phone_number === "") {
      alert("Please Enter The Data");
    }
  };
  return (
    <form>
      <div>
        <input type="text" name="full_name" placeholder="Full name" />
      </div>

      <div>
        <input
          type="number"
          name="phone_number"
          placeholder="Phone Number"
          maxLength={10}
          minLength={10}
        />
      </div>

      <div id="button">
        <button>Add</button>
      </div>
    </form>
  );
};

export default ContactForm;
