import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

// useEffect(()=>{},[]);

const HelloWorldPage = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: '',
    },

    onSubmit: (values) => {
      //setUsedForm(true);
      setFirstName(`Hello ${values.firstName}!, Now it is ${date}`);
      // setUsedForm(false);
      document.getElementById('h1').innerHTML = firstName;
      console.log(usedForm);
    },
  });

  const [usedForm, setUsedForm] = useState(false);
  const date = new Date();
  const [firstName, setFirstName] = useState('');
  // const isFieldAvailable = formik.values.firstName === '';

  const onCancel = () => {
    formik.resetForm();
    // document.getElementById(firstName);
    goToUserPage();
  };

  // document.getElementById('firstName').addEventListener('change', () => {
  //   setUsedForm('false');
  // });
  // const $event = document.getElementById('firstName');
  // console.log($event);

  // formik.handleChange
  const goToUserPage = () => {
    history.push('/userprofile');
  };
  // setUsedForm(document.getElementById('h1'));
  // const ifEmptyInput = (text) => {
  //   console.log(text);
  //   setUsedForm(text.length > 0 ? false : true);
  // };

  // var opcion = ($event) => {
  //   console.log($event.target.value);
  //   ifEmptyInput($event.target.value);
  // };
  // opcion(document.getElementById('h1').value);
  return (
    <div className="pad">
      <h1 id="h1">Who are you?</h1>
      {/* {<h1>{firstName}</h1> || <h1>How are you?</h1>} */}
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="firstName">Fill your name</label> */}
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={
            formik.handleChange
            // ($event) => {
            //   console.log($event.target.value);
            //   ifEmptyInput($event.target.value);
            // }
          }
          placeholder="Fill your name"
          // value={formik.values.firstName}
        />

        <Button id="button" type="submit" disabled={usedForm}>
          Submit
        </Button>
        <Button
          id="button"
          onClick={() => onCancel()}
          type="button"
          disabled={usedForm}
        >
          Cancel
        </Button>
        <Button
          id="button"
          onClick={() => goToUserPage()}
          type="button"
          disabled={!usedForm}
        >
          Exit
        </Button>
      </form>
      <Footer />
    </div>
  );
};

export default HelloWorldPage;
