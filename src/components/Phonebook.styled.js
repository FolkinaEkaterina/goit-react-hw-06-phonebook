import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 40px 15px;
`;

export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0;
  text-align: center;
  font-weight: normal;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 30px;
`;

export const Input = styled(Field)`
  display: block;
  margin: 5px 0;
  border: 1px solid #195b6e;
  box-shadow: 10px 5px 5px #195b6e;
`;

export const InputStyled = styled.input`
  display: block;
  margin: 5px 0;
  border: 1px solid #195b6e;
  box-shadow: 10px 5px 5px #195b6e;
`;

export const Btn = styled.button`
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #195b6e;
  box-shadow: 10px 5px 5px #195b6e;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: #7fb6c9;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 22px;
  transition: color 250ms;
  &:hover {
    color: #7fb6c9;
  }
  &:nth-of-type(2) {
    margin-bottom: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #195b6e;
    max-width: 350px;
    padding: 5px 15px;
    box-shadow: 10px 5px 5px #195b6e;
    margin: 5px 0;
    border-radius: 5px;
}
`;
