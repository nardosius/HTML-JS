import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner
} from '@chakra-ui/react'
import * as Yup from 'yup'
import FullScreenSection from './FullScreenSection'
import useSubmit from '../hooks/useSubmit'
import { useAlertContext } from '../context/alertContext'

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      type: 'hireMe',
      comment: ''
    },
    onSubmit: async (values,{ resetForm }) => {
        await submit('www.api.com', values)
        console.log(response)
        onOpen(response.type,response.message)
        if(response.type === "success") {
          resetForm();
        }
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Invalid email address'),
      type: Yup.string().required(),
      comment: Yup.string()
        .required('Required')
        .min(25, 'Must be at least 25 characters')
    })
  })

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='#512DA8'
      py={16}
      spacing={8}
    >
      <VStack w='1024px' p={32} alignItems='flex-start'>
        <Heading as='h1' id='contactme-section'>
          Contact me
        </Heading>
        <Box p={6} rounded='md' w='100%'>
          <form
            onSubmit={e => {
              e.preventDefault()
              formik.handleSubmit(e)
            }}
          >
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                  id='name'
                  name='name'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  isInvalid={
                    formik.touched.name && formik.errors.name ? true : false
                  }
                  errorBorderColor='crimson'
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <span style={{ color: 'red' }}>{formik.errors.name}</span>
                )}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='email'>Email Address</FormLabel>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  isInvalid={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                  errorBorderColor='crimson'
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <span style={{ color: 'red' }}>{formik.errors.email}</span>
                )}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='type'>Type of enquiry</FormLabel>
                <Select
                  id='type'
                  name='type'
                  onChange={formik.handleChange}
                  value={formik.values.type}
                >
                  <option value='hireMe'>Freelance project proposal</option>
                  <option value='openSource'>
                    Open source consultancy session
                  </option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor='comment'>Your message</FormLabel>
                <Textarea
                  id='comment'
                  name='comment'
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  isInvalid={
                    formik.touched.comment && formik.errors.comment
                      ? true
                      : false
                  }
                  errorBorderColor='crimson'
                  onBlur={formik.handleBlur}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <span style={{ color: 'red' }}>{formik.errors.comment}</span>
                )}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button type='submit' colorScheme='purple' width='full'>
                {isLoading ? <Spinner color='wrhite.500' /> : 'Submit'}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  )
}

export default LandingSection
