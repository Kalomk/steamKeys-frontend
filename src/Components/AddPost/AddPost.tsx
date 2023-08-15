'use client';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import { useRef } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Input,
} from '@chakra-ui/react';
import FileUploader from '../FileUploader/FileUploader';
import usePost from '@/hooks/usePost';
import * as Yup from 'yup';

const AddPost = () => {
  const { functionTypeDetector } = usePost();
  const fileRef = useRef<HTMLInputElement>(null);
  const postInputs = [
    { name: 'title', label: 'Title' },
    { name: 'description', label: 'Description' },
    { name: 'price', label: 'Price' },
    { name: 'secretKey', label: 'Secret-key' },
    { name: 'email', label: 'Email' },
    { name: 'image', label: 'Image' },
  ];

  const initialValues = {
    title: '',
    description: '',
    price: '',
    secretKey: '',
    email: '',
    isPrior: false,
    image: undefined,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    secretKey: Yup.string().required('Secret-key is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    image: Yup.mixed().test('is-file-too-big', 'File exceeds 5KB', (value) => {
      if (!value) return true;
      const validateValue = (value as string)?.length <= 4000;
      return validateValue;
    }),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const post = {
        title: values.title,
        description: values.description,
        price: values.price,
        secretKey: values.secretKey,
        email: values.email,
        isPrior: !!values.isPrior,
        image: values.image || '',
      };
      functionTypeDetector({
        postData: post,
        method: 'addPost',
      });
      if (fileRef.current) {
        fileRef.current.value = '';
      }
      console.log(post);
      resetForm();
    },
  });

  return (
    <Box>
      <Card color={'white'} bg={'#1b2838'}>
        <CardBody>
          <Heading mb={'20px'}>Place</Heading>
          <FormikProvider value={formik}>
            <Form className="flex flex-col">
              {postInputs.map(({ name, label }) => {
                const fieldName = name as keyof typeof initialValues; // Explicitly define the type of 'name'
                const value = formik.values[fieldName];
                const error = formik.errors[fieldName];
                const touch = formik.touched[fieldName];

                return (
                  <React.Fragment key={name}>
                    {name === 'image' ? (
                      <FormControl mt={5} id={`${name}-id`}>
                        <FileUploader
                          name={name}
                          type="file"
                          ref={fileRef}
                          setFieldValue={formik.setFieldValue}
                          accept=".svg"
                        />
                        {touch && error && <Text color="red.500">{error}</Text>}
                      </FormControl>
                    ) : (
                      <FormControl
                        mt={5}
                        id={`${name}-id`}
                        variant="floating"
                        isInvalid={!!(touch && error)}
                      >
                        <Input
                          type="text"
                          placeholder=" "
                          name={name}
                          value={typeof value === 'boolean' ? value.toString() : value}
                          onChange={formik.handleChange}
                        />
                        <FormLabel bg={'#1b2838'}>{label}</FormLabel>
                        {touch && error && <Text color="red.500">{error}</Text>}
                      </FormControl>
                    )}
                  </React.Fragment>
                );
              })}
              <label className="mt-5">
                <Field name="isPrior" type="checkbox" />
                <Text className="ml-[5px]" as="span">
                  Priority
                </Text>
              </label>
              <Button
                border={'1px'}
                borderColor={'blue.500'}
                colorScheme={'blue'}
                color={'white'}
                mt={4}
                type="submit"
              >
                Save
              </Button>
            </Form>
          </FormikProvider>
        </CardBody>
      </Card>
    </Box>
  );
};

export default AddPost;
