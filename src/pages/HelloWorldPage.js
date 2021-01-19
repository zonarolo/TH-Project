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
    },
  });

  const [firstName, setFirstName] = useState('');
  const isFieldAvailable = formik.values.firstName === '';

  const onCancel = () => {
    formik.resetForm();
    goToUserPage();
  };

  const goToUserPage = () => {
    history.push('/userpage');
  };

  return (
    <>
      {firstName || 'How are you?'}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <button type="submit" disabled={isFieldAvailable}>
          Submit
        </button>
        <button
          onClick={() => onCancel()}
          type="button"
          disabled={isFieldAvailable}
        >
          Cancel
        </button>
        <button
          onClick={() => onCancel()}
          type="button"
          disabled={!isFieldAvailable}
        >
          Exit
        </button>
      </form>
    </>
  );
};

export default HelloWorldPage;
