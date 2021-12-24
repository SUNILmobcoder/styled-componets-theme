import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';



const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <InputWraper>
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        {...field}
        {...props}
        autoComplete="off"
      />
       
      <Error component="div" name={field.name} className="error" />
    </InputWraper>
  );
};

export default TextField;

const InputWraper = styled.div`
  margin-bottom: 1rem;
  background: pink;
  color: yellow;
`;
const Label = styled.label`
  font-size: 1rem;
  display: block;
`;
const Input = styled.input`
  color: green;
  background: #333;
`;
const Error = styled(ErrorMessage)`
  position: absolute;
  color: red;
  font-size: 0.7rem;
`;
