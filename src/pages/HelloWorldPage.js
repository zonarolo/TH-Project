import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';

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

        <Button type="submit" disabled={usedForm}>
          Submit
        </Button>
        <Button onClick={() => onCancel()} type="button" disabled={usedForm}>
          Cancel
        </Button>
        <Button onClick={() => onCancel()} type="button" disabled={!usedForm}>
          Exit
        </Button>
      </form>
    </>
  );
};

export default HelloWorldPage;
