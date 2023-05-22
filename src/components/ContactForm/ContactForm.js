import { useSelector, useDispatch } from 'react-redux';
import { FormikForm, Input, Label, Btn } from 'components/Phonebook.styled';
import { toast } from 'react-hot-toast';
import { Formik, ErrorMessage } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { addContact } from 'redux/contactsSlice';
import { setStateContacts } from 'redux/selector';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(setStateContacts);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        const isNameExist = contacts.find(
          value => value.name.toLowerCase() === values.name.toLowerCase()
        );
        const isNumberExist = contacts.find(
          value => value.number === values.number
        );
        if (isNameExist) {
          toast.error(`${values.name}is already in contacts.`);
          return;
        }
        if (isNumberExist) {
          toast.error(
            `${values.number} is already in contacts as ${isNumberExist.name}.`
          );
          return;
        }
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <FormikForm onSubmit={handleSubmit}>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                placeholder="Enter contact name"
                onChange={value => {
                  handleChange(value);
                }}
              />
              <ErrorMessage name="name" />
            </Label>
            <Label>
              Number
              <Input
                type="tel"
                name="number"
                placeholder="Enter contact number"
                onChange={value => {
                  handleChange(value);
                }}
              />
              <ErrorMessage name="number" />
            </Label>
            <Btn type="submit">Add contact</Btn>
          </FormikForm>
        );
      }}
    </Formik>
  );
};
