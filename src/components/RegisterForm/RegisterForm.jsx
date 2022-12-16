import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   console.log('register :', register);

  //   form.reset();
  // };

  return (
    // <form
    //   // className={css.form}
    //   onSubmit={handleSubmit}
    //   autoComplete="off"
    // >
    //   <label
    //   // className={css.label}
    //   >
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label
    //   // className={css.label}
    //   >
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label
    //   // className={css.label}
    //   >
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={values => {
            dispatch(register(values));
            console.log('register :', register);
            console.log('values :', values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Username</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 6) {
                        error = 'Password must contain at least 6 characters';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
