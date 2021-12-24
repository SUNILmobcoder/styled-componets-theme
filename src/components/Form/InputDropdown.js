import { ErrorMessage, useField } from 'formik';
import React from 'react';
import styled from 'styled-components';

const InputDropdown = ({ label, option, ...props }) => {
  const [field] = useField(props);
  return (
    <InputWraper>
      <Label htmlFor={field.name}>{label}</Label>
      <Input {...field} {...props} autoComplete="off">
        {option.map((item) => {
          return (
            <Option className="option" key={item.value} value={item.value}>
              {item.name}
            </Option>
          );
        })}
      </Input>
      <Error component="div" name={field.name} className="error" />
    </InputWraper>
  );
};

export default InputDropdown;

const InputWraper = styled.div`
  margin-bottom: 1rem;
  background: pink;
  color: yellow;
`;
const Label = styled.label`
  font-size: 1rem;
  display: block;
`;
const Input = styled.select`
  color: green;
  background: #333;
  appearance: none;
`;
const Option = styled.option`
  color: red;
  background: pink;
  font-size: 2rem;
`;
const Error = styled(ErrorMessage)`
  position: absolute;
  color: red;
  font-size: 0.7rem;
`;
