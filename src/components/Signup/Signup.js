import React from 'react';
import { Formik, Form } from 'formik';

import { InputDropdown, TextField } from '../Form';
import { FormContainer, Button, Heading } from './SignupStyles';
import { validate } from '../../config/formValidator';

const COLOR_OPTIONS = [
  { name: 'Select Color', value: '' },
  { name: 'Red', value: 'red' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Green', value: 'green' },
];

const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        color: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <FormContainer>
          <Heading>Sign Up</Heading>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <InputDropdown
              label="Color"
              option={COLOR_OPTIONS}
              name="color"
              type="select"
            />
            <Button type="submit">Register</Button>
            <Button type="reset">Reset</Button>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Signup;
