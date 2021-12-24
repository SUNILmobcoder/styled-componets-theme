import * as Yup from 'yup';

// form validation Schema using Yup
const loginSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .min(2)
    .max(20)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  lastName: Yup.string()
    .required()
    .min(2)
    .max(20)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  email: Yup.string().email().required(),
  userName: Yup.string().required().min(4).max(20),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/(?=.*?[A-Z])/g, 'Should contain a Capital latter')
    .matches(/(?=.*?[a-z])/g, 'Should contain a Small latter')
    .matches(/(?=.*?[0-9])/g, 'Should contain a Number')
    .matches(/(?=.*?[#?!@$%^&*-])/g, 'Should contain a Spacial latter'),
  dob: Yup.date()
    .required()
    .test('age', 'You must be 18 or older', function (birthdate) {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return birthdate <= cutoff;
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'password should match')
    .required('Confirm password is required'),
  city: Yup.string()
    .required()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid city name'),
  pin: Yup.number()
    .required()
    .min(100000, 'Pin Code must be of 6 number')
    .max(999999, 'Pin Code must be of 6 number'),
  gender: Yup.string().required().oneOf(['male', 'female', 'other']),
});

const validate = Yup.object({
  firstName: Yup.string()
    .required()
    .min(2)
    .max(20)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  lastName: Yup.string()
    .required()
    .min(2)
    .max(20)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/(?=.*?[A-Z])/g, 'Should contain a Capital latter')
    .matches(/(?=.*?[a-z])/g, 'Should contain a Small latter')
    .matches(/(?=.*?[0-9])/g, 'Should contain a Number')
    .matches(/(?=.*?[#?!@$%^&*-])/g, 'Should contain a Spacial latter'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  color: Yup.string().required('Color is required!'),
});
export { loginSchema, validate };
