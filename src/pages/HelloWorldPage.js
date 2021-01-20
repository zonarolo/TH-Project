import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

const HelloWorldPage = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: '',
    },

    onSubmit: (values) => {
      setFirstName(values.firstName);
      setUsedForm(false);
      setDate(`Now it is ${new Date()}`);
    },
  });

  const [usedForm, setUsedForm] = useState(false);
  const [date, setDate] = useState('');
  const [firstName, setFirstName] = useState('');
  // const isFieldAvailable = formik.values.firstName === '';

  const onCancel = () => {
    formik.resetForm();
    goToUserPage();
  };

  const goToUserPage = () => {
    history.push('/userprofile');
  };

  return (
    <>
      {firstName || <h1>How are you?</h1>}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Fill your name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <button type="submit" disabled={usedForm}>
          Submit
        </button>
        <button onClick={() => onCancel()} type="button" disabled={usedForm}>
          Cancel
        </button>
        <button onClick={() => onCancel()} type="button" disabled={!usedForm}>
          Exit
        </button>
      </form>
    </>
  );
};

export default HelloWorldPage;
